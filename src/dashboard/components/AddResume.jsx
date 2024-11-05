import { Loader2, PlusSquare } from "lucide-react";
import styles from "./AddResume.module.css";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from "uuid";
import GlobalApi from "./../../../service/GlobalApi";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export default function AddResume() {
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("");
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();

  const onCreate = async () => {
    setLoading(true);
    const uuid = uuidv4();
    const data = {
      data: {
        title: resumeTitle,
        resumeId: uuid,
        userEmail: user?.primaryEmailAddress.emailAddress,
        userName: user?.fullName,
      },
    };
    try {
      const res = await GlobalApi.CreateNewResume(data);      
      if (res) {
        setLoading(false); 
        setOpenDialog(false);
        if(res){
          navigation('/dashboard/resume/'+ res.data.data.documentId +'/edit')
        }
      }
    } catch (error) {
      console.error("Error response:", error.response);
      console.error("Error data:", error.response?.data);
      setLoading(false);
    }
  };

  return (
    <>
      <div className={styles.AddResumeOuter}>
        <div
          className={styles.addResumeButtonOuter}
          onClick={() => setOpenDialog(true)}
        >
          <PlusSquare />
        </div>
        <div className={`${styles.dialogContainer} ${openDialog?styles.show:styles.hide}`}>
          <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogContent className={styles.dialog}>
              <DialogHeader>
                <DialogTitle className={styles.dialogTitle}>
                  Create New Resume
                </DialogTitle>
                <DialogDescription className={styles.dialogDescription}>
                  <p>Add a title for your new resume</p>
                  <Input
                    className={styles.dialogInput}
                    placeholder="Ex. Full Stack Developer Resume"
                    onChange={(e) => setResumeTitle(e.target.value)}
                  />
                </DialogDescription>
                <div className={styles.btnContainer}>
                  <Button id={styles.CBtn} onClick={() => setOpenDialog(false)}>
                    Cancel
                  </Button>
                  <Button disabled={!resumeTitle || loading} onClick={onCreate}>
                    {loading ? <Loader2 className={styles.spin} /> : "Create"}
                  </Button>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}
