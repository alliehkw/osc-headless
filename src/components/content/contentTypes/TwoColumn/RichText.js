function RichText({ rich_text_data }) {
  let maxWidth = "auto";
  if (rich_text_data.maxWidth) {
    maxWidth = rich_text_data.maxWidth;
  }
  return (
    <div style={{ maxWidth: maxWidth }}>
      <p
        className="bodyText twoColumn"
        dangerouslySetInnerHTML={{
          __html: rich_text_data.textContent,
        }}
      ></p>
    </div>
  );
}

export default RichText;
