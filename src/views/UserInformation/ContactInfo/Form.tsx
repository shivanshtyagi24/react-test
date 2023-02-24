import React from 'react';
import {
  Box,
  Stack,
  InputBase,
} from "@mui/material";
import {
  UseFormRegister,
  FieldValues,
  FormState,
} from "react-hook-form";
import { commonStyles } from "../../../muiStyles";
import FMInputLabel from "../../../common/components/FMInputLabel";
import FMTypography from "../../../common/components/FMTypography";

const Form = ({ register, formState }: {
  register: UseFormRegister<FieldValues>;
  formState: FormState<FieldValues>;
}) => {

  const { errors } = formState;

  return (
    <Stack direction={"column"} spacing={4}>
      <Box>
        <FMInputLabel
          displayText={"Mobile No"}
          styleData={commonStyles.inputLabelStyle}
        />
        <InputBase
          required
          id="mobileNo"
          placeholder="Enter Mobile No"
          sx={{
            ...commonStyles.inputFieldStyle,
            ...(errors.mobileno && commonStyles.errorStyle),
          }}
          {...register("mobileno")}
          error={errors.mobileno ? true : false}
        />
        <FMTypography
          styleData={commonStyles.errorText}
          displayText={errors.mobileno?.message}
        />
      </Box>
      <Box>
        <FMInputLabel
          displayText={"Email ID"}
          styleData={commonStyles.inputLabelStyle}
        />
        <InputBase
          required
          id="email"
          placeholder="Enter Email ID"
          sx={{
            ...commonStyles.inputFieldStyle,
            ...(errors.contactemail && commonStyles.errorStyle),
          }}
          {...register("contactemail")}
          error={errors.contactemail ? true : false}
        />
        <FMTypography
          styleData={commonStyles.errorText}
          displayText={errors.contactemail?.message}
        />
      </Box>
    </Stack>
  );
};

export default Form;