export const getGifs = async( category ) => {

  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=5&api_key=ovLQe0MSYuhnYn9tGgoaGtlTHlBuKl6o`;

  const resp = await fetch( url );
  const { data } = await resp.json();
  
  const gifs = data.map( ({ id, images, title }) => {
  
    return {
      id: id,
      title: title,
      url:  images.downsized_medium.url,
    }
  })
  
  return gifs;

}