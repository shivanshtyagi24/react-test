import React from 'react';
import {
  Box,
  Stack,
  Container,
  Slide,
} from "@mui/material";
import {
  UseFormRegister,
  FieldValues,
  FormState,
} from "react-hook-form";
import Form from './Form';

const PaymentInfo = ({register, formState, isTransaction} : {
  register: UseFormRegister<FieldValues>;
  formState: FormState<FieldValues>;
  isTransaction: boolean;
}) => {

  return (
    <Slide direction="left" in={isTransaction} mountOnEnter unmountOnExit>
    <Container maxWidth={false}>
    <Box component="form" mt={4}>
      <Stack direction={"column"} spacing={4}>
      <Form register={register} formState={formState}/>
        </Stack>
        </Box>
        </Container>
        </Slide>
  );
};

export default PaymentInfo;

