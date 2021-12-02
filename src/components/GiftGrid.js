import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
//import { GifGridItem } from './GifGridItem';

export const GiftGrid = ( { category } ) => {
  
  const { loading } = useFetchGifs();



  /* const [images, setImages] = useState([]);
  
  useEffect( () => {
    getGifs( category )
      .then( imgs => setImages( imgs ))
  }, [ category ]) */
  
  return (
    <>
      <h3> { category } </h3>

      { loading ? 'Cargando...' : 'Data Cargada' }

      {/* <div className = "card-grid">
        
        { images.map( ( img ) => 
          (
            <GifGridItem 
              key = { img.id }
              { ...img }
            />
          ))
        }
        
      </div> */}
    </>
  )
}