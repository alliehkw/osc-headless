function DropDown({ drop_down }) {
  console.log(drop_down);
  const dropDownBlock = drop_down.map((dd, index) => {
    return (
      <div className="drop-down" key={index}>
        <p>{dd.node.label}</p>
      </div>
    );
  });
  return <div className="drop-down">{dropDownBlock}</div>;
}

export default DropDown;
