import { useContext } from "react";
import SocialMediaLogin from "../../shared/socialMediaLogin/SocialMediaLogin";
import Container from "../../utils/container/Container";
import { authContext } from "../../provider/authProvider/AuthProvider";

const Login = () => {
  const { singUser } = useContext(authContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    singUser(email, password)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  return (
    <section>
      <Container>
        <div>
          <h2 className="text-5xl text-center font-semibold">Sing Up</h2>
          <p className="text-center mb-9 mt-2">
            Already have an account? Log In
          </p>
          <form
            className="p-12 flex flex-col gap-5 bg-white w-[60%] mx-auto"
            onSubmit={handleLogin}
          >
            <input
              name="email"
              type="email"
              placeholder="Enter Email"
              className="input input-bordered w-full"
            />

            <input
              name="password"
              type="password"
              placeholder="Enter password"
              className="input input-bordered w-full"
            />
            <div className="flex items-center gap-2">
              <label htmlFor="checkbox">Forger password</label>
            </div>

            <button type="submit" className="btn">
              Login
            </button>

            <SocialMediaLogin />
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Login;
