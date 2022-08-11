const History = (props) => {


    return (
      <div className="list-item">
        <p> {props.text} : </p>
        <p> {props.amount}  $ </p>
      </div>
    );
}

export default History;