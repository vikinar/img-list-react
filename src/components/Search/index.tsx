import React, {useState} from "react";
import styles from "./search.module.scss"

interface PropTypes {
    value: string
    changeValue: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Search:React.FC<PropTypes> = ({value, changeValue}) => {
    return <section className={styles.search}>
        <label htmlFor="search">Search for a photo</label>
        <input type="text" value={value} placeholder="Type the title please..." id="search"
               onChange={changeValue}/>
    </section>
}

export default Search;