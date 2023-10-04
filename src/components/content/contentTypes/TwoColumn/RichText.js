function RichText({ rich_text_data }) {
  return (
    <div>
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
