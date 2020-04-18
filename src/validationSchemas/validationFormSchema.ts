import * as Yup from "yup";
import { IValidationFormState } from "types/stateTypes";
export const ValidationFormSchema = Yup.object().shape<IValidationFormState>({
  email: Yup.string()
    .email()
    .required("Required"),
  password: Yup.string().required("Required").min(5).max(10),
  country : Yup.string().required("Required"),
});
