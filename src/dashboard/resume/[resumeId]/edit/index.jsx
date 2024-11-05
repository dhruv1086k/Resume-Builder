import { useParams } from "react-router-dom";
import styles from "./index.module.css";
import { useEffect } from "react";

export default function EditResume() {
  const params = useParams(); //will return url parameters
  useEffect(() => {
    console.log(params.resumeId);
  }, []);
  return (
    <>
      <div>Edit Resume</div>
    </>
  );
}
