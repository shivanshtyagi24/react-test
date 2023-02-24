import React from 'react';
import {
  Box,
  Stack,
  InputBase,
} from "@mui/material";
import { commonStyles } from "../../../muiStyles";
import {
  UseFormRegister,
  FieldValues,
  FormState,
} from "react-hook-form";
import FMInputLabel from "../../../common/components/FMInputLabel";
import FMTypography from "../../../common/components/FMTypography";

const Form = ({register, formState} : {
  register: UseFormRegister<FieldValues>;
  formState: FormState<FieldValues>;
}) => {

  const { errors } = formState;

  return (
      <Stack direction={"column"} spacing={4}>
      <Box>
              <FMInputLabel
                displayText={"First Name"}
                styleData={commonStyles.inputLabelStyle}
              />
              <InputBase
                required
                id="firstName"
                placeholder="Enter First Name"
                sx={{
                  ...commonStyles.inputFieldStyle,
                  ...(errors.firstname && commonStyles.errorStyle),
                }}
                {...register("firstname")}
                error={errors.firstname ? true : false}
              />
              <FMTypography
                styleData={commonStyles.errorText}
                displayText={errors.firstname?.message}
              />
            </Box>
            <Box>
              <FMInputLabel
                displayText={"Last Name"}
                styleData={commonStyles.inputLabelStyle}
              />
              <InputBase
                required
                id="lastName"
                placeholder="Enter Last Name"
                sx={{
                  ...commonStyles.inputFieldStyle,
                  ...(errors.lastname && commonStyles.errorStyle),
                }}
                {...register("lastname")}
                error={errors.lastname ? true : false}
              />
              <FMTypography
                styleData={commonStyles.errorText}
                displayText={errors.lastname?.message}
              />
            </Box>
        </Stack>
  );
};

export default Form;

