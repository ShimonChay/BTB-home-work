import { FC, ReactNode } from "react";
import Dialog from "@mui/material/Dialog";
import "./GenericPopup.style.css";

interface GenericPopupProps {
  open: boolean;
  onClose: () => void;
  content?: ReactNode;
}

const GenericPopup: FC<GenericPopupProps> = ({ open, onClose, content }) => {
  return (
    <Dialog onClose={onClose} open={open}>
      <div className="popup">
        <div>{content}</div>
      </div>
    </Dialog>
  );
};

export default GenericPopup;
