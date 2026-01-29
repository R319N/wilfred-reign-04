import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import ImageIcon from "@mui/icons-material/Image";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import { ReactNode } from "react";

interface Service {
  key: string;
  name: string;
  imgURL: string;
  icon?: ReactNode;
  inDetail: string;
  firstWord: string;
  color: string;
  secondWord1: string;
  secondWord2: string;
}

const ourServices: Service[] = [
  {
    key: "1",
    name: "Website Development",
    firstWord: "website",
    secondWord1: "dev",
    secondWord2: "elopment",
    imgURL: "/images/webdev.jpg",
    inDetail:
      "We offer you web development services to suit your requirements - check our pricing list for more information.",
    color: "#7E78D2",
  },
  {
    key: "2",
    name: "UI/UX Design",
    firstWord: "UI/UX",
    secondWord1: "de",
    secondWord2: "sign",
    imgURL: "/images/design.jpg",
    inDetail:
      "Create your brand image with us. We design a variety of masterpieces, including your logo, flyers, business cards, and much more.",
    color: "#F26430",
  },
  {
    key: "3",
    name: "Content Creation",
    firstWord: "content",
    color: "#4392F1",
    secondWord1: "cre",
    secondWord2: "ation",
    imgURL: "/images/contentCreation.jpg",
    inDetail:
      "Your IT-based solution service provider. We have a wide variety of IT services that we provide. Just name your requirement and inquire with us. Our services cover almost the entire tech industry.",
  },
];

export default ourServices;
