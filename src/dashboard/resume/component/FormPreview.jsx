import { useContext } from "react";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import PersonalDetailPreview from "./preview/personalDetailPreview";
import SummaryPreview from "./preview/SummaryPreview";
import ExperiencePreview from "./preview/ExperiencePreview";
import EducationPreview from "./preview/EducationalPreview";
import SkillsPreview from "./preview/SkillsPreview";

export default function FormPreview() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext); //provide same name of these context as provided to the usestate of parent file

  return (
    <>
      <div
        className="shadow-lg w-1/2 h-full p-14 border-t-[20px]"
        style={{ borderColor: resumeInfo?.themeColor }}
      >
        {/* personal details */}
        <PersonalDetailPreview resumeInfo={resumeInfo} />
        {/* summary */}
        <SummaryPreview resumeInfo={resumeInfo} />
        {/* professional experience */}
        <ExperiencePreview resumeInfo={resumeInfo} />
        {/* education details */}
        <EducationPreview resumeInfo={resumeInfo} />
        {/* skills */}
        <SkillsPreview resumeInfo={resumeInfo} />
      </div>
    </>
  );
}
