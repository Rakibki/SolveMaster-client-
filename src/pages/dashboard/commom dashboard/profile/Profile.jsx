import { useContext } from "react";
import { authContext } from "../../../../provider/authProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(authContext);

  return (
    <div>
      <div className="flex flex-col gap-2">
        <p>Registration Date: {user?.metadata?.createdAt}</p>
        <p>last Singin: {user?.metadata?.lastSignInTime}</p>
        <p>Full Name: {user?.displayName}</p>
        <p>Email: {user?.email}</p>
        <p>Phone Number : 0000000000</p>
        <p>
          Biography: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Maiores veniam, delectus accusamus nesciunt laborum repellat
          laboriosam, deserunt possimus itaque iusto perferendis voluptatum
          quaerat cupiditate vitae. Esse aut illum perferendis nulla, corporis
          impedit quasi alias est!
        </p>
      </div>
    </div>
  );
};

export default Profile;