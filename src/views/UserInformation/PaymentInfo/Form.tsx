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

const Form = ({register, formState} : {
  register: UseFormRegister<FieldValues>;
  formState: FormState<FieldValues>;
}) => {

  const { errors } = formState;

  return (
      <Stack direction={"column"} spacing={4}>
      <Box>
              <FMInputLabel
                displayText={"Card Number"}
                styleData={commonStyles.inputLabelStyle}
              />
              <InputBase
                required
                id="cardNo"
                placeholder="Enter Card Number"
                sx={{
                  ...commonStyles.inputFieldStyle,
                  ...(errors.cardno && commonStyles.errorStyle),
                }}
                {...register("cardno")}
                error={errors.cardno ? true : false}
              />
              <FMTypography
                styleData={commonStyles.errorText}
                displayText={errors.cardno?.message}
              />
            </Box>
            <Box>
              <FMInputLabel
                displayText={"CVV"}
                styleData={commonStyles.inputLabelStyle}
              />
              <InputBase
                required
                id="cvv"
                placeholder="Enter CVV"
                sx={{
                  ...commonStyles.inputFieldStyle,
                  ...(errors.cvv && commonStyles.errorStyle),
                }}
                {...register("cvv")}
                error={errors.cvv ? true : false}
              />
              <FMTypography
                styleData={commonStyles.errorText}
                displayText={errors.cvv?.message}
              />
            </Box>
        </Stack>
  );
};

export default Form;

