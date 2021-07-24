import React, { useState } from "react";

export const LoginForm = ({ login }) => {
  const [email, setEmail] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    login({
      variables: {
        email: email,
      },
    });
  };

  return (
    <div className="loginform">
      <h1>Log in</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">
          <input
            type="text"
            placeholder="Enter email address"
            value={email}
            onChange={emailHandler}
          />
          <input type="submit" value="Log in" />
        </label>
      </form>
    </div>
  );
};

export default LoginForm;
