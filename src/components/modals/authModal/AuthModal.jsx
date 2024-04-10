import { useState } from "react";
import Modal from "react-modal";
import Login from "../../../pages/login/Login";
import Register from "../../../pages/register/Register";

const AuthModal = ({ modalIsOpen, closeModal }) => {
  const [toggle, setToggle] = useState("singIn");

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <button className="btn" onClick={closeModal}>
            close
          </button>
          <button onClick={() => setToggle("singUp")} className="btn">
            SingUp
          </button>
          <button onClick={() => setToggle("singIn")} className="btn">
            SingIn
          </button>
        </div>
        <div>{toggle === "singIn" ? <Login /> : <Register />}</div>
      </Modal>
    </div>
  );
};

export default AuthModal;
