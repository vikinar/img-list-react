import React, {useState, createContext, useCallback, useContext} from "react";
import styles from "./search.module.scss"
import {SearchContext} from "../CartList";



const Search:React.FC = () => {
    const {value, setValue} = useContext(SearchContext)

    const changeValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }, [SearchContext])

    return (
        <section className={styles.search}>
            <label htmlFor="search">Search for a photo</label>
            <input type="text" value={value} placeholder="Type the title please..." id="search"
                   onChange={changeValue}/>
        </section>
    )
}

export default Search;