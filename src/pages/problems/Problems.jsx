import Loader from "../../components/loader/Loader";
import Problem from "../../components/problem/Problem";
import useFetchData from "../../hooks/useDataFeatch/useFeatchData";

const Problems = () => {
  const { data, isPending } = useFetchData("/api/v1/problems", "problems");

  if (isPending) {
    return <Loader />;
  }

  return (
    <div>
      <div className="w-full bg-slate-800 h-[100px]">
        <h2 className="text-3xl text-red-50">filters</h2>
      </div>
      <div>
        <table className="table w-full table-zebra">
          <thead>
            <tr>
              <th>Number</th>
              <th>Title</th>
              <th>Difficulty</th>
              <th>Info four</th>
              <th>Info five</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <Problem key={item?.problemId} number={index} problem={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Problems;
