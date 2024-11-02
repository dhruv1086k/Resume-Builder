import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import styles from "./Header.module.css";
import { UserButton, useUser } from "@clerk/clerk-react";

export default function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src="/logo.png" alt="" />
        </div>
        <div className={styles.center}>
          <ul>
            <a href="/">
              <li>HOME</li>
            </a>
            <a href="#">
              <li>DOCS</li>
            </a>
            <a href="#">
              <li>DEVELOPER</li>
            </a>
            {isSignedIn && (
              <a href="#">
                <li>
                  <Link to={"/dashboard"}>
                    <Button className={styles.button} id={styles.dashBtn}>
                      DASHBOARD
                    </Button>
                  </Link>
                </li>
              </a>
            )}
          </ul>
        </div>
        <div className={styles.right}>
          {isSignedIn ? (
            <div className={styles.headerRightCont}>
              <UserButton />
            </div>
          ) : (
            <Link to={"./auth/sign-in"} className={styles.buttonOuter}>
              <Button className={styles.button}>Get Started</Button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
