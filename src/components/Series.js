import React from 'react';

const Series = (props) => (
  <div>
    {props.series && props.series.map((tv)=> {
      return (
        <div key = {tv.show.id} >
          <h1>{tv.show.name}</h1>  
            <img 
            src={tv.show.image.medium} 
            alt={tv.show.name}/>
            <p>Rating: <span>
                {tv.show.rating.average}
            </span></p>
          
        </div>
      )})}
	 { 
	 	props.error && <p>{ props.error }</p>  
	 }
  </div>
);
export default Series