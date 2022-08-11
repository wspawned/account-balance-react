import { useState } from "react";
import Balance from "./Balance";
import History from "./History";

const Account = () => {

    const [key, setKey] = useState(0)
    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");
    const [history, setHistory] = useState([]);

    const calculateIncome = () => {
        let inc = 0;
        for(const move of history) {
            if(+move.amount>= 0) {
                inc += (+move.amount)
            }
        }
        return(inc)
    }

    const calculateExpense = () => {
        let exp = 0;
        for(const move of history) {
            if(+move.amount < 0) {
                exp += (+move.amount)
            }
        }
        return(exp)
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

                {history.map( (e) => {
                    return (
                        <History
                    text= {e.text}
                    amount= {e.amount}
                    key= {key} />
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
                    const newHistory = currentHistory.concat( 
                        {text: text, amount: amount, isIncome: isIncome, key: key} );
                    setKey(key+1)
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
                        placeholder= "0"
                        value={amount}
                        onChange= {(e) => setAmount(e.target.value) }
                        required
                        ></input>
                    </label>

                    <button className="submit"
                    type="submit"> Add </button>
                </form>
            </div>
        </div>
    )
}

export default Account;