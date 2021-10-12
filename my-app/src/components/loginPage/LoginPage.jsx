import React from "react";

const LoginPage = (props) => {
  return (
    <div className="Login">
      <form>
        <label>
          <input type="email" />
        </label>
        <label>
          <input type="password" />
        </label>
      </form>
    </div>
  );
};
export default LoginPage;
