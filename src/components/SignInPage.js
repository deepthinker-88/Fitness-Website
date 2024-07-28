import React, { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:",email, "Password:",password)
  }
  return <div>
    <form onSubmit={handleLogin}>
        <input
            type="email"
            placeholder="Please enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />

        <input
            type = "password"
            placeholder = "Enter your password"
            value ={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />
        <button type = "submit">Sign In</button>
    </form>
  </div>;
}
