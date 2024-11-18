import { Link } from "react-router-dom";
import styles from "./ResumeItem.module.css";

export default function ResumeItem({ resume }) {
  return (
    <>
      <Link to={'/dashboard/resume/'+resume.documentId+'/edit'}>
        <div>
          <div className={styles.resumeListItem}>{resume.title}</div>
        </div>
      </Link>
    </>
  );
}
