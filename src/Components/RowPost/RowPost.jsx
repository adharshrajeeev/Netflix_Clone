import React,{useState,useEffect} from 'react'
import './RowPost.css'
import YouTube from 'react-youtube'
import axios from '../../axios'
import { imgUrl,API_KEY } from '../../Constants/constants'




function RowPost(props) {
    const [movies,setMovies]=useState([]);
    const [urlId,setUrlId]=useState('')
    useEffect(()=>{
           axios.get(props.url).then((response)=>{
            console.log(response.data)
            setMovies(response.data.results)
           }).catch((err)=>{
              console.log("error ocuured "+err)
           })
    },[])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
         
          autoplay: 1,
        },
      };
      const handleMovieTrailer=(id)=>{
           axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{

            const index = response.data.results.map(object => object.type).indexOf('Trailer');
            if(index >0){
                setUrlId(response.data.results[index])
            }else
            {
                console.log("error occured Array is empty")
            }
           })
      };
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className= "posters">
                {movies.map((obj)=>
                     <img onClick={()=>handleMovieTrailer(obj.id)} src={`${imgUrl+obj.backdrop_path}`} alt="poster" className={props.isSmall ? 'smallPoster' : "poster"} />
                )}
               
              
            </div>
           { urlId && <YouTube opts={opts} videoId={urlId.key}/>}
        </div>
    )
}

export default RowPost


