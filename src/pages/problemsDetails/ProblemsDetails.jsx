import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useDataFeatch/useFeatchData";
import Loader from "../../components/loader/Loader";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import Container from "../../utils/container/Container";

const ProblemsDetails = () => {
  const { id } = useParams();
  const { data, isPending } = useFetchData(
    `/api/v1/problem/${id}`,
    "getSingleProblem"
  );

  if (isPending) {
    return <Loader />;
  }

  function onChange(newValue) {
    console.log("change", newValue);
  }

  return (
    <div>
      <Container>
        <div className="flex">
          <div className="bg-slate-600 h-[100vh] w-[30%]">
            <h2 className="text-xl">Titie: {data?.title}</h2>
            <h2 className="text-lg">Titie: {data?.description}</h2>
          </div>
          <div className="bg-zinc-900 h-[100vh] w-[70%]">
            <AceEditor
              mode="java"
              theme="github"
              onChange={onChange}
              name="UNIQUE_ID_OF_DIV"
              editorProps={{ $blockScrolling: true }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProblemsDetails;
