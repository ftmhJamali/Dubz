import * as Yup from "yup";

export const OtpValidationSchema = Yup.object().shape({
    otpCode: Yup.string()
    .required("Wrong code, please try again"),
});
