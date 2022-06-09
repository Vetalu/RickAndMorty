import React, {useState,useEffect, useContext} from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import FavList from "./FavList";

export default function SearchContent() {
    const dispatch = useDispatch()
    let [search, setSearch] = useState([]);
    useEffect(() => {
        const getInfo = async () => {
            await axios.get(`https://rickandmortyapi.com/api/character/?name=${search}`)
            .then((response) => {
                dispatch({type: "MAPING", payload: response.data.results})
            }).catch(() => {
                dispatch({type: "MAPING", payload: [{
                    id: 999,
                    name: 'Wow, we don`t have someone with this name',
                    status: "Maybe in new season we add this one:)",
                    image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
                }]})
            });
        }
        getInfo()
    }, [search])
    return (
        <div className="Search">
            <FavList />
            <input placeholder="Find me!" onChange={(event) => {
                setSearch(event.target.value)
                }
            }>
            </input>
        </div>
    )
}