import { createSlice } from "@reduxjs/toolkit";
import i from "../../../public/slider/image.svg";
import im from '../../../public/slider/maskgroup.svg';
import img from '../../../public/slider/mask.svg'
interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
}

interface SlidesState {
  slides: Slide[];
}

const initialState: SlidesState = {
  slides: [
    {
      id: 1,
      image:im,
      title:
        "Israeli ministers to discuss Gaza plan that would bring ceasefire and hostage release",
      description:
        "As we are still waiting for a result from the Israeli government on the Gaza ceasefire deal, the country’s far-right minister Itamar Ben-Gvir has said he will vote to bring down the government if Hamas is not dismantled.",
      link: "#",
    },
    {
      id: 2,
      image:i,
      title: "Supreme Court allows sale, bursting of green firecrackers in Delhi-NCR during Diwali",
      description:
        "The Supreme Court on Wednesday permitted the sale and bursting of green firecrackers in Delhi and the National Capital Region (NCR) during the upcoming Diwali festival [MC Mehta vs. Union of India & Ors.",
      link: "#",
    },
    {
      id: 3,
      image:img,
      title: "Delhi High Court seeks Newslaundry's reply to Eduquity defamation suit",
      description:
        "The Delhi High Court on Wednesday issued summons to online news platform Newslaundry in a defamation case filed by exam services provider Eduquity Career Technologies, a company that recently became the new exam-conducting partner for the Staff Selection Commission (SSC)",
      link: "#",
    },
  ],
};

const slidesSlice = createSlice({
  name: "slides",
  initialState,
  reducers: {},
});

export default slidesSlice.reducer;
