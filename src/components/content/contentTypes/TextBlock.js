function TextBlock({ text_data, numberOfColumns }) {
  return (
    <div
      className={
        // Override width if marked as full width
        text_data.fullWidth
          ? `text-block row full-width _${numberOfColumns}`
          : `text-block row _${numberOfColumns}`
      }
    >
      <p
        className={text_data.textColor}
        dangerouslySetInnerHTML={{
          __html: text_data.textContent,
        }}
      ></p>
    </div>
  );
}

export default TextBlock;
