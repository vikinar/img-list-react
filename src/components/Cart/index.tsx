import styles from './cart.module.scss'
import {Item} from "../CartList";
import React, {useContext, useEffect, useState} from "react";
import {SearchContext} from "../CartList";

interface PropTypes {
    item: Item
}

const Cart:React.FC<PropTypes> = ({item}) => {
    const [found, setFound] = useState<boolean>(false)
    const {value} = useContext(SearchContext)

    useEffect(() => {
        setFound(() => item.title.includes(value) && value !== '')
    }, [value])

    return <section className={`${styles.cart} ${found && styles.cart_found}`}>
        <img src={item?.url} alt=""/>
        <article className={styles.cart_description}>
            <p className={`${found && styles.cart_found}`}>{item.title}</p>
        </article>
    </section>
}

export default Cart;