import React from 'react'
import { doc, setDoc } from "firebase/firestore"; 
import { firestore } from './Fire';

export default function ComponentDoug() {

    const clickToSetCity = (cityName) => {
        console.log("cityName: " + cityName);
        setDoc(doc(firestore, "cities", cityName), {
            name: cityName,
            state: "CA",
            country: "USA"
        });
    }

  return (
    <div>
        <h2>ComponentDoug</h2>
        <button onClick={() => clickToSetCity("San Fran")}>click to set</button>
    </div>
  )
}
