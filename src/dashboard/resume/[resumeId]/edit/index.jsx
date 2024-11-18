import { useParams } from "react-router-dom";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import FormSection from "../../component/FormSection";
import FormPreview from "../../component/FormPreview";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import dummy from "@/data/dummy";

export default function EditResume() {
  const params = useParams(); //will return url parameters
  const [resumeInfo, setResumeInfo] = useState();
  useEffect(() => {
    setResumeInfo(dummy) //adding dummy data to usestate
  }, []);
  return (
    <>
      <ResumeInfoContext.Provider value={{resumeInfo,setResumeInfo}}>
        <div className={styles.container}>
          {/* resume editor */}
          <FormSection />
          {/* resume preview */}
          <FormPreview />
        </div>
      </ResumeInfoContext.Provider>
    </>
  );
}
