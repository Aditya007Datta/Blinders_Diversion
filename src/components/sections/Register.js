"use client";
import { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { signUp,signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth"
import { useRouter } from 'next/navigation';
import { Button } from "../button";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const googleProvider = new GoogleAuthProvider();
    const [error, setError] = useState(false);

    const router = useRouter();

    const signUpWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((response) => {
                sessionStorage.setItem('Token', response.user.accessToken)
                sessionStorage.setItem('uid', userCredential.user.uid)
                console.log(response.user)
                router.push('/')
            })
            .catch(err => {
                alert('Email Already Exists');
                setError(true)
            })
    }

    useEffect(() => {
        let token = sessionStorage.getItem('Token')

        if (token) {
            router.push('/')
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                sessionStorage.setItem('Token', userCredential.user.accessToken);
                sessionStorage.setItem('uid', userCredential.user.uid)
                router.push("/");
                // dispatch({type:"LOGIN", payload:user})
                // navitage("/");
            })
            .catch((error) => {
                setError(true);
            });
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-4">Register</h1>

            <form className="w-1/3" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                        required
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-background leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="flex  flex-row gap-4">
                    <Button onClick={handleSubmit} type="submit">Register</Button>
                    <Button onClick={signUpWithGoogle}>
                        Sign Up with Google
                    </Button>
                </div>
                {error && <span className="">Already a member!</span>}
            </form>
        </div>
    );

};

export default Register;