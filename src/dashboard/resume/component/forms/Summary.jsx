import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { useContext, useEffect, useState } from "react";
import GlobalApi from "../../../../../service/GlobalApi";
import { useParams } from "react-router-dom";
import { Bot, Brain, LoaderCircle } from "lucide-react";
import { AIChatSession } from "./../../../../../service/AIModal";

const prompt =
  "Job Title: {jobTitle} , Depends on job title give me list of  summery for 3 experience level, Mid Level and Freasher level in 3 -4 lines in array format, With summery and experience_level Field in JSON Format";

export default function Summary({ enableNext }) {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [summary, setSummary] = useState();
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const [aiGeneratedSummaryList, setAiGeneratedSummaryList] = useState([]);

  useEffect(() => {
    summary &&
      setResumeInfo({
        ...resumeInfo,
        summery: summary,
      });
  }, [summary]);

  const GenerateSummaryFromAI = async () => {
    setLoading(true);
    const PROMPT = prompt.replace("jobTitle", resumeInfo?.jobTitle);
    console.log(PROMPT);
    const result = await AIChatSession.sendMessage(PROMPT);
    const parsedResponse = JSON.parse(result.response.text());
    setAiGeneratedSummaryList(parsedResponse.summaries);
    setLoading(false);
  };

  const onSave = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      data: {
        summery: summary,
      },
    };
    GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(
      (res) => {
        console.log(res);
        enableNext(true);
        setLoading(false);
        toast("Details Updated");
      },
      (error) => {
        setLoading(false);
      }
    );
  };

  return (
    <>
      <div className="p-5 m-5 shadow-lg rounded-lg border-t-purple-500 border-t-4 mt-10">
        <h2 className="font-bold text-lg">Summary</h2>
        <p>Add Summary for your job title</p>
        <form onSubmit={onSave}>
          <div className="flex justify-between items-end mt-7">
            <label className="font-semibold">Add Summary</label>
            <Button
              size="sm"
              className="bg-purple-500 text-bold"
              type="button"
              onClick={() => GenerateSummaryFromAI()}
            >
              <span className="flex justify-between items-center gap-2 text-white">
                Generate from AI <Bot />
              </span>
            </Button>
          </div>
          <Textarea
            required
            className="mt-5"
            onChange={(e) => setSummary(e.target.value)}
          />
          <div className="mt-3 flex justify-end">
            <Button
              type="submit"
              className="bg-purple-500 text-white"
              disabled={loading}
            >
              {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </form>
        {aiGeneratedSummaryList && (
          <div>
            <h2 className="font-bold text-lg">Suggestions</h2>
            {aiGeneratedSummaryList.map((item, index) => (
              <div>
                <h2 className="font-bold my-1">
                  Level: {item?.experience_level}
                </h2>
                <p>{item?.summary}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
