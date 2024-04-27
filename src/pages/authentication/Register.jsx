import { useContext, useState } from "react";
import Container from "../../utils/container/Container";
import { authContext } from "../../provider/authProvider/AuthProvider";
import auth from "../../firebase/firebase.config";
import uploadeImage from "../../utils/uplodeImage/UplodeImage";
import SocialMediaLogin from "../../shared/socialMediaLogin/SocialMediaLogin";

const Register = () => {
  const [error, setError] = useState("");
  const { updaetUserProfile, createUser } = useContext(authContext);

  const handleRegister = async (e) => {
    e.preventDefault();

    const firstNmae = e.target.fname.value;
    const lastName = e.target.lname.value;
    const fullName = `${firstNmae} ${lastName}`;
    const email = e.target.email.value;
    const password1 = e.target.password1.value;
    const password2 = e.target.password2.value;
    const imageFile = e.target.image.files[0];
    const image = await uploadeImage(imageFile);

    if (password1 !== password2) {
      return setError("invalid password");
    }

    if (password1.length < 6) {
      return setError("It should be at least 6 characters long.");
    }

    if (!/[A-Z]/.test(password1)) {
      return setError("It should contain at least one uppercase letter.");
    }

    if (!/[A-Z]/.test(password1)) {
      return setError("It should contain at least one uppercase letter.");
    }

    if (!/[!@#$%^&*]/.test(password1)) {
      return setError("It should contain at least one special character");
    }

    createUser(email, password1)
      .then(() => {
        updaetUserProfile(fullName, image)
          .then((res) => console.log(res))
          .catch((e) => console.log(e));
      })

      .catch((e) => {
        console.log(e.message);
        setError(e.message);
      });
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
            onSubmit={handleRegister}
          >
            <div className="flex gap-2">
              <input
                type="text"
                name="fname"
                placeholder="First Name"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                name="lname"
                type="text"
                placeholder="Last Name"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="flex gap-2">
              <input
                name="email"
                type="email"
                placeholder="Enter Email"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                name="phone"
                type="phone"
                placeholder="Enter phone number"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="flex gap-2">
              <input
                name="password1"
                type="password"
                placeholder="Enter password"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                name="password2"
                type="password"
                placeholder="Re-enter password"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <input
              name="image"
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />

            <button type="submit" className="btn">
              Register
            </button>
            <p className="mt-3 text-red-700">{error}</p>

            <SocialMediaLogin />
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Register;
