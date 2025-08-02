import * as yup from "yup";

export const loginShema = yup.object().shape({
    email : yup.string().email().required().label("Email"),
    password : yup.string().required().label("Password")

}).required();