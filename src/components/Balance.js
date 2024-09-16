import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export default function Balance(){
    const {transactions} = useContext(GlobalContext)
    const amounts = transactions.map((transaction) => Number(transaction.amount))
    let total = 0

    for(let i of amounts){
        total += i
    }
    
    return(<>
        <h4>Your balance</h4>
        <h1 id="balance">{total}</h1>
        </>
    )

}