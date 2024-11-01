import { SignIn } from "@clerk/clerk-react";
import styles from './index.module.css'

export default function SignInPage() {
  return (
    <>
      <div className={styles.signinOuter} >
        <SignIn />
      </div>
    </>
  );
}
