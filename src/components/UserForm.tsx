import { useDispatch } from "react-redux";
import { useRef } from "react";
import { addUser } from "../redux-toolkit/slices/userServerSlice";
import { v4 } from "uuid";
import { IUser } from "../redux-toolkit/interfaces/IUser";

function UserForm() {
  const dispatch = useDispatch();
  const inputRef: any = useRef();

  const handlerAddUser = () => {
    const name = inputRef.current.value.trim();

    if (!name) {
      return;
    }

    const user: IUser = {
      id: v4(),
      name,
      isActive: true,
    };

    dispatch(addUser(user));
    inputRef.current.value = "";
  };

  return (
    <div>
      <label>
        Name: <input type="text" ref={inputRef} />{" "}
        <button onClick={handlerAddUser}>Save</button>
      </label>
    </div>
  );
}

export default UserForm;
