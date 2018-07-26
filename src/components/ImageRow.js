import React from 'react'

const ImageRow = ({ count = 7, collectionId, alt }) => {
  const images = Array.from(Array(count)).map(
    (num, i) =>
      `https://source.unsplash.com/collection/${collectionId}/50${i}x500`
  )
  return (
    <section className="section gallery">
      <div className="flex">
        {images.map(src => (
          <div key={`image-${src}`}>
            <img src={src} alt={alt} />
          </div>
        ))}
      </div>
    </section>
  )
}
export default ImageRow
