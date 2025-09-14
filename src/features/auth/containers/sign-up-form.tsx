"use client";

import { useActionState } from "@/shared/lib/react";
import { signUpAction, SignUpFormState } from "../actions/sign-up";
import { AuthFormLayout } from "../ui/auth-form-layout";
import { BottomLink } from "../ui/bottom-link";
import { ErrorMessage } from "../ui/error-message";
import { AuthFields } from "../ui/fields";
import { SubmitButton } from "../ui/submit-button";

export function SignUpForm() {
  const [formState, action, isPending] = useActionState(
    signUpAction,
    {} as SignUpFormState,
  );

  return (
    <AuthFormLayout
      title="Sign Up"
      description="Create your account to get started"
      action={action}
      fields={<AuthFields />}
      actions={<SubmitButton isPending={isPending} label="Sign Up" />}
      error={<ErrorMessage error={formState.errors?._errors} />}
      link={
        <BottomLink
          text="Already have an account?"
          linkText="Sign in"
          url={"/sign-in"}
        />
      }
    />
  );
}
