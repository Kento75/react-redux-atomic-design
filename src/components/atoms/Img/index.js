import React from 'react';
import { containPresenter } from '../../utils/HoC.js';

const ImgPresenter = ({ src, srcSet, webpSrcSet, alt, width, height, ...props }) => (
  <picture { ...props }>
    <source srcSet={ webpSrcSet } type="image/webp" />
    <img src={ src }
      alt={ alt }
      srcSet={ srcSet }
      width={ width }
      height={ height } />
  </picture>
);

const riasRegexp = /images\/([0-9]+)\/([0-9]+)/;

function createSrc(src, width, height) {
  if (!width || !height) return src;
  
  const ratio = window.devicePixelRatio || 1;
  const w = width * ratio;
  const h = height * ratio;
  return src.replace(riasRegexp, (match, p1, p2) => `images/${ w }/${ h }`);
}

function createSrcSet(src, width, height, extension) {
  if (extension) {
    src = src.replace(/\.[a-z0-9]+[^#\?]?/, `.${ extension }`);
  }
  if (
    !riasRegexp.test(src) ||
    !width ||
    !height
  ) return src;

  const [ path, rest ] = src.split('images/');
  const file = rest.match(".+/(.+?)([\?#;].*)?$")[1];

  return [ 1, 1.5, 2, 3, 4 ]
    .map(dpr => `${ path }images/${ width * dpr }/${ height * dpr }/${ file } ${ dpr }x`)
    .join(', ');
}

const ImgContainer = ({ presenter, src, width, height, ...props }) => {
  const srcSet = createSrcSet(src, width, height);
  const webpSrcSet = createSrcSet(src, width, height, 'webp');
  src = createSrc(src, width, height);
  return presenter({ src, srcSet, webpSrcSet, width, height, ...props });
};

const Img = containPresenter(ImgContainer, ImgPresenter);
export default Img;

Object.assign(Img, { displayName: 'Img' });
