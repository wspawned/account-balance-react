

const Balance = (props) => {

    const balance = (Number(props.income()) - Number(props.expense())).toFixed(2) ;

    

    return (
        <div className="balance-chart">
            <h1> Your Balance &nbsp; <br/> $ {balance} </h1>

            <div className="income-expense">
                <h2 > INCOME <br/> <span className="income" > {props.income()} </span> </h2>
                <h2 > EXPENSE <br/> <span className="expense" > {props.expense()} </span> </h2>
            </div>
                
        </div>
    )
}

export default Balance;