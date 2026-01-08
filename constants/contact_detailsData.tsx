import EmailButton from "@/components/contact/buttons/emailButton";
import PhoneCallButton from "@/components/contact/buttons/phoneButton";
import WhatsAppButton from "@/components/contact/buttons/whatsAppButton";
import { WhatsApp } from "@mui/icons-material";
import Email from "@mui/icons-material/Email";
import Phone from "@mui/icons-material/Phone";
import { ReactNode } from "react";

interface Contact {
  name: string,
  details: string | number,
  icon: ReactNode,
  color: string,
  component: ReactNode,
  link?: string
}

const contactDetailsdata: Contact[] = [
  {
    name: "email",
    details: "wilfredr319n@gmail.com",
    icon: <Email />,
    color: "red",
    component: <EmailButton emailAddress="wilfredr319n@gmail.com" />,
  },
  {
    name: "cell contact",
    details: "+27612023165",
    icon: <Phone />,
    color: "blue",
    component: <PhoneCallButton phoneNumber="+27612023165" />,
  },

  {
    name: "whatsapp",
    details: "+27 61 202 3165",
    icon: <WhatsApp />,
    color: "green",
    link: " https://wa.me/27612023165?text=Hie%20wilfred%20reign",
    component: <WhatsAppButton phoneNumber={27612023165} />,
  },
];

export default contactDetailsdata;
