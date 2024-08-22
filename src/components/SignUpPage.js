import React, {useState} from 'react';

export default function Signup () {
    const [firstname,setFirstName] = useState("");
    const [lastname,setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSignUp = (e) => {
        e.preventDefault();
        console.log("Signup email:", email,"password:",password);
        console.log("You have signed up")
    };

    return (
        <div>
            <form onSubmit = {handleSignUp}> 
                <input
                    type ="text"
                    placeholder = "Enter first name"
                    value = {firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                />

                <input
                    type = "text"
                    placeholder = "Enter last name"
                    value = {lastname}
                    onChange = {(e) => setLastName(e.target.value)}
                />
           
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

                <button className="sign-up-button-sign-up-page"type = "submit" onClick = {handleSignUp}>Signup</button>

            </form>
        </div>
    )
};

