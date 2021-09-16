import React, { useEffect, useState } from 'react';
import ItemCard from '../ItemCard';

export default function Home() {
    const [character, setCaharcter] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(()=> {
       fetch('https://thronesapi.com/api/v2/Characters') 
       .then(response=> response.json())
       .then(data => setCaharcter(data));
    },[])

    useEffect(()=> {
        if(character.length) setFilteredData(character);
    }, [character])

    // filter data
    const filterData = e => {
        let value = e.target.value;
        let results = []
        if(value.length >= 2 ) {
            results = character.filter(char => {
                return char.firstName.toLowerCase().startsWith(value.toLowerCase())
            })
            setFilteredData(results);
        } else {
            setFilteredData(character);
        }

    }


    return (
    <div className="wrapper">
        <div className="container">
            <h2 className="page-title">GOT Characters List</h2>
            <div className="characters-wrap">
                <input placeholder="Search Character..." className="search-field" type="text" onChange={filterData} />
                {
                    filteredData?.map((item, index ) => (
                        <ItemCard
                            key={index}
                            width="500" 
                            id={item.id + 1} 
                            fullName={item.fullName}
                            family={item.family}
                            title={item.title}
                            image={item.imageUrl}
                        />
                    ))
                }
            </div>
        </div>
     </div>
  );
};
