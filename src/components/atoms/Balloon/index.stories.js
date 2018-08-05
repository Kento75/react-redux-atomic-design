import React from 'react';
import { withNotes } from '@storybook/addon-notes';
import Balloon, { BalloonTip } from './index.js';
import { TrashCanIcon } from '../Icon/index.js';
import { withStyle } from '../../utils/decorators.js';

const note = withNotes('読みやすさを考慮すると 10 文字までが適当。11 文字以上を表示したい場合は別のデザインを検討すること。');

export default stories => stories
  .add('2文字ラベル', () => <Balloon>次へ</Balloon>)
  .add('4文字ラベル', () => <Balloon>削除する</Balloon>)
  .add('10文字ラベル', note(() => <Balloon>削除したかったらする</Balloon>))
  .add('20文字ラベル', note(() => <Balloon>削除したかったらするけど、どうしたいかな</Balloon>))
  .add('30文字ラベル', note(() => <Balloon>削除したかったらするけど、どうしたいかな。嫌なら、やめようか</Balloon>))
  .add('30文字ラベル改行', () => <Balloon>削除したかったらするけど、どうしたいかな。<br />嫌なら、やめようか</Balloon>)
  .add('絶対座標配置', () => <Balloon style={{ position: 'absolute', top: '200px', left: '200px' }}>左上から 200px に配置</Balloon>)
  .add('アイコンラベル', () => <Balloon><TrashCanIcon /></Balloon>)
  .add('絵文字', () => <Balloon>❌</Balloon>)
  .add('バルーンチップ', () => withStyle({ marginTop: '50px' })(
    <p>ここに<BalloonTip label="注釈を記述するUI">バルーンチップ</BalloonTip>を表示</p>
  ))
  .add('長文中のバルーンチップ', () => (
    <p style={{ padding: '50px', width: '300px' }}>
      専門的なことを説明する文章の場合、文章中のある言葉が一般的に使われるものでない場合などに注釈を表示したいときがあります。たとえば<BalloonTip label="注釈を記述するUI">バルーンチップ</BalloonTip>のようなUIを使うことでそれが可能です。
    </p>
  ))
  .add('BalloonTip in a long sentence', () => (
    <p style={{ padding: '50px', width: '300px' }}>
      When it comes to terminology, you would like to add an note to that in order to describe the meaning. That is when <BalloonTip label="UI for additional information">BalloonTip</BalloonTip> comes to the resque. It only shows up when a user puts his or her mouse cursor on the terminology.
    </p>
  ));
