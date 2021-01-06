import React from 'react';

function SignInPage() {
    return (
        <div>
            <h1>Sign In</h1>
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
export default SignInPage
