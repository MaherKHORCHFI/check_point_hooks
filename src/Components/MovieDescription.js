import React from 'react'
import {Link} from 'react-router-dom'
import { Card,Button } from 'react-bootstrap';




const MovieDescription = (props) => {
    const movieFound= props.movieData.find(
        (movie) => movie.id== props.match.params.id
        );
    console.log(props.match.params.id)

    return (


        <div className="ContainerDescription" >
      <div>
      <iframe 
               width="720" height="500" 
               src={movieFound.trailer} 
               frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
      </div>
      <div className="movieDescription" >
        <h2>Description: </h2>
        
        <p style={{ fontSize: "16px", textAlign: "justify" }}>{movieFound.description}</p>
        <hr/>
          <Link strict to="/">
                <button> Back to Movies</button>
          </Link>

      </div>
    </div>

        // <div style={{display:"flex", alignContent:"space-evenly", alignItems:"center"}}>
        //     <div>
        //     <iframe 
        //       width="560" height="315" 
        //       src={movieFound.trailer} 
        //       frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        //    </iframe>
        //    </div>
        //    <div>
        //        <p>{movieFound.description}</p>
        //        <Link strict to="/">
        //        <button> Movie List</button>
        //        </Link>

        //    </div>
        // </div>
        
              

     
        )
}

export default MovieDescription
