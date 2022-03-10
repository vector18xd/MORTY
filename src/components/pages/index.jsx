import React from "react";
import { Header } from "../layouts/header";
import { Api } from "../layouts/Api";
export const Morty = () =>{
    return(
        <div className="morty">
            <Header/>
            <Api/>
        </div>
    )
}