import React from "react";

export const Card = ({text, url, nameI, gender}) =>{
    return(
        <div class="card">
            <h2 class="nama-card">{text}</h2>
            <img src={url} alt={nameI}/>
            <p class="gender">{gender}</p>
        </div>
    )
}