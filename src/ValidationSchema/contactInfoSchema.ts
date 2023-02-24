import * as Yup from "yup";
import { mobileRegEx,EMAIL_REGEX } from "../common/constants/AppConstants";

export const contactInfoSchema = Yup.object().shape({
  mobileno: Yup.string()
    .required("Required")
    .matches(mobileRegEx, "Invalid input")
    .min(6, "Invalid input")
    .max(10, "Invalid input"),
    contactemail: Yup.string()
    .required("Required")
    .email("Invalid input")
    .matches(EMAIL_REGEX, "Invalid input"),
});
