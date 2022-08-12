

const Balance = (props) => {

    const balance = (Number(props.income()) - Number(props.expense())).toFixed(2) ;

    

    return (
        <div className="balance-chart">
            <h1>YOUR BALANCE <br/> $ {balance} </h1>

            <div className="income-expense">
                <h2 > INCOME <br/> {props.income()} </h2>
                <h2 > EXPENSE <br/> {props.expense()} </h2>
            </div>
                
        </div>
    )
}

export default Balance;