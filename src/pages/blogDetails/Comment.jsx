const Comment = ({ comment }) => {
  return (
    <div className="mb-7 flex items-center gap-2">
      <img
        className="w-[100px] rounded-full h-[120px]"
        src={comment?.UserImage}
        alt="blog author image"
      />

      <div>
        <h2>{comment?.UserName}</h2>
        <p>{comment?.CommentData}</p>
        <p className="mt-4">{comment?.message?.slice(0, 220)}...</p>
      </div>
    </div>
  );
};

export default Comment;