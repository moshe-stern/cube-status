import { AccountInfo } from "@azure/msal-browser";
import { Link } from "react-router-dom";

interface IMessageBoardProp {
  user: AccountInfo | undefined;
}
export default function MessageBoard(prop: IMessageBoardProp) {
  return (
    <>
      <div className="message-board">
        <h1>Message Board</h1>
        <Link to={'/'}>Cube Refresh Times</Link>
        {prop.user && prop.user.authorityType
          ? `You can edit ${prop.user.authorityType}`
          : "You can not edit"}
        <textarea name="" id=""></textarea>
      </div>
    </>
  );
}
