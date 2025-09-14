"use server";

import { createUser, sessionService } from "@/entities/user/server";
import { left, mapLeft } from "@/shared/lib/either";
import { redirect } from "next/navigation";
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
    return left(`Validation error: ${result.error.message}`);
  }

  const createUsetResult = await createUser(result.data);

  if (createUsetResult.type === "right") {
    await sessionService.addSession(createUsetResult.value);

    redirect("/");
  }
  return mapLeft(createUsetResult, (error) => {
    return {
      "user-login-exists": "User exists",
    }[error];
  });
};
