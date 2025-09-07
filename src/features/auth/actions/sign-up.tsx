import { left } from "@/shared/lib/either";

export type SignUpFormState = {
  formData?: FormData;
  errors?: {
    login?: string;
    password?: string;
    _errors?: string;
  };
};

export const signUpAction = (state: unknown, formData: FormData) => {
  return left("msg");
};
