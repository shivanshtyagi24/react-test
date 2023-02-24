import * as Yup from "yup";

export const paymentInfoSchema = Yup.object().shape({
    cardno: Yup.string()
    .required("Required")
    .min(16, "Invalid input")
    .max(16, "Invalid input"),
    cvv: Yup.string()
    .required("Required")
    .min(3, "Invalid input")
    .max(3, "Invalid input"),
});
