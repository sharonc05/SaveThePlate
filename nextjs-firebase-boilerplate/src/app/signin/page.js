'use client'
import signIn from "@/firebase/auth/signIn";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import Link from 'next/link'; // Make sure to import Link from 'next/link'
import styles from '../SignInSignUp.module.css'; // Importing styles from CSS module

function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      console.error(error);
      alert(error);
      return;
    }

    console.log(result);
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form onSubmit={handleForm} className={styles.form}>
          <h1 className={styles.title}>Sign In</h1>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
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