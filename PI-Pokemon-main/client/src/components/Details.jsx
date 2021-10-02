import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";
import { useEffect } from "react";

export default function Details(props){
const dispatch = useDispatch()

useEffect(()=>{
    dispatch(getDetail(props.match.params.id))
}, [dispatch])

const myPokemon = useSelector ((state) = state.detail)

return (
    <div>
        {
        myPokemon.length>0?
        <div>
            <h1>{myPokemon.name}</h1>
            <img> src= {myPokemon.img? myPokemon.img : myPokemon.img}</img>
        </div>
        }
    </div>
)

}