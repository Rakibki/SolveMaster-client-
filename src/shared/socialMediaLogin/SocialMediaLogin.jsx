import { useContext } from "react";
import { FaGoogle, FaGithub, FaFacebookF } from "react-icons/fa";
import { authContext } from "../../provider/authProvider/AuthProvider";

const SocialMediaLogin = () => {
  const { loginWithGoogle, loginWithGithub } = useContext(authContext);

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  const handleGithubLogin = () => {
    loginWithGithub()
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  const handleFacebookLogin = () => {};

  return (
    <div>
      <div className="divider">Default</div>

      <div className="flex justify-center ">
        <div className="flex gap-3">
          <div
            onClick={handleGoogleLogin}
            className="flex text-white px-8 py-3 transition-all cursor-pointer hover:bg-[#fff] border-[1px] border-[rgb(95,45,237)] hover:text-[rgb(95,45,237)] rounded-md bg-[rgb(95,45,237)] gap-2 items-center"
          >
            <FaGoogle />
            <p>Google</p>
          </div>
          <div
            onClick={handleGithubLogin}
            className="flex text-white px-8 py-3 transition-all cursor-pointer hover:bg-[#fff] border-[1px] border-[rgb(95,45,237)] hover:text-[rgb(95,45,237)] rounded-md bg-[rgb(95,45,237)] gap-2 items-center"
          >
            <FaGithub />
            <p>Github</p>
          </div>
          <div
            onClick={handleFacebookLogin}
            className="flex text-white px-8 py-3 transition-all cursor-pointer hover:bg-[#fff] border-[1px] border-[rgb(95,45,237)] hover:text-[rgb(95,45,237)] rounded-md bg-[rgb(95,45,237)] gap-2 items-center"
          >
            <FaFacebookF />
            <p>Facebook</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaLogin;