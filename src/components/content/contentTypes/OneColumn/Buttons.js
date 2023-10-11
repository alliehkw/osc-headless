// TO DO: DELETE ME

// import { Grid, Box } from "@mui/material";
// import Button from "../Button.js";

// function Buttons({ buttons_data }) {
//   let blockWidth;
//   switch (buttons_data.blockWidth[0]) {
//     case "auto":
//       blockWidth = "83%";
//       break;
//     case "full":
//       blockWidth = "100%";
//       break;
//     case "half":
//       blockWidth = "50%";
//       break;
//     case "threequarter":
//       blockWidth = "75%";
//       break;
//   }

//   const buttonBlock = buttons_data.button.map((button, index) => {
//     return <Button key={index} button_data={button} />;
//   });

//   return (
//     <div
//       className={buttons_data.buttonPadding[0]}
//       style={{
//         width: blockWidth,
//         border: "1px",
//         maxWidth: "1440px",
//         display: "flex",
//         flexWrap: "wrap",
//         justifyContent: `${buttons_data.blockAlign}`,
//         margin: buttons_data.blockAlign === "center" ? "auto" : "0",
//       }}
//     >
//       {buttonBlock}
//     </div>
//   );
// }

// export default Buttons;
