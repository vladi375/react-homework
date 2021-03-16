import React, { useState } from "react";
import axios from "axios";

// class App extends React.Component {
//   state = {
//     users: [],
//   };

//   onLoad = async () => {
//     // axios
//     //   .get("https://serverless-backend-ky9b8rmuq.now.sh/api/users")
//     //   .then((response) => {
//     //     console.log(response.data);
//     //     this.setState({ users: response.data });
//     //   });
//     try {
//       const response = await axios.get(
//         "https://serverless-backend-ky9b8rmuq.now.sh/api/users"
//       );
//       console.log(response.data);
//       this.setState({ users: response.data });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   render() {
//     return (
//       <div className="App">
//         <button onClick={this.onLoad}>Load users</button>
//         {this.state.users.map((user) => {
//           return (
//             <div key={user._id}>
//               {user.name.first} {user.name.last}
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

const App2 = () => {
  const [users, setUsers] = useState([]); // принимает в себя массив, потому что в классовом компоненте в state у нас лежит массив
  const [number, setNumber] = useState(0);

  const plus = () => {
    setNumber(number + 1);
  };

  const minus = () => {
    setNumber(number - 1);
  };

  const onLoad = async () => {
    try {
      const response = await axios.get(
        "https://serverless-backend-ky9b8rmuq.now.sh/api/users"
      );
      console.log(response.data);
      setUsers(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <button onClick={plus}>+</button>
      {number}
      <button onClick={minus}>-</button>
      <button onClick={onLoad}>Load users</button>
      {users.map((user) => {
        return (
          <div key={user._id}>
            {user.name.first} {user.name.last}
          </div>
        );
      })}
    </div>
  );
};

export default App2;
