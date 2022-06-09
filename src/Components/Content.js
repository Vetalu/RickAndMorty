import axios from "axios";
import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalWindow from "./ModalWindow";

export default function Content() {
    const dispatch = useDispatch()
    const mapCharacter = useSelector( state => state.information)
    let [num, setNum] = useState(1);
    let counter = 0
    useEffect(() => {
        if (num < 1 ){
            setNum(num = 0)
        } else if (num >=42) {
            setNum (num = 42)
        }
        const getInfo = async () => {
            await axios.get(`https://rickandmortyapi.com/api/character/?page=${num}`)
            .then((response) => {
                dispatch({type: "MAPING", payload: response.data.results})
            });
        }
        getInfo()
    }, [num])
    function click(e) {
        let idDiv = e.target.id
        dispatch({type: "MODULE_BOOLEN", payload: true})
        dispatch({type: "EPISODE", payload: mapCharacter[idDiv].episode[0].slice(40)})
        dispatch({type: "MODAL_WIND", payload: [{
            name: mapCharacter[idDiv].name,
            species: mapCharacter[idDiv].species,
            gender: mapCharacter[idDiv].gender,
            location: mapCharacter[idDiv].location.name,
            episode: mapCharacter[idDiv].episode[0],
            status: mapCharacter[idDiv].status,
            created: mapCharacter[idDiv].created,
            image: mapCharacter[idDiv].image,
            favorite: false,
        }]})
    }
    return (
        <div className="Board">
        <ModalWindow />
            {mapCharacter.map((character) => {
                const list = (
                <div 
                    onClick={(e) => click(e)}
                    className="character" 
                    key={character.url}
                    id={counter}
                    >
                    <div>
                        <img id={counter} src={character.image} />
                    </div>
                    <div id={counter}>
                        {character.name}
                        <br/>
                        {character.status}
                    </div>
                </div>
                
            );
            counter++
            return list;
            })}
            <footer className="Pagination">
                <button onClick={() => setNum(num = num-1)}>&#8592;</button>
                <button onClick={() => setNum(num = num+1)}>{num+1}</button>
                <button onClick={() => setNum(num = num+2)}>{num+2}</button>
                <button onClick={() => setNum(num = num+3)}>{num+3}</button>
                <button onClick={() => setNum(num = num+1)}>&#8594;</button>
            </footer>
        </div>
    );
}