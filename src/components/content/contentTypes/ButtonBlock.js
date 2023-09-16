function ButtonBlock({ button_data, numberOfColumns }) {
  console.log(button_data);
  const buttonBlock = button_data.button.map((button, index) => {
    return (
      // TO DO: add in links!!
      <div key={index}>
        <button className={button.buttonBackgroundColor}>
          {button.buttonText}
        </button>
      </div>
    );
  });
  return (
    <div
      className={
        // Override width if marked as full width
        button_data.fullWidth
          ? `button-block ${button_data.buttonsAlignment} row full-width._${numberOfColumns}`
          : `button-block ${button_data.buttonsAlignment} row _${numberOfColumns}`
      }
    >
      {buttonBlock}
    </div>
  );
}

export default ButtonBlock;
