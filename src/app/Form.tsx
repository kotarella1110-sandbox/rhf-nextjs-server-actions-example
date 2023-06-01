"use client";

import { useForm } from "react-hook-form";
import { login } from "@/app/actions";

export function Form() {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<{
    username: string;
    password: string;
  }>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  return (
    <>
      <form
        onSubmit={handleSubmit(async (data) => {
          const res = await login(data);
          if (res.status === 200) {
            reset();
            alert("Login successful!");
            return;
          }
          if (res.status === 409) {
            setError("username", { message: res.errors?.username });
            return;
          }
          setError("root.serverError", { message: res?.message });
        })}
      >
        <label>Username</label>
        <input
          {...register("username", { required: "Username is required" })}
          placeholder="Username"
        />
        {errors.username && <p>{errors.username.message}</p>}
        <label>Password</label>
        <input
          {...register("password", { required: "Password is required" })}
          type="password"
          placeholder="Password"
        />
        {errors.password && <p>{errors.password.message}</p>}
        <input type="submit" value="Login" disabled={isSubmitting} />
        {errors.root?.serverError && <p>{errors.root.serverError.message}</p>}
      </form>
    </>
  );
}
