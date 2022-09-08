import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const addNewUserHandler = (uName, uAge) => {
    setUsers((prevState) => [
      ...prevState,
      { name: uName, age: uAge, id: Math.random().toString() },
    ]);
  };

  return (
    <div>
      <AddUser onAddUser={addNewUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
