import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

export const LoginPageF = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (password.length === 3 && phone.length === 12) {
      login();
    }
  }, [password, phone]);

  const onChangeCredentials = useCallback(
    (event, fieldName) => {
      if (fieldName === "phone") {
        setPhone(event.target.value);
        setError("");
      }
      if (fieldName === "password") {
        setPassword(event.target.value);
        setError("");
      }
    },
    [setPhone, setError, setPassword]
  );

  const login = useCallback(async () => {
    try {
      const response = await axios.post("http://localhost:3001/auth/sign-in", {
        phone: phone,
        password: password,
      });
      setUser(response.data);
      setPhone("");
      setPassword("");
    } catch (err) {
      console.log(err.response.data);
      setError(err.response.data);
    }
  }, [phone, password, setUser, setPhone, setPassword, setError]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="phone number"
        onChange={(event) => onChangeCredentials(event, "phone")}
        value={phone}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(event) => onChangeCredentials(event, "password")}
        value={password}
      />
      <div>
        {user ? (
          <span>
            {user.name.first} {user.name.last}
          </span>
        ) : (
          <span>Please login to your account</span>
        )}
      </div>
      <div>{error}</div>
    </div>
  );
};
