import React, { useState } from 'react'

import './Cards.css'

const Cards = () => {
    const [cardData, setCardData] = useState([
                                   {name: "This"},
                                   {name: "Is"},
                                   {name: "My"},
                                   {name: "Card"},
                                   {name: "Practice"},
                                   {name: "Project"} 
                                ])

    console.log("CardData", cardData)
    return (
        <div className="outer_container">
             {cardData.map(c => {
                return <div className="inner_container" key={c.name}>
                    <p className="text" >{c.name}</p>
                </div>
            })} 
        </div>
    )
}

export default Cards