import { configure, addDecorator } from '@storybook/react';
import '@storybook/addon-chapters';
import loadDirectories from 'storybook-directory-chapters';

import { storiesOf } from '@storybook/react';

const context = require.context('../src/components', true, /.stories.js$/);

function loadStories() {
  if (
    (typeof location !== 'undefined' && location.port === '9001') ||
    process.env.STORY_SHOTS === '1'
  ) {
    loadDirectoriesFlat(context);
  } else {
    loadDirectories(context);
  }
}

configure(loadStories, module);

function loadDirectoriesFlat(context) {
  context.keys().forEach((c) => {
    const dirs = getDirs(c);

    if (!dirs.length) return;

    const stories = storiesOf(dirs[dirs.length - 1], module);
    context(c)(stories);
  });
}

function getDirs(path) {
  return path.replace(/..?\//, '').split('/').reverse().slice(1).reverse();
}
