import AddResume from './components/AddResume';
import styles from './index.module.css'

export default function dashboard() {
  return (
    <>
      <div className={styles.container}>
        <h2>My Resume</h2>
        <p>Kickstart your journey to your next role with an AI-powered resume</p>
        <div className={styles.addResumeCont}>
          <AddResume />
        </div>
      </div>
    </>
  );
}
