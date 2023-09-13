function MenuItem({ item_data }) {
  return (
    <div className="menu-item">
      <h5>{item_data.label}</h5>
    </div>
  );
}

export default MenuItem;
