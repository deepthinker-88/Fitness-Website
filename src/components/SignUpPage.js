import React, {useState} from 'react';

export default function Signup () {
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSignUp = (e) => {
        e.preventDefafult();
        console.log("Signup email:", email,"password:",password);
    };

    return (
        <div>
            <form onSubmit = {handleSignUp}>
                <input
                    type ="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input 
                    type = "password"
                    placeholder = "Enter password"
                    value = {password}
                    onChange={(e) => setPassword(e.target.value)}
                    required

                />

                <input
                    type = "password"
                    placeholder = "Enter confirm password"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                    required
                />

                <button type = "submit">Signup</button>

            </form>
        </div>
    )
};

