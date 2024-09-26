import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const Login = () => {
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    const data = { email, password, confirmPassword };
    console.log(data);
  };

  const handleSignin = () => {
    const data = { email, password };
    console.log(data);
  };
  return (
    <div className="w-full  md:w-[450px] ">
      {/*From mobile to up!*/}
      <h1 className="text-white text-center font-bold text-4xl md:text-6xl mb-10">
        {login ? "Login" : "Register"}
      </h1>

      <div className="flex flex-col gap-3 bg-white w-full p-6 min-h-[150px] rounded-xl drop-shadow-xl">
        <Input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          name="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {!login && (
          <Input
            name="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        {login ? (
          <>
            <Button text="Login" onClick={handleSignin} />
            <Button text="Register" onClick={() => setLogin(false)} secondary />
          </>
        ) : (
          <>
            <Button text="Register" onClick={handleSignUp} />
            <Button text="Login" onClick={() => setLogin(true)} secondary />
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
