import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import facebook from "../public/facebook.svg";
import google from "../public/google.svg";
import apple from "../public/apple.svg";
import spotify from "../public/spotify.svg";
export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <div>
          <Image src={spotify} alt="spotify logo" />
        </div>
        <section>
          <header>
            <h1>Sign up to start listening</h1>
          </header>
          <form>
            <div className={styles.input}>
              <label>Email address</label>
              <div className={styles.inputCont}>
                <input type="text" placeholder="name@domain.con" />
              </div>
            </div>
            <Link href="/" className={styles.phoneNo}>
              Use phone number instead
            </Link>
            <button className={styles.next}>Next</button>
          </form>
          <div className={styles.signInOptions}>
            <div className={styles.orLine}>
              <div></div>
              <p>or</p>
              <div></div>
            </div>
            <div className={styles.signUp}>
              <button>
                <Link href={"/"}>
                  <Image
                    src={google}
                    width={24}
                    height={24}
                    alt="facebook img"
                  />
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
            </div>
            <div className={styles.login}>
              Already have an account? <Link href="/login">Login Here</Link>
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
