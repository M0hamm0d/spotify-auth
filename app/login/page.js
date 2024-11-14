import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import facebook from "../../public/facebook.svg";
import google from "../../public/google.svg";
import apple from "../../public/apple.svg";
import spotify from "../../public/spotify.svg";
function page() {
  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <div>
          <Image src={spotify} alt="spotify logo" />
        </div>
        <section>
          <header>
            <h1>Log in to Spotify</h1>
          </header>
          <div className={styles.signUp}>
            <button>
              <Link href={"/"}>
                <Image src={google} width={24} height={24} alt="facebook img" />
                <p>Sign up with Google</p>
              </Link>
            </button>
            <button>
              <Link href={"/"}>
                <Image src={facebook} alt="facebook img" />
                <p>Sign up with Facebook</p>
              </Link>
            </button>
            <button>
              <Link href={"/"}>
                <Image src={apple} alt="facebook img" />
                <p>Sign up with Apple</p>
              </Link>
            </button>
            <button>
              <Link href={"/"}>
                <p>Sign up with phone number</p>
              </Link>
            </button>
          </div>
          <form className={styles.form}>
            <div className={styles.input}>
              <label>Email or username</label>
              <div className={styles.inputCont}>
                <input type="text" placeholder="name@domain.con" />
              </div>
            </div>
            <div className={styles.input}>
              <label>Password</label>
              <div className={styles.inputCont}>
                <input type="text" placeholder="password" />
              </div>
            </div>
            <button className={styles.next}>Next</button>
          </form>
          <div className={styles.signInOptions}>
            <div className={styles.forgotPass}>
              <Link href="/">
                <b>Forgot password?</b>
              </Link>
            </div>
            <div className={styles.login}>
              Did not have an account?{" "}
              <Link href="/">
                <b>Sign up for Spotify</b>
              </Link>
            </div>
          </div>
          <div className={styles.copyRight}>
            This site is protected by reCAPTCHA and the Google
            <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a>{" "}
            apply.
          </div>
        </section>
      </div>
    </div>
  );
}

export default page;
