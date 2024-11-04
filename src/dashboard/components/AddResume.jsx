import { PlusSquare } from "lucide-react";
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
import { Input } from "@/components/ui/input"


export default function AddResume() {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <>
      <div className={styles.AddResumeOuter}>
        <div
          className={styles.addResumeButtonOuter}
          onClick={() => setOpenDialog(true)}
        >
          <PlusSquare />
        </div>
        <div
          className={`${styles.dialogContainer} ${
            openDialog ? styles.show : styles.hide
          }`}
        >
          <Dialog open={openDialog}>
            <DialogContent className={styles.dialog}>
              <DialogHeader>
                <DialogTitle className={styles.dialogTitle}>Create New Resume</DialogTitle>
                <DialogDescription className={styles.dialogDescription}>
                  <p>Add a title for your new resume</p>
                  <Input className={styles.dialogInput} placeholder="Ex.Full Stack developer resume"/>
                </DialogDescription>
                <div className={styles.btnContainer}>
                  <Button id={styles.CBtn} onClick={() => setOpenDialog(false)}>Cancel</Button>
                  <Button>Create</Button>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}
