import React from "react";
import InputLabel from "@mui/material/InputLabel";

interface Iprops {
  displayText: string;
  required?:boolean;
  styleData?:Object;
}

const FMInputLabel = ({
  required,
  styleData,
  displayText
}:Iprops) => {
  return (
    <InputLabel required={required} sx={styleData}>
      {displayText}
    </InputLabel>
  );
};

export default FMInputLabel;
