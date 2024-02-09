import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [error, setError] = useState("");

  function getUser() {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => {
        setIsDisabled((pre) => !pre);
        console.log(data.data);
        setUsers(data.data);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  }

  return (
    <div>
      {/* Do not remove the main div */}
      <div className="companyNameAndGetUserBtn">
        <h2>Blue Whales App</h2>
        <button className="btn" disabled={isDisabled} onClick={() => getUser()}>
          Get User List
        </button>
      </div>
      <div className="userListContainer">
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Avatar</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <p className="messege">No data found to display.</p>
            ) : (
              <>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                    <td>
                      <img src={user.avatar}></img>
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
