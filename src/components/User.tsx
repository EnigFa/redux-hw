import { useDispatch } from "react-redux";
import "./User.css";
import { removeUser, changeStatus } from "../redux-toolkit/slices/userServerSlice";

function User({ user }: any) {
  const dispatch = useDispatch();

  const handlerRemove = (id: string) => {
    dispatch(removeUser(id));
  };

  const handlerStatus = () => {
    dispatch(changeStatus(user));
  };

  return (
    <div>
      <p className={user.isActive ? "success" : "error"}>
        <button onClick={handlerStatus}>
          {user.isActive ? "block" : "unblock"}
        </button>
        {user.name}
        <button onClick={() => handlerRemove(user.id)}>Del</button>
      </p>
    </div>
  );
}

export default User;
