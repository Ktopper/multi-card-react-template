import Footer from './Footer';
import { useState, useEffect } from "react";
import Card from './Card.jsx';

function Gallery(){
  const [data, setData] = useState([]);
  
  useEffect(() => {
      fetch("../json/gallery_cards.json")
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []); 

  return(
  <div className='container'>
    <div className='title-area'><h2>Gallery</h2></div>
    <div className='card-content-area'>
    {data.map(item => (
      <Card key={item.id} item={item} />
  ))}
    
    </div>
    <Footer/>
    
  </div>
);
  }
export default Gallery;