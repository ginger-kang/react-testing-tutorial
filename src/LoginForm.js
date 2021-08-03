import React, { useState } from "react";

function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = event => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <label>
          이메일
          <input
            name="email"
            type="email"
            placeholder="test@test.com"
            value={email}
            onChange={onChange}
          />
        </label>
        <label>
          비밀번호
          <input
            name="password"
            type="password"
            value={password}
            onChange={onChange}
          />
        </label>
        <button disabled={!email || !password}>로그인</button>
      </form>
    </>
  );
}

export default LoginForm;
