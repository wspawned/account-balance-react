

const Balance = (props) => {

    const income = 5;
    const expense = 3;
    const balance = income - expense;

    

    return (
        <div className="balance-chart">
            <h1>YOUR BALANCE  <br/> $ {balance} </h1>

            <div className="income-expense">
                <h2> INCOME <br/> {income} </h2>
                <h2> EXPENSE <br/> {expense} </h2>
            </div>
                
        </div>
    )
}

export default Balance;