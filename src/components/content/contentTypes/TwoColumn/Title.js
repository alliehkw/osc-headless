function Title({ title_data }) {
  let titleElement;
  switch (title_data.titleSize[0]) {
    case "h1":
      titleElement = <h1>{title_data.title}</h1>;
      break;
    case "h2":
      titleElement = <h2>{title_data.title}</h2>;
      break;
    default:
      titleElement = <h3>{title_data.title}</h3>;
    case "h4":
      titleElement = <h4>{title_data.title}</h4>;
      break;
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: `${title_data.textAlignment}`,
        textAlign: `${title_data.textAlignment}`,
      }}
    >
      {titleElement}
    </div>
  );
}

export default Title;
