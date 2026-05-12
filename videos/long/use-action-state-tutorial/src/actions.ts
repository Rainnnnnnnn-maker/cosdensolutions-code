"use server";

export type ActionState = {
  success: boolean;
  message: string;
};

export const initialState: ActionState = {
  success: false,
  message: "",
};

export async function action(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const username = formData.get("username") as string;
  const id = formData.get("id") as string;

  if (username.length < 3) {
    return {
      success: false,
      message: "Username must be at least 3 characters long",
    };
  }

  return {
    success: true,
    message: `User ${id} updated to ${username}`,
  };
}
