"use server";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

let count = 0;
const maxCount = 1;

export async function login({
  username,
  password,
}: {
  username: string;
  password: string;
}): Promise<{
  status: number;
  message: string;
  errors?: Record<string, string>;
}> {
  "use server";

  console.log("username", username);
  console.log("password", password);

  await delay(1000);

  if (Math.random() < 0.2) {
    return {
      status: 409,
      message: "Username already exists.",
      errors: {
        username:
          "Username already exists. Please choose a different username.",
      },
    };
  }

  if (Math.random() < 0.2) {
    count++;
    if (count > maxCount) {
      return {
        status: 401,
        message: "Too many login attempts.",
      };
    }

    return {
      status: 401,
      message: "Invalid username or password.",
    };
  }

  if (Math.random() < 0.2) {
    return {
      status: 500,
      message: "Internal server error. Please try again later.",
    };
  }

  return { status: 200, message: "Login successful!" };
}
