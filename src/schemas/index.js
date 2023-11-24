import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  firstname:yup.string().min(5,'It should contain minimum 5 characters').required("This field  is Required"),
  lastname:yup.string().min(5,'It must contains 5 letters' ).required("This filed is Required"),
  email: yup.string().email("Please enter a valid email").required("This field  is Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("This field is Required"),
  cpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("This filed is Required"),
});