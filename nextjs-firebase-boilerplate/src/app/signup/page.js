'use client'
import signUp from "@/firebase/auth/signup";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import styles from '../SignInSignUp.module.css'; // Importing styles from CSS module

function Page() {
  const [ email, setEmail ] = useState( '' );
  const [ password, setPassword ] = useState( '' );
  const router = useRouter();

  // Handle form submission
  const handleForm = async (event) => {
    event.preventDefault();

    // Attempt to sign up with provided email and password
    const { result, error } = await signUp( email, password );

    if ( error ) {
      // Display and log any sign-up errors
      console.log( error );
      alert(error);
      return;
    }

    // Sign up successful
    console.log( result );

    // Redirect to the admin page
    router.push( "/admin" );
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form onSubmit={handleForm} className={styles.form}>
          <h1 className={styles.title}>Sign Up</h1>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
            <input
              onChange={( e ) => setEmail( e.target.value )}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                name="password"
                id="password"
                placeholder="password"
                className={styles.input}
              />
            </div>
                <div className={styles.submitContainer}>
                  <button
                    type="submit"
                    className={styles.submitButton}
                  >
                    Sign In
                  </button>
                </div>
            </form>
      </div>
    </div>
  );
}

export default Page;
