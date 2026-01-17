import React from "react";
import IconButton from '@mui/material/IconButton';
import RotatingCard from "@/components/cards/RotatingCard";
import { WhatsApp } from "@mui/icons-material";
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';


interface WhatsAppProps {
  phoneNumber: number
}
const WhatsAppButton: React.FC<WhatsAppProps> = ({ phoneNumber }) => {
  return (
    <RotatingCard>
      <IconButton
        href={`https://wa.me/${phoneNumber}?text=Hie%20gene20`}
      >
        <WhatsApp sx={{ fontSize: "20px", color: "green" }} />
      </IconButton>
    </RotatingCard>
  );
};


export default WhatsAppButton;
