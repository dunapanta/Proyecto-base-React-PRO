import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

export const RegisterPage = () => {
  const {
    formData,
    onChange,
    name,
    email,
    password1,
    password2,
    resetForm,
    isValidEmail,
  } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
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
          className={`${name.trim().length <= 0 && "has-error"}  `}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          type="email"
          value={email}
          placeholder="Email"
          name="email"
          onChange={onChange}
          className={`${!isValidEmail(email) && "has-error"} `}
        />
        {!isValidEmail(email) && <span>Email no es válido</span>}
        <input
          type="password"
          value={password1}
          placeholder="Password"
          name="password1"
          onChange={onChange}
        />
         {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
         {password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña debe tener al menos 6 letras</span>}
        <input
          type="password"
          value={password2}
          placeholder="Confirm Password"
          name="password2"
          onChange={onChange}
        />
         {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
         {password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas no coinciden</span>}
        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
};
