const path = require('path');
const fs = require('fs-extra');
const util = require('util');

const pointNum = process.argv[2] || 0;
const isWin = process.platform === 'win32';
const root = path.resolve(__dirname, '..');
const src = path.resolve(root, 'src');
const backstop = path.resolve(root, 'backstop.json');
const checkpoints = path.resolve(root, 'checkpoints');
const backups = path.resolve(checkpoints, 'backups');
const storyshots = path.resolve(src, 'components/storyshots.test.js');

function fileExists(file) {
  try {
    fs.statSync(file);
  } catch (err) {
    if (err.code === 'ENOENT') return false;
  }
  return true;
}

function validateCheckpoint(point) {
  const target = path.resolve(
    checkpoints, 
    `checkpoint_${ ('000' + point).slice(-3) }`,
  );
  return fileExists(target);
}

function move2backups() {
  if (!fileExists(src)) return;
  const timestamp = `${ Date.now() }`;

  const target = path.resolve(backups, timestamp);
  fs.ensureDirSync(target)

  try {
    fs.renameSync(src, path.resolve(target, 'src'));
  } catch (err) {
    let message = err.message;
    if (err.code === 'EPERM' && isWin) {
      message = `src ディレクトリを移動できませんでした。src ディレクトリ内のファイルを表示したり、ほかのアプリケーションで開いていないことを確認してください。\n${ message }`;
    }
    console.error(message);
    process.exit(1);
  }

  const targetBackstop = path.resolve(backups, timestamp, 'backstop.json');
  if (fileExists(backstop)) {
    fs.renameSync(backstop, targetBackstop);
  }
}

function moveCheckpoint(point) {
  const targetDir = path.resolve(
    checkpoints, 
    `checkpoint_${ ('000' + point).slice(-3) }`,
  );
  const targetSrc = path.resolve(targetDir, 'src');
  const targetBackstop = path.resolve(targetDir, 'backstop.json');

  if (fileExists(src)) {
    console.log('The original src needs to be moved to the backup directory.');
  } else {
    fs.copySync(targetSrc, src);
  }

  if (fileExists(backstop)) {
    console.log('The original backstop.json needs to be moved to the backup directory.');
  } else if (fileExists(targetBackstop)) {
    fs.copySync(targetBackstop, backstop);
  }
}

function removeStoryshots() {
  if (!fileExists(storyshots)) return;
  fs.unlinkSync(storyshots);
}

function checkpoint(point) {
  if (!validateCheckpoint(point)) {
    console.log(`There is no checkpoint ${ point }.`);
    return;
  }
  move2backups();
  moveCheckpoint(point);
  if (isWin) removeStoryshots();
}

checkpoint(pointNum);
