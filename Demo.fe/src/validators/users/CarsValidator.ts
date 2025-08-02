import * as yup from "yup";

export const carShema = yup.object().shape({
    model : yup.string().required().label("model"),
    gorivo : yup.string().required().label("gorivo"),
    menjac : yup.string().required().label("menjac"),
    kubikaza : yup.string().required().label("kubikaza"),
    cena : yup.string().required().label("cena"),
    slika : yup.string().required().label("slika")

}).required();