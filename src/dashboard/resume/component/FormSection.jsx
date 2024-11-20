import PersonalDetails from "./forms/PersonalDetails";
import Summary from "./forms/Summary";
import Skills from "./forms/Skills";
import Experience from "./forms/Experience";
import EducationalDetail from "./forms/EducationalDetail";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import { useState } from "react";

export default function FormSection() {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(false);
  return (
    <>
      <div className="h-auto w-1/2">
        <div className="mx-5 flex justify-between items-center text-white">
          <Button className="flex gap-2 text-black" variant="outline" size="sm">
            <LayoutGrid />
            Theme
          </Button>
          <div className="flex gap-2">
            {activeFormIndex > 1 && (
              <Button
                className="flex gap-2 bg-purple-500"
                size="sm"
                onClick={() => setActiveFormIndex(activeFormIndex - 1)}
              >
                <ArrowLeft />{" "}
              </Button>
            )}
            <Button
              disabled={!enableNext}
              className="flex gap-2 bg-purple-500"
              size="sm"
              onClick={() => setActiveFormIndex(activeFormIndex + 1)}
            >
              Next <ArrowRight />{" "}
            </Button>
          </div>
        </div>
        {/* Personal Details */}
        {activeFormIndex == 1 && <PersonalDetails enableNext={(v) => setEnableNext(v)} />}
        {/* Summary */}
        {activeFormIndex == 2 && <Summary enableNext={(v) => setEnableNext(v)} />}
        {/* Experience */}
        {activeFormIndex == 3 && <Experience />}
        {/* Educational Detail */}
        {activeFormIndex == 4 && <EducationalDetail />}
        {/* Skills */}
        {activeFormIndex == 5 && <Skills />}
      </div>
    </>
  );
}
