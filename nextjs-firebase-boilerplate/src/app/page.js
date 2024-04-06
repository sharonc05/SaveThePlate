import Link from 'next/link';
import styles from './Home.module.css';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page - Your Site Name</title>
        <meta name="description" content="Welcome to the homepage of our site where you can learn more about our services and offerings." />
      </Head>
      <main className={styles.mainContainer}>
        <div className={styles.topFixedNav}>
          <Link href="/signin" legacyBehavior>
            <a className={styles.navLink}>Login</a>
          </Link>
          <Link href="/signup" legacyBehavior>
            <a className={styles.navLink}>Signup</a>
          </Link>
          <Link href="/" legacyBehavior>
            <a className={styles.navLink}>Home</a>
          </Link>
        </div>

        {/* Title and introductory content */}
        <div className={styles.titleContainer}>
          <h1>Welcome to SaveThePlate!!</h1>
          <p>Explore the features and services we offer and learn how they can benefit you. Join us to get the most out of our platform.</p>
        </div>

        {/* Additional content can follow here */}
        <div className={styles.contentSection}>
          <p>Welcome to Save the Plate!</p>
        </div>
      </main>
    </>
  );
}
