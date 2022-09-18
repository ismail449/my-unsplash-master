import React from 'react';
import './Image.css';

interface ImageProbs {
  url: string;
  desc: string;
}
const Image: React.FC<ImageProbs> = ({ url, desc }) => {
  return (
    <figure className="image">
      <img src={url} />
      <figcaption>{desc}</figcaption>
    </figure>
  );
};

export default Image;
