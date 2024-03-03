import { auth } from "@/auth";
import { LogoutButton } from "@/components/auth/logout-button";
import { ExitIcon } from "@radix-ui/react-icons";
const SettingPage = async () => {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
      <LogoutButton>
        <ExitIcon className="h-4 w-4 mr-2" />
        Logout
      </LogoutButton>
    </div>
  );
};

export default SettingPage;
