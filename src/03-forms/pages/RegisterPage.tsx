import '../styles/styles.css'

export const RegisterPage = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <form>
        <input type="text" placeholder="Name" name="name" />
        <input type="email" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <input
          type="password"
          placeholder="Repeat Password"
          name="repeatPassword"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
