import CardList from "../component/CardList"
import data from "../data.json"
import SwiperPage from "./SwiperPage"
import { useState } from "react";
import Filter from "../component/Filter";

const Home = () => {
  const [rating, setRating] = useState(false);
  const [title, setTitle] = useState("");
  const [unfiltered, setUnFiltered] = useState(true);



  function handleFilterChange(e) {
    if(e.target.value == "rating") {
      setRating(true);
      setTitle(false);
    } else if (e.target.value == "title") {
      setTitle(true);
      setRating(false);
    } else if(e.target.value == "unfiltered") {
      setUnFiltered(true);
      setTitle(false);
      setRating(false);
    }
  }

  function handleRatingChange(e) {
    setRating(e.target.value);
    setUnFiltered(false);
    setTitle(false);
  }

  function handleTitleChange(e) {
    setTitle(e.target.value);
    console.log(title)
    setUnFiltered(false);
    setRating(false);
  }


  return (
    <div>
      <SwiperPage />
      <h1 className="text-red-600 flex text-4xl justify-center mt-10 ">LIST OF MOVIES</h1>
      <Filter rating={rating} 
          title={title} 
          handleFilterChange={handleFilterChange} 
          handleRatingChange={handleRatingChange} 
          handleTitleChange={handleTitleChange}
      />
       <CardList rating={rating} 
            title={title}
            unfiltered={unfiltered}
       />
    </div>
  )
}

export default Home
