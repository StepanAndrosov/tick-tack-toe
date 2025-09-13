import { createUser } from "@/entities/user/server";
import { left, mapLeft } from "@/shared/lib/either";
import z from "zod";

export type SignUpFormState = {
  formData?: FormData;
  errors?: {
    login?: string;
    password?: string;
    _errors?: string;
  };
};

const formDataSchema = z.object({
  login: z.string().min(3),
  password: z.string().min(3),
});

export const signUpAction = async (state: unknown, formData: FormData) => {
  const data = Object.fromEntries(formData.entries());

  const result = formDataSchema.safeParse(data);

  if (!result.success) {
    return left(`${result.error.message}`);
  }

  const createUsetResult = await createUser(result.data);

  return mapLeft(createUsetResult, (error) => {
    return {
      "user-login-exists": "User exists",
    }[error];
  });
};
