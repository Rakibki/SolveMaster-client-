const StepOne = ({ next }) => {
  return (
    <form className="flex flex-col gap-3">
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input type="password" name="password" />
    </form>
  );
};

export default StepOne;
