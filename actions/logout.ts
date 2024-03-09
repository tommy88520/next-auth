"use server";

import { signOut } from "@/auth";

export const logout = async () => {
  //會拆成這樣寫可能是要做一些打api之類的事情server端的事
  await signOut();
};
