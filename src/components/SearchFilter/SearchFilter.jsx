import React, { useState } from "react";
import "./SearchFilter.css";

const SearchFilter= () =>{
    const Items = ["Apple","Mango","Banana","Watermelon"];
    const [fruit,setFruit]=useState(Items)
    function changeHandler(event){
        let impValue =event.target.value.toLowerCase();
        if(impValue==="")setFruit(Items);
        console.log(event.target.value);

        setFruit(Items.filter((fruit)=>fruit.toLowerCase().includes(impValue)));
        console.log(fruit);
    }
    return(
        <div className="List-container">
            <form action="#">
                <label htmlFor="imp">Search</label>
                <input type="text" id="imp" name="imp" onChange={changeHandler}/>
            </form>
            <ul>
            {
                fruit.map((fruit,idx)=>(
                    <li key={idx}>{fruit}</li>
                ))
            }
            </ul>
        </div>
    )
} 
export default SearchFilter;