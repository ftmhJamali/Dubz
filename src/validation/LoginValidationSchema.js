import * as Yup from "yup";

export const LoginValidationSchema = Yup.object().shape({
  mobile: Yup.string()
    .min(10, "Please enter a valid phone number")
    .max(10, "Please enter a valid phone number")
    .required("Please enter a valid phone number"),
});
