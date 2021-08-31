import React from 'react'

const ImageItem = ({url, key, name}) => {
    
    return (
        <li>
            <img src={url} key={key} alt='' />
            <p className='info'>by {name}</p>
        </li>

    )
}

export default ImageItem