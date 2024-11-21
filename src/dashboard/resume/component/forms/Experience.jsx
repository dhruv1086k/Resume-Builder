import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import RichTextEditor from "../RichTextEditor";

const formField = {
  title: "",
  companyName: "",
  city: "",
  state: "",
  startDate: "",
  endDate: "",
  workSummary: "",
};

export default function Experience() {
  const [experienceList, setExperienceList] = useState([
    {
      formField,
    },
  ]);

  const handleChange = (index, e) => {
    const newEntries = [...experienceList];
    const { name, value } = e.target;
    newEntries[index].formField[name] = value;
    setExperienceList(newEntries);
  };

  const addNewExperience = () => {
    setExperienceList([...experienceList, formField]);
  };

  const removeExperience = () => {
    setExperienceList((experienceList) => experienceList.slice(0, -1));
  };

  const handleRichTextEdior = (e, name, index) => {
    const newEntries = [...experienceList];
    newEntries[index].formField[name] = e.target.value;
    setExperienceList(newEntries);
  };

  return (
    <>
      <div className="p-5 m-5 shadow-lg rounded-lg border-t-purple-500 border-t-4 mt-10">
        <h2 className="font-bold text-lg">Professional Experience</h2>
        <p>Add your previous job experience</p>
        <div>
          {experienceList.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
                <div>
                  <label className="text-xs">Position Title</label>
                  <Input
                    name="title"
                    onChange={(e) => handleChange(index, e)}
                  />
                </div>
                <div>
                  <label className="text-xs">Company Name</label>
                  <Input
                    name="companyName"
                    onChange={(e) => handleChange(index, e)}
                  />
                </div>
                <div>
                  <label className="text-xs">City</label>
                  <Input name="city" onChange={(e) => handleChange(index, e)} />
                </div>
                <div>
                  <label className="text-xs">State</label>
                  <Input
                    name="state"
                    onChange={(e) => handleChange(index, e)}
                  />
                </div>
                <div>
                  <label className="text-xs">Start Date</label>
                  <Input
                    name="startDate"
                    onChange={(e) => handleChange(index, e)}
                    type="date"
                  />
                </div>
                <div>
                  <label className="text-xs">End Date</label>
                  <Input
                    name="endDate"
                    onChange={(e) => handleChange(index, e)}
                    type="date"
                  />
                </div>
                <div className="col-span-2">
                  <RichTextEditor
                    onRichTextEditorChange={(e) =>
                      handleRichTextEdior(e, "workSummary", index)
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button
              onClick={addNewExperience}
              className="text-purple-500 border hover:bg-slate-100"
            >
              + Add More Experience
            </Button>
            <Button
              onClick={removeExperience}
              className="text-purple-500 border hover:bg-slate-100"
            >
              Remove
            </Button>
          </div>
          <Button className="text-white bg-purple-500">Save</Button>
        </div>
      </div>
    </>
  );
}
