import React from "react";
import { Typography } from "@mui/material";
import { BLACK } from "../../constants/ColorConstants";

const style = {
  color: {
    color: BLACK,
  },
};

interface Iprops {
  displayText: any;
  styleData?:Object;
}

const FMTypography = ({ displayText, styleData, ...restProps }:Iprops) => {
  return (
    <Typography sx={{ ...style.color, ...styleData }} {...restProps}>
      {displayText}
    </Typography>
  );
};

export default FMTypography;
