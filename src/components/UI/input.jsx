import React from "react";

export const Input = ({classN, Type, event}) =>{
    return(
        <div className="Input">
            <input type={Type} className={classN} onChange={event}/>
        </div>
    )
}