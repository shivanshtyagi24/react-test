import * as Yup from "yup";
import { WHITE_SPACES_REGEX } from "../common/constants/AppConstants";

export const personalInfoSchema = Yup.object().shape({
  firstname: Yup.string()
    .required("Required")
    .matches(WHITE_SPACES_REGEX, 'Please enter valid username'),
  lastname: Yup.string()
    .required("Required")
    .matches(WHITE_SPACES_REGEX, 'Please enter valid username'),
});
