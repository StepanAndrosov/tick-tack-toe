import { left } from "@/shared/lib/either";

export type SignInFormState = {
  formData?: FormData;
  errors?: {
    login?: string;
    password?: string;
    _errors?: string;
  };
};

export const signInAction = (state: unknown, formData: FormData) => {
  return left("msg");
};
