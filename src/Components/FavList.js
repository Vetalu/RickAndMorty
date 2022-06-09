import React from "react";
import { useDispatch } from "react-redux";

export default function FavList() {

    if (localStorage.getItem("favorite") == null){
            localStorage.setItem("favorite",JSON.stringify([{
                name: 'In fact, you should like us, not the other way around',
                status: "Go and find someone you like",
                image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
        }]))
    }
    const dispatch = useDispatch();
    function listCharacter () {
        let storage = JSON.parse(localStorage.getItem("favorite"));
        if(storage.length > 1) {
            storage.pop();
        }
        dispatch({type: "MAPING", payload: storage})
    }
    return (
        <h3 onClick={() => listCharacter()}>
            Your favorite Character!
        </h3>
    )
}