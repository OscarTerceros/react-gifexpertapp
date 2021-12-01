import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GiftGrid = ( { category } ) => {
  
  const [images, setImages] = useState([]);

  useEffect( () => {
    getGifts();
  }, [])

  const getGifts = async() => {

    const url = 'https://api.giphy.com/v1/gifs/search?q=hunter+x+hunter&limit=5&api_key=ovLQe0MSYuhnYn9tGgoaGtlTHlBuKl6o';

    const resp = await fetch( url );
    const { data } = await resp.json();
    
    const gifs = data.map( ({ id, images, title }) => {
    
      return {
        id: id,
        title: title,
        url:  images.downsized_medium.url,
      }
    })
    
    setImages( gifs );

  }
  
  return (
    <div>
      <h3> { category } </h3>
      
      { images.map( ( img ) => 
        (
          <GifGridItem 
            key = { img.id }
            { ...img }
          />
        ))
      }
      
    </div>
  )
}