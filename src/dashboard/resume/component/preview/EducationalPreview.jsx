export default function EducationPreview({ resumeInfo }) {
  return (
    <>
      <div className="my-6">
        <h2
          className="text-center font-bold text-sm mb-2"
          style={{ color: resumeInfo?.themeColor }}
        >
          Educational Experience
        </h2>
        <hr style={{ borderColor: resumeInfo?.themeColor }} />

        {resumeInfo?.education.map((educationItem, index) => (
          <div className="my-5" key={index}>
            <h2 className="text-sm font-bold" style={{color: resumeInfo?.themeColor}}>
              {educationItem?.universityName}
            </h2>
            <h2 className="text-xs flex justify-between">
              {educationItem?.degree} in {educationItem?.major}
              <span>
                {educationItem?.startDate} - {educationItem.endDate}
              </span>
            </h2>

            <p className="text-xs my-2">
                {educationItem?.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
