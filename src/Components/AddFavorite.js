import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AddFavorite() {
    const dispatch = useDispatch();
    const modalInfo = useSelector( state => state.modalInfo)
    const storage = JSON.parse(localStorage.getItem("favorite"))
    let heart = false
    for (let i = 0; i<storage.length; i++) {
        if (storage[i].name == modalInfo[0].name && storage[i].favorite == true ){
            heart = true
        } else if  (storage[i].name == modalInfo[0].name && storage[i].favorite == false ){
            heart = false
        }
    }
    function addFav() {
        if (storage == null) {
            storage=[]
        }
        storage.unshift(modalInfo[0])
        storage[0].favorite = true
        localStorage.setItem("favorite", JSON.stringify(storage))
        alert("Added to your favorite!");
    }
    function deleteFav() {
        dispatch({type: "HEART", payload: false});
        let result = storage.reduce(function(newArr, storage){
            if (storage.name != modalInfo[0].name){
                newArr.push(storage)
            }
            return newArr;
        }, [])
        localStorage.setItem("favorite", JSON.stringify(result))
        alert("Deletd from your favorite, now she, or he, maybe it crying, i hope it's what you wanted");
    }
    return(
        <div className="Heart">
            <img src={ heart 
            ? "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Love_Heart_symbol.svg/2250px-Love_Heart_symbol.svg.png" 
            : "https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
            }
            onClick={() => {heart 
            ? deleteFav()
            : addFav()}
            }            
            alt="heart" />
        </div>
    )
}