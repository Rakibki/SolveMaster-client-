import { useContext, useState } from "react";
import { authContext } from "../../provider/authProvider/AuthProvider";
import useAxiosLocal from "../../hooks/useAxiosLocal/useAxiosLocal";
import useFetchData from "../../hooks/useDataFeatch/useFeatchData";
import Loader from "../../components/loader/Loader";
import Comment from "./Comment";

const Comments = ({ BlogId }) => {
  const [commentText, setCommentText] = useState("");
  const { user } = useContext(authContext);

  const handleCommentSubmit = () => {
    if (commentText.length < 1) {
      return alert("plaese write something...");
    }

    if (!user) {
      return alert("Login first");
    }
  };

  const { data, isPending } = useFetchData(`/api/v1/comments/${BlogId}`);

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="mt-8">
      <h2 className="text-3xl mb-4 font-semibold">Comments:</h2>
      <div className="ml-6 flex mb-4 gap-1">
        <input
          onChange={(e) => setCommentText(e.target.value)}
          className="border-2 rounded-md py-1"
          type="text"
        />
        <button
          onClick={handleCommentSubmit}
          className="btn btn-primary btn-sm"
        >
          Submit
        </button>
      </div>
      {data.length > 0 && (
        <div className="mt-3 rl-4">
          {data?.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comments;
