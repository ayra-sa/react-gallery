import React from 'react'
import ImageItem from './ImageItem'

const ImageList = ({images}) => {
    const listImage = images.map(image => (
        <ImageItem key={image.id} url={image.urls.thumb} name={image.user.name}/>
    ))

    return (
        <ul className="img-list">
            {listImage}
        </ul>
    )
}

export default ImageList