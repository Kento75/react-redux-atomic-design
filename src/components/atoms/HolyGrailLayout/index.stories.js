import React from 'react';
import HolyGrailLayout, {
  HolyGrailTop,
  HolyGrailBottom,
  HolyGrailMain,
  HolyGrailLeft,
  HolyGrailRight,
} from './index.js';

export default function (stories) {
  return stories 
  .add(
    'デフォルト',
    () => (
      <HolyGrailLayout>
        <HolyGrailTop>
          <header style={{ minHeight: '50px', backgroundColor: '#ccc' }}>header</header>
        </HolyGrailTop>
        <HolyGrailBottom>
          <footer style={{ minHeight: '50px', backgroundColor: '#ccc' }}>footer</footer>
        </HolyGrailBottom>
        <HolyGrailMain>
          <main style={{ minHeight: '300px', backgroundColor: '#777' }}>main</main>
        </HolyGrailMain>
        <HolyGrailLeft>
          <nav style={{ minHeight: '150px', backgroundColor: '#aaa' }}>nav</nav>
        </HolyGrailLeft>
        <HolyGrailRight>
          <aside style={{ minHeight: '100px', backgroundColor: '#aaa' }}>aside</aside>
        </HolyGrailRight>
      </HolyGrailLayout>
    )
  )
}
