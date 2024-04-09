import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useDataFeatch/useFeatchData";
import Loader from "../../components/loader/Loader";
import CodeEditor from "../../components/codeEditor/CodeEditor";

const ProblemsDetails = () => {
  const { id } = useParams();
  const { data, isPending } = useFetchData(
    `/api/v1/problem/${id}`,
    "getSingleProblem"
  );

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="flex">
      <div className="bg-slate-600 h-[100vh] w-[30%]">
        <h2 className="text-xl">Titie: {data?.title}</h2>
        <h2 className="text-lg">Titie: {data?.description}</h2>
      </div>
      <div className="bg-zinc-900 h-[100vh] w-[70%]">
        <CodeEditor />
      </div>
    </div>
  );
};

export default ProblemsDetails;