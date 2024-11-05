import styles from './ResumeItem.module.css'

export default function ResumeItem({resume}) {
  return (
    <>
      <div>
        <div className={styles.resumeListItem}>
            {resume.title}
        </div>
      </div>
    </>
  );
}
