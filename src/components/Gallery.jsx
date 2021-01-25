import React from 'react'
import './Gallery.scss'

const renderImageContent = (src, index) => {
    return (
        <div  key={index} onClick={(e) => alert('e, index')}>
            <img alt={src.title} src={src.cover}  />
        </div>
    )
}
const Gallery = ({ splashs }) => {
    return (
        <div className="gallery-container">
            <div className="gallery-grid">
                {splashs.map(renderImageContent)}
            </div>
        </div>
        )
    }
export default Gallery;