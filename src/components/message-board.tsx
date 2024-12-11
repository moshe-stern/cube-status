import { AccountInfo } from "@azure/msal-browser";
import React from "react";

interface IMessageBoardProp {
  user: AccountInfo | undefined;
}
export default function MessageBoard(prop: IMessageBoardProp) {
  return (
    <>
      <h1>Message Board</h1>
      {prop.user && prop.user.authorityType
        ? `You can edit ${prop.user.authorityType}`
        : "You can not edit"}
      <textarea name="" id=""></textarea>
    </>
  );
}
