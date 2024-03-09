"use client";

import { auth } from "@/auth";
import { LogoutButton } from "@/components/auth/logout-button";
import { ExitIcon } from "@radix-ui/react-icons";
import { useCurrentUser } from "@/hooks/use-current-user";
//signOut 用在client 或server端都可以
const SettingPage = () => {
  const user = useCurrentUser;
  return (
    <div>
      {JSON.stringify(user)}
      <LogoutButton>
        <ExitIcon className="h-4 w-4 mr-2" />
        Logout
      </LogoutButton>
    </div>
  );
};

export default SettingPage;
