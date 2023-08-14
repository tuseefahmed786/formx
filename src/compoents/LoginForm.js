import React from 'react';

const LoginForm = () => {
    return (
    <>
    <div className="container mt-5">
        <div className="row">
            <div className="col-12 loginform flex-column d-flex justify-content-center ">
                <h1 className='text-center'>Join formX</h1>

            </div>
        </div>

<div className="loginforminner pt-4 row justify-content-center">
    <div className='col-lg-6 d-flex justify-content-center'>
    <form className="d-flex flex-column align-items-start">
    <input type="email" placeholder='Email'/>
    <input type="password" placeholder='Password'/>
   <div className='d-flex checkbox'> <input type="checkbox" /> <span className="firstspan">Keep Me signed in</span> <span>Frogtten Your Password</span></div>
<button>Sign In</button>
<div className="d-flex align-items-center joinsection">
<span>Not a member ?</span> <span>Join Us</span>
</div>

</form>
    </div>
</div>
</div>
    </>
    );
}

export default LoginForm;
