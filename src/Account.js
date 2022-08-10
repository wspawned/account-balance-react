import { useState } from "react";

const Account = () => {

    const income = 5
    const expense = 3
    const balance = income - expense

    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");
    const [history, setHistory] = useState([]);

    return ( 
        <div>
            <h1>YOUR BALANCE <br/> $ {balance} </h1>

            <div className="income-expense">
                <h2> INCOME <br/> {income} </h2>
                <h2> EXPENSE <br/> {expense} </h2>
            </div>

            <div className="history">
                <h3>History</h3>
            </div>

            <div className="transaction">
                <h3>Add Transaction</h3>

                <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const currentHistory = history.slice();
                    const isIncome = (amount >=0) ? true : false;
                    const newHistory = currentHistory.concat( {text: text, amount: amount, isIncome: isIncome} );
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