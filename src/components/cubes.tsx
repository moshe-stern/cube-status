import { getCubeStatuses, ICubeStatus } from "attain-aba-shared";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Cubes() {
  const [cubes, setCubes] = useState<ICubeStatus[]>([]);
  useEffect(() => {
    const getCubes = async () => {
      try {
        const cubesStatuses = await getCubeStatuses();
        setCubes(cubesStatuses || []);
      } catch (error) {
        console.error(error);
      }
    };
    getCubes();
  }, []);
  return (
    <>
        <h1>Cube Refresh Times</h1>
        <Link to={'/message-board'}></Link>
        <p>Message board</p>
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
              <tr key={index} className={index % 2 !== 0 ? 'table-primary' : ''}>
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
