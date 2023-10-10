import React, { useState } from "react";
import DownCarrot from "../../../../icons/DownCarrot";

function Tab({ tab_data }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const toggleDropdownFromCarrot = (e) => {
    e.stopPropagation(); // Prevent the click event from propagating to the parent
    toggleDropdown();
  };

  const rotateDegree = isDropdownVisible ? 180 : 0; // Set rotation degree based on visibility

  return (
    <div style={{ textAlign: "left" }}>
      <div
        className="tab"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingBottom: "20px",
          borderBottom: "1px solid #C4DAE3",
          cursor: "pointer",
        }}
        onClick={toggleDropdown}
      >
        <p
          className="allCaps"
          style={{
            color: "#008771",
          }}
        >
          {tab_data.title}
        </p>
        <DownCarrot
          className={"accordion-carrot"}
          id={"accordion-carrot"}
          rotate={rotateDegree}
          onClick={toggleDropdownFromCarrot} // Add onClick handler to the DownCarrot
        />
      </div>
      {isDropdownVisible && (
        <p
          id="dropdown"
          style={{
            paddingTop: "24px",
            color: "#2A4654",
          }}
          className="bodyText"
          dangerouslySetInnerHTML={{
            __html: tab_data.content,
          }}
        ></p>
      )}
    </div>
  );
}

export default Tab;
