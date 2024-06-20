import { useContext } from "react";
import { authContext } from "../../provider/authProvider/AuthProvider";
import Container from "../../utils/container/Container";

const Profile = () => {
  const { user } = useContext(authContext);

  return (
    <main className="mb-5">
      <div>
        <Container>
          <div>
            <div className="py-10 px-5 bg-slate-700 rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="p-3 border-[1px] h-[180px] rounded-full w-[180px] border-[#fff]">
                  <img
                    className="rounded-full w-full h-full"
                    src={user?.photoURL}
                    alt="login user image"
                  />
                </div>
                <div>
                  <h2 className="text-2xl text-white">{user?.displayName}</h2>
                </div>
              </div>
            </div>

            <div>

            </div>
          </div>
        </Container>
      </div>
    </main>
  );
};

export default Profile;
