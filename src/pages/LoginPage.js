import { useContext } from "react";
import { authContext } from "../context/AuthContext";
import LoginPanel from "../components/login/LoginPanel";

const LoginPage = () => {
  const context = useContext(authContext);

  const handleLogin = (email, password) => {
    context.loginWithMail(email, password);
  };

  const handleSignIn = (email, password, userData) => {
    context.signInWithMail(email, password, userData);
  };

  return (
    <div>
      <LoginPanel handleLogin={handleLogin} handleSignIn={handleSignIn} />
    </div>
  );
};

export default LoginPage;
