import axios from "axios";
import "./Login.style.css";
import { FC, useState } from "react";
import { useHistory } from "react-router-dom";
import { HOME_PAGE } from "../../const/routes";
import { useAuth } from "../../hooks/useAuth/useAuth";
import { useAdmin } from "../../hooks/useAdmin/useAdmin";
import { useDialog } from "../../hooks/useDialog/useDialog";

const Login: FC = () => {
  const history = useHistory();
  const { setIsOpen, setContent } = useDialog();
  const { setIsAdmin } = useAdmin();
  const { setIsAuth } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await axios.post(
        "http://localhost:3000/login",
        { username, password },
        { withCredentials: true }
      );
      const res = await axios.get("http://localhost:3000/me", {
        withCredentials: true,
      });
      setIsAdmin(res.data.isAdmin);
      setIsAuth(true);
      history.push(HOME_PAGE);
    } catch (error) {
      setIsOpen(true);
      setContent(errorContent(error));
    }
  };

  const errorContent = (error: any) => {
    return (
      <>
        <div>{error.response.data.message}</div>
      </>
    );
  };

  return (
    <div id="loginPage">
      <h1 className="header">Welcome to Rick world!</h1>
      <input
        className="textField"
        placeholder="Username"
        required
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        className="textField"
        required
        placeholder="password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button className="singInButton" onClick={handleLogin}>
        Sign In
      </button>
    </div>
  );
};

export default Login;
