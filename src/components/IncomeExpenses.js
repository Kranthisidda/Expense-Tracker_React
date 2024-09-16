import React ,{useContext}from "react";
import { GlobalContext } from "../context/GlobalState";
export default function IncomeExpenses(){
    const { transactions } = useContext(GlobalContext)
    let income = 0
    let expense = 0
    const amounts = transactions.map((transaction) => Number(transaction.amount))
    amounts.map((amount)=> amount > 0 ? income += amount : expense += Math.abs(amount))
    return(<>
        <div className="inc-exp-container">
            <div>
            <h4>Income</h4>
            <p id="money-plus" className="money plus">+${income}</p>

        </div>
        <div>
            <h4>Expense</h4>
            <p id="money-minus" className="money minus">-${expense}</p>

        </div>
        </div>
        </>
    )

}