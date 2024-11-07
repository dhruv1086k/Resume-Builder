import { useContext } from "react";
import styles from "./FormPreview.module.css";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import PersonalDetailPreview from "./preview/personalDetailPreview";


export default function FormPreview() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext); //provide same name of these context as provided to the usestate of parent file

  return (
    <>
      <div className={`${styles.preview}`}>
        {/* personal details */}
        <PersonalDetailPreview resumeInfo = {resumeInfo}/>
        {/* summary */}

        {/* professional experience */}

        {/* education details */}

        {/* skills */}

      </div>
    </>
  );
}
