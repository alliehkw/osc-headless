function TextBlock({ text_data, numberOfColumns }) {
  console.log("text_data.textContent", text_data.textContent);
  return (
    <div
      className={
        // Override width if marked as full width
        text_data.fullWidth
          ? `text-block row full-width _${numberOfColumns}`
          : `text-block row _${numberOfColumns}`
      }
    >
      <div
        className={
          text_data.textBackground === true
            ? `${text_data.textBackgroundShape[0]} ${text_data.textBackgroundColor}`
            : "no-background"
        }
      >
        <p
          className={text_data.textColor}
          dangerouslySetInnerHTML={{
            __html: text_data.textContent,
          }}
        ></p>
      </div>
    </div>
  );
}

export default TextBlock;
