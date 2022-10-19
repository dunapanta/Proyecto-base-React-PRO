import { ChangeEvent, FormEvent, useState } from "react";
import "../styles/styles.css";

export const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });
  const { name, email, password1, password2 } = registerData;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterData((prev) => ({
      ...registerData,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(registerData);
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          name="name"
          onChange={onChange}
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          name="email"
          onChange={onChange}
        />
        <input
          type="password"
          value={password1}
          placeholder="Password"
          name="password1"
          onChange={onChange}
        />
        <input
          type="password"
          value={password2}
          placeholder="Confirm Password"
          name="password2"
          onChange={onChange}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
