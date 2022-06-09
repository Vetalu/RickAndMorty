import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import AddFavourite from "./AddFavorite";

export default function ModalWindow() {
    const dispatch = useDispatch()
    const modalInfo = useSelector( state => state.modalInfo)
    const active = useSelector( state => state.active)
    const episode = useSelector ( state => state.episode)
    const catchDiv = useSelector ( state => state.catchDiv)
    useEffect(() => {
        const getInfo = async () => {
            await axios.get(`https://rickandmortyapi.com/api/episode/${episode}`)
            .then((response) => {
                dispatch({type: "IDDIV", payload: response.data})
            });
        }
        getInfo()
    }, [active])
    return (
        <div 
            className={active ? "ModalWindowON" : "ModalWindowOFF"}
            onClick={() => dispatch({type: "MODULE_BOOLEN", payload: false})}
            >
            {modalInfo.map((character) => {
                const list = (
                <div className="Modalcharacter"
                    key={character.created}
                    >
                        <img src={character.image} />
                        <div>
                            <h2>
                                Name: {character.name}
                                <br />
                                Species: {character.species}
                                <br />
                                Gender: {character.gender}
                                <br />
                                Location: {character.location}
                                <br />
                                First appearance in:
                                <br/>{catchDiv.name}, 
                                <br/> {catchDiv.episode}
                                <br />
                                Status: {character.status}
                                <br />
                                Created: {character.created.slice(0,10)}
                            </h2>
                            <AddFavourite />
                        </div>
                </div>
            );
            return list;
            })}
        </div>
    )
}