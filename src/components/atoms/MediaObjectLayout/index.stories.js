import React from 'react';
import MediaObjectLayout from './index.js';

export default stories => stories
  .add('デフォルト', () => (
    <MediaObjectLayout>
      <div>
        <img src="mock/images/img01.jpg" width="192" height="108" alt="MediaObjectLayout を説明するためのサンプル画像" />
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut dictum purus. Praesent id pulvinar sem, eu congue velit. Etiam porta luctus tellus, quis finibus quam condimentum eu. Cras vestibulum mauris non tempus congue.</p>
      <p>Sed pellentesque suscipit ex sed consequat. Fusce lobortis tincidunt euismod. Etiam sollicitudin molestie semper. Donec mi sem, molestie at molestie id, posuere ac lectus. Duis mollis, mauris venenatis sagittis porta, quam velit dictum diam, non aliquam nunc elit ut ex.</p>
    </MediaObjectLayout>
  ))
  .add('section 指定', () => (
    <MediaObjectLayout tag="section">
      <div>
        <img src="mock/images/img01.jpg" width="192" height="108" alt="MediaObjectLayout を説明するためのサンプル画像" />
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut dictum purus. Praesent id pulvinar sem, eu congue velit. Etiam porta luctus tellus, quis finibus quam condimentum eu. Cras vestibulum mauris non tempus congue.</p>
      <p>Sed pellentesque suscipit ex sed consequat. Fusce lobortis tincidunt euismod. Etiam sollicitudin molestie semper. Donec mi sem, molestie at molestie id, posuere ac lectus. Duis mollis, mauris venenatis sagittis porta, quam velit dictum diam, non aliquam nunc elit ut ex.</p>
    </MediaObjectLayout>
  ));
