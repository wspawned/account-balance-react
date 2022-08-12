const History = (props) => {

  const amountFixed = (+props.amount >= 0 ) ?
    `+ ${props.amount}` : `- ${ (Number(props.amount)*(-1)).toFixed(2) } `

    return (
      <div className="list-item">
        <p> {props.text} : </p>
        <p> {amountFixed}  $ </p>
      </div>
    );
}

export default History;