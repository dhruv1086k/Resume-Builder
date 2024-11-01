import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import styles from "./Header.module.css";
import { UserButton, useUser } from "@clerk/clerk-react";

export default function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <>
      <div className={styles.container}>
        <img src="/logo.svg" alt="" />
        {isSignedIn ? (
          <div className={styles.headerRightCont}>
            <Link to={"/dashboard"}>
              <Button className={styles.button} id={styles.dashBtn}>
                Dashboard
              </Button>
            </Link>
            <UserButton className={styles.profileBtn} />
          </div>
        ) : (
          <Link to={"./auth/sign-in"} className={styles.buttonOuter}>
            <Button className={styles.button}>Get Started</Button>
          </Link>
        )}
      </div>
    </>
  );
}
