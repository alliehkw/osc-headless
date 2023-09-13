function MenuItem({ item_data }) {
  console.log(item_data);
  return (
    <div className="menu-item">
      <p>{item_data.label}</p>
    </div>
  );
}

export default MenuItem;
