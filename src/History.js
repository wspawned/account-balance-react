const History = (props) => {


    return (
      <div className="list-item">
        <p> {props.text} : </p>
        <p> { (+props.amount>= 0) ? "+ " + props.amount : "- " + Math.abs(+props.amount) }  $ </p>
      </div>
    );
}

export default History;