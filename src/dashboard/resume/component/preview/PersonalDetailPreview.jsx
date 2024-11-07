export default function PersonalDetailPreview({resumeInfo}) {
  return (
    <>
      <div>
        <h2>{resumeInfo?.firstName} {resumeInfo?.lastName}</h2>
      </div>
    </>
  );
}
