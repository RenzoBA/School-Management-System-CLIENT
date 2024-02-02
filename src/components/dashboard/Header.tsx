import { FC } from "react";
import { DarkModeToggle } from "../shared/DarkModeToggle";
import UserPopover from "../shared/UserPopover";
import MessageSummary from "./MessageSummary";
import NotificationSummary from "./NotificationSummary";
import CurrentPath from "./CurrentPath";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className="absolute flex w-full flex-row items-start justify-between">
      <CurrentPath />
      <div className="flex flex-row items-center gap-4">
        <div>
          <DarkModeToggle />
          <NotificationSummary />
          <MessageSummary />
        </div>
        <UserPopover />
      </div>
    </header>
  );
};

export default Header;
