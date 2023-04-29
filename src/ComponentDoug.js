import React, { useState } from 'react'
import { doc, setDoc } from "firebase/firestore"; 
import { firestore } from './Fire';

export default function ComponentDoug() {
    const [cityName, setCityName] = useState("San Francisco");

    const clickToSetCity = (incCityName) => {
        console.log("incCityName: " + incCityName);
        setDoc(doc(firestore, "cities", incCityName), {
            name: incCityName,
            state: "CA",
            country: "USA"
        });
    }

  return (
    <div>
        <h2>ComponentDoug</h2>
        <input 
            type="text"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
        />
        <button onClick={() => clickToSetCity(cityName)}>click to set {cityName}</button>
    </div>
  )
}
