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

      <figcaption>
        <button type="submit" className="image-delete">
          delete
        </button>
        <div className="image-desc">{desc}</div>
      </figcaption>
    </figure>
  );
};

export default Image;
