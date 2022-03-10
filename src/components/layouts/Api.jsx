import React, {useEffect}from "react";
import {Card} from "../UI/card";
import axios from "axios"
export const Api = () =>{
    const [apis, setApis] = React.useState([])
    useEffect(()=>{
        FetchApi()
    })
    const FetchApi =()=>{
        
        let name = document.querySelector("input").value
        axios({
            method: 'get',
            url: "https://rickandmortyapi.com/api/character/?name="+name,
          })
            .then(function (response) {
              setApis(response.data.results)
              console.log(response)
            });
    }
    return(
        <div>
            <div className="Input">
                <input type="text" className="search" onChange={FetchApi} />    
            </div>
            <section className="mains">
                {apis.map(elemt=>(
                    <Card text={elemt.name} url={elemt.image} alt="1" gender={elemt.gender} />
                ))}
                
            </section>
        </div>
    )
}