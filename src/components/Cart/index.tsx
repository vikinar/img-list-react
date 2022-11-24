import styles from './cart.module.scss'
import {Item} from "../CartList";
import React, {useEffect, useState} from "react";

interface PropTypes {
    item: Item
    value: string
}

const Cart:React.FC<PropTypes> = ({item, value}) => {
    const [found, setFound] = useState<boolean>(false)

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