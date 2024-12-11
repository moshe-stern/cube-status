import { getCubeStatuses, ICubeStatus } from "attain-aba-shared";
import { useEffect, useState } from "react";

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
      <h1>Cubes</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {cubes.map((cube, index) => (
            <tr key={index}>
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
