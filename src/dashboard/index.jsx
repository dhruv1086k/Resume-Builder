import { useUser } from '@clerk/clerk-react';
import AddResume from './components/AddResume';
import styles from './index.module.css'
import GlobalApi from './../../service/GlobalApi'
import { useEffect, useState } from 'react';
import ResumeItem from './components/ResumeItem';

export default function dashboard() {
  const {user} = useUser();
  const [resumeList, setResumeList] = useState([]);

  useEffect(() => {
    user && GetResumesList();
  },[user]) //bcoz we need to call this func only when user info is available

  // use to get user resume list
  const GetResumesList = () => {
    GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress)
    .then(res => {
      setResumeList(res.data.data);
    })
  }

  return (
    <>
      <div className={styles.container}>
        <h2>My Resume</h2>
        <p>Kickstart your journey to your next role with an AI-powered resume</p>
        <div className={styles.addResumeCont}>
          <AddResume />
          {/* yaha pe hamne pehle check kiya ki agar resume list present hai to map wala kaam karo bcoz resumeList ko fetch karne me time lag sakta hai */}
          {resumeList.length>0 && resumeList.map((resume,index) => (
            <ResumeItem resume = {resume} keys={index} />
          ))}
        </div>
      </div>
    </>
  );
}
