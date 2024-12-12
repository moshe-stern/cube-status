import { AccountInfo } from "@azure/msal-browser";
import {
  getCubeStatuses,
  getMsgBoard,
  ICubeStatus,
  updateMsgBoard,
} from "attain-aba-shared";
import { useEffect, useState } from "react";
interface ICubesProp {
  user: AccountInfo | undefined;
}
export default function Cubes(prop: ICubesProp) {
  const [cubes, setCubes] = useState<ICubeStatus[]>([]);
  const [msg, setMsg] = useState<string>("");
  useEffect(() => {
    const getCubes = async () => {
      try {
        const cubesStatuses = await getCubeStatuses();
        const messageBoard = await getMsgBoard();
        setCubes(cubesStatuses || []);
        setMsg(messageBoard || "");
      } catch (error) {
        console.error(error);
      }
    };
    getCubes();
  }, []);
  return (
    <>
      <div className="jumbotron">
        <h1 className="display-3">Cube Statuses</h1>
        <textarea
          value={msg}
          disabled={!prop.user?.idTokenClaims?.roles?.includes("cube-admin")}
          className="form-control"
          onInput={(event) => setMsg(event.currentTarget.value)}
          onBlur={async (event) =>
            await updateMsgBoard(event.currentTarget.value)
          }
        />
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Load Time</th>
            <th>Pipeline Name</th>
          </tr>
        </thead>
        <tbody>
          {cubes.map((cube, index) => (
            <tr key={index} className={index % 2 !== 0 ? "table-primary" : ""}>
              <td>{cube.name}</td>
              <td>{cube.loadTime || ""}</td>
              <td>{cube.pipelineName || ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
