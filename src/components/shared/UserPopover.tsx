"use client";

import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LogOut, User } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

interface UserPopoverProps {}

const UserPopover: FC<UserPopoverProps> = ({}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex cursor-pointer flex-row items-center gap-2">
          <div className="hidden flex-col items-end gap-0.5 font-normal sm:flex">
            <p>Renzo Bocanegra</p>
            <p className="text-secondary text-xs">student-001</p>
          </div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-56" align="end">
        <label className="mb-3 flex flex-col items-start gap-2 text-lg">
          My Account
        </label>
        <ul className="space-y-1">
          <li className="flex items-center">
            <User size={15} className="mr-1" />
            Profile
          </li>
          <hr />
          <li className="text-destructive flex items-center">
            <LogOut size={15} className="mr-1" />
            Log out
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default UserPopover;
