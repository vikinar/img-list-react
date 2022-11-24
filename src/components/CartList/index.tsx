import React, {useState} from "react";
import {useEffectOnce} from "../../hooks/useEffectOnce";
import Cart from "../Cart";
import Search from "../Search";

import styles from "./cartList.module.scss";

export interface Item {
    url: string
    title: string
    id: string
}

const CartList: React.FC = () => {
    const [items, setItems] = useState<Item[]>([])
    const [isLoading, setLoading] = useState<boolean>(true)
    const [value, setValue] = useState<string>('')
    const _limit = 7

    const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const getItems = async (start = 0, limit = _limit) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${limit}`)
            const data = await response.json()
            setItems((prevState: Item[]) => [...new Set([...prevState, ...data])])
        } catch (error) {
            console.log(error)
        }  finally {
            setLoading(false)
        }
    }

    useEffectOnce( () => {
        getItems();
    })

    return <section className="container">
        <Search value={value} changeValue={changeValue} />
        <div className={styles.cartList}>
            {!isLoading ? items.map((item: Item) =>
                <Cart key={item.id} item = {item} value = {value}/>
            ) : <span>Loading...</span>}
        </div>
        <button className={styles.btn} onClick={() => getItems(items.length, _limit)}>Next</button>
    </section>
}

export default CartList;