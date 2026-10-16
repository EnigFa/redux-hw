import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import reduxLogo from "/redux.svg";
import "./App.css";
import UserForm from "./components/UserForm";
import User from "./components/User";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./redux-toolkit/slices/userServerSlice";

function App() {
  const users = useSelector((state: any) => state.userServer.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handlerGetData = () => {
    dispatch(getUsers());
  };

  return (
    <>
      <div>
        <a href="https://redux.js.org/" target="_blank">
          <img src={reduxLogo} className="logo" alt="Redux logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h3>Redux + React</h3>
      <div className="card">
        <UserForm />
      </div>
      <div className="card">
        {users.length ? (
          users.map((user: any) => <User user={user} key={user.id} />)
        ) : (
          <h3>No users</h3>
        )}
      </div>

      <button onClick={handlerGetData}>GET DATA</button>
    </>
  );
}

export default App;
