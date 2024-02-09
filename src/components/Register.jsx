import { Link } from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";

function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function signInGoogle() {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                switch (error.code) {
                    case 'auth/email-already-in-use':
                      setError("Email is already registered");
                      break;
                    case 'auth/invalid-email':
                      setError("Invalid email");
                      break;
                    case 'auth/weak-password':
                      setError("Weak password, it must be at least 6 characters");
                      break;
                    default:
                      setError("Error while registering the user");
                      console.error("Authentication error:", error);
                  }
            });

    }

    const handleLogin = (event) => {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente
    };


    return (
        <>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Register</h3>
                            <span className="breadcrumb"><a href="#">Home</a> &gt; Register</span>
                        </div>
                    </div>
                </div>
            </div>


            <div class="contact-page section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 align-self-center">
                            <div class="left-text">
                                <div class="section-heading">
                                    <h6>Register</h6>
                                    <h2>Welcome!</h2>
                                </div>
                                Welcome to our Register page! Sign in to access your account and unlock a world of possibilities. Your journey starts here.
                                <br /><br />
                                <ul>
                                    <li><span>Already have an account? <Link to={"/login"}>Click here</Link></span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="right-content">
                                <div class="row">
                                    <div class="col-lg-12">

                                    </div>
                                    <div class="col-lg-12">
                                        <form id="contact-form" onSubmit={handleLogin}>
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <fieldset>
                                                        <h2>Please identify</h2><br /><br />
                                                        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." required="" />
                                                    </fieldset>
                                                </div>
                                                <div class="col-lg-12">
                                                    <fieldset>
                                                        <input type="password" name="subject" value={password} onChange={(e) => setPassword(e.target.value)} id="subject" placeholder="Password..." autocomplete="on" />
                                                        <p style={{ color: 'red' }}>&nbsp;&nbsp;&nbsp;&nbsp;{error}</p>
                                                    </fieldset>
                                                </div>
                                                <div class="col-lg-12">
                                                    <fieldset>
                                                        <button onClick={signInGoogle} class="orange-button">Sign up</button>
                                                    </fieldset>
                                                </div>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
