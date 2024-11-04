import Header from "@/components/custom/Header";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

export default function home() {
  return (
    <>
      <div>
        <Header />
        <div className={styles.landingContent}>
          <h5>Next-generation of Resume Building.</h5>
          <h1>
            Perfect Resume in
            <br /> Minutes with AI📝
          </h1>
          <p>
            Effortlessly craft professional resumes that stand out,
            <br /> powered by AI intelligence.
          </p>
          <Link>
            <Button className={styles.button}>Start Building</Button>
          </Link>
          <h6>🔰Next-Gen Site Builder</h6>
        </div>
      </div>
    </>
  );
}
