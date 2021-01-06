import React from 'react';

function SignUpPage() {
    return (
    <div>
        <h1>Sign Up</h1>
        <div>
            <label>First Name</label>
            <input type="text" required/>
        </div>
        <div>
            <label>Last Name</label>
            <input type="text" required/>
        </div>
        <div>
            <label>Email</label>
            <input type="email" required/>
        </div>
        <div>
            <label>Password</label>
            <input type="password" required/>
        </div>
    </div>
    )
}
export default SignUpPage

