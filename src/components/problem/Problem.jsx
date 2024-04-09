import { Link } from "react-router-dom";

const Problem = ({ problem, number }) => {

    console.log(problem)
  return (
    <Link to={`/problem/${problem?.problemId}`}>
      <tr className="mx-auto">
        <th>{number}</th>
        <td>{problem?.title}</td>
        <td>{problem?.difficulty}</td>
        <td>Purple</td>
        <td>Hart Hagerty</td>
      </tr>
    </Link>
  );
};

export default Problem;
