import Button from "./Button.js";

function Buttons({ buttons_data, screenSize }) {
  let blockWidth;
  let flexDir = "row";
  switch (buttons_data.blockWidth[0]) {
    case "auto":
      blockWidth = "83%";
      break;
    case "full":
      blockWidth = "100%";
      break;
    case "half":
      blockWidth = "50%";
      break;
    case "threequarter":
      blockWidth = "75%";
      break;
    case "singleLine":
      blockWidth = "auto";
      flexDir = "column";
      break;
  }
  const buttonBlock = buttons_data.button.map((button, index) => {
    return (
      <Button
        key={index}
        button_data={button}
        blockWidth={buttons_data.blockWidth[0]}
        screenSize={screenSize}
      />
    );
  });
  console.log("buttons_data.blockAlign", buttons_data.blockAlign);
  return (
    <div
      className={buttons_data.buttonPadding[0]}
      style={{
        width: blockWidth,
        maxWidth: "1440px",
        display: "flex",
        flexDirection: flexDir,
        flexWrap: "wrap",
        textAlgin: `${buttons_data.blockAlign}`,
        justifyContent: `${buttons_data.blockAlign}`,
        margin: buttons_data.blockAlign === "center" ? "auto" : "0",
      }}
    >
      {buttonBlock}
    </div>
  );
}

export default Buttons;
