import React, { useState,useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import ImageList from './components/ImageList';
import Loader from './components/Loader';
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component';

function App() {
  const [images, setImages] = useState([])
  // const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchImages()
    console.log(images)
  }, [])

  const fetchImages = (count = 15) => {
    const api = 'https://api.unsplash.com'
    const apiKey = process.env.REACT_APP_APIKEY

    axios
      .get(`${api}/photos/random/?client_id=${apiKey}&count=${count}`)
      .then(res => {
        setImages([...images, ...res.data])
      })
  }
  

  return (
    <div className="App">
      <Header />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <ImageList images={images} />
      </InfiniteScroll>
    </div>
  );
}

export default App;
