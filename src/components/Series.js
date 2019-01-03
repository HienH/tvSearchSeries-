import React from 'react';

const Series = (props) => (
  <div>
    {props.series && props.series.map((tv)=> (
     <div key = {tv.show.rating.id}> 
       <img 
          src={tv.show.image !== null ? tv.show.image.medium : 'https://via.placeholder.com/210x295?text=Image not avaliable'}
        />
        <h1>Rating: {tv.show.rating.average !== null ? tv.show.rating.average : <p>NAN </p> }</h1>

      </div>
    ))}
	 { 
	 	props.error && <p>{ props.error }</p>  
	 }
  </div>
);
export default Series


