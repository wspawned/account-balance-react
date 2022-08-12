import { useState } from "react";
import Balance from "./Balance";
import History from "./History";

const Account = () => {

    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");
    const [history, setHistory] = useState([]);

    const reverseHistory = history.slice().reverse();

    const calculateIncome = () => {
        let inc = 0;
        for(const move of history) {
            if(+move.amount>= 0) {
                inc += (+move.amount)
            }
        }
        return( inc.toFixed(2) )
    }

    const calculateExpense = () => {
        let exp = 0;
        for(const move of history) {
            if(+move.amount < 0) {
                exp += (+move.amount)
            }
        }
        return( (exp*(-1)).toFixed(2) )
    }

    return ( 
        <div>

            <Balance
            history = {history}
            income= { () => calculateIncome()}
            expense= { () => calculateExpense() }
            />

            <div className="history">
                <h3>History</h3>

                {reverseHistory.map( (e, index) => {
                    return (
                        <History
                    text= {e.text}
                    amount= {e.amount}
                    key= {index} />
                    )
                })}

            </div>

            <div className="transaction">
                <h3>Add Transaction</h3>

                <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const currentHistory = history.slice();
                    const isIncome = (amount >=0) ? true : false;
                    const amountFixed = Number(amount).toFixed(2);
                    const newHistory = currentHistory.concat( 
                        {text: text, amount: amountFixed, isIncome: isIncome} );
                    setHistory(newHistory);
                    setText("");
                    setAmount("");
                }}
                >
                    <label>Text
                        <input type={"text"}
                        placeholder= "Enter text..."
                        value= {text}
                        onChange= {(e) => setText(e.target.value) }
                        required
                        ></input>
                    </label>

                    <label>Amount
                        <input type={"number"}
                        placeholder= "0.00 $"
                        value={amount}
                        onChange= {(e) => setAmount(e.target.value) }
                        required
                        ></input>
                    </label>

                    <button className="submit"
                    type="submit"> Add Transaction </button>
                </form>
            </div>
        </div>
    )
}

export default Account;