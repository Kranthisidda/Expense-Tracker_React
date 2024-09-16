import React ,{useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction1 from './Transaction1'
export default function TransactionList(){
    const {transactions} = useContext(GlobalContext)
    
    return(<>
        <h3>History</h3>
        
        <ul  className ="list">
            {transactions.map(transaction=>{
                return (<Transaction1 key = {transaction.id} transaction = {transaction}/>) 
})}
            
        </ul>
        </>
    )

}