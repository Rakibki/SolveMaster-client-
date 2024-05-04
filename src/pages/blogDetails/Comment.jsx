const Comment = ({ comment }) => {
  return (
    <div className="mb-4 flex items-center gap-2">
      <img
        className="w-[100px] rounded-full h-[120px]"
        src={comment?.UserImage}
        alt="blog author image"
      />

      <div>
        <h2>{comment?.UserName}</h2>
        <p>{comment?.CommentData}</p>
      </div>
    </div>
  );
};

export default Comment;