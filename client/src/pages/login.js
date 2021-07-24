import React from "react";
import { gql, useMutation, useApolloClient } from "@apollo/client";
import LoginForm from "../components/loginform";

export const LOGIN_USER = gql`
  mutation Login($email: String!) {
    login(email: $email)
  }
`;

const Login = () => {
  const client = useApolloClient();
  console.log(client);
  const [login, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted({ login }) {
      localStorage.setItem("token", login);
      if (login) {
        client.writeData({ data: { isLoggedIn: true } });
      }
    },
  });
  if (loading) return <p>Loading, please wait</p>;
  if (error) return <p>An error is occurred</p>;
  return (
    <div>
      <LoginForm login={login} />
    </div>
  );
};

export default Login;
