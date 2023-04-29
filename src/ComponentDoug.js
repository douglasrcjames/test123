import React, { useState } from 'react'
import { doc, setDoc } from "firebase/firestore"; 
import { firestore } from './Fire';


export default function ComponentDoug() {
    let persons = [
        {
            name: "Doug", 
            age: 55,
            address: {
                street: "123 Main St",
                city: "San Francisco",
                state: "CA",
                zip: "94101"
            },
        },
        {
            name: "Sue", 
            age: 44,
            sex: "female",
            alive: false,
        },
        {
            name: "Bob", 
            age: 33
        },
        {
            name: "Vince", 
            age: 11
        },
        {
            name: "Jill", 
            age: 22
        },
    ];


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
            id="my-id"
            type="text"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
        />
        <button onClick={() => clickToSetCity(cityName)}>click to set {cityName}</button>
        <br/>
        <hr />
        <br/>
        <h2>Persons:</h2>
        <ul>
            {
                persons.map((person, index) => {
                    return (
                        <li key={index} style={{margin: "20px 0 0 0"}}>
                            <ul>
                                <li><b>Name:</b> {persons[index].name}</li>
                                <li><b>Age:</b> {persons[index].age}</li>
                            </ul>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}
