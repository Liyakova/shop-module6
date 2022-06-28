import React from 'react';
import { useState } from "react";
import { data } from "./Data";
import Buttons from "./Buttons";
import BuyClothes from "./Clothes";

function Items() {
    const [clothes, setClothes] = useState(data);
    console.log(clothes)
  
    const chosenClothes = (searchTerm) => {
      const newClothes = data.filter(element => element.searchTerm === searchTerm);
      setClothes(newClothes);
    }

    return(
        <div>
        <div className='cont'>
          <h2 className='back'>Free Standart Shipping</h2>
        </div>
        <Buttons filteredClothes = {chosenClothes}/>
        <BuyClothes fashion = {clothes}/>
      </div>
    )
}

export default Items;