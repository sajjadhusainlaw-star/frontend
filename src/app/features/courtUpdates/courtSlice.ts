import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Case {
  status: "Hearing Scheduled" | "Under Review" | "Reserved";
  title: string;
  court: string;
  description: string;
  caseNo: string;
  nextDate: string;
  date: string;
}

interface CourtState {
  selectedTab: string;
  cases: Case[];
}

const initialState: CourtState = {
  selectedTab: "Supreme Court",
  cases: [
    {
      status: "Hearing Scheduled",
      title: "Rahul Gandhi v. Purnesh Modi - Defamation Case",
      court: "Supreme Court of India",
      description:
        "Supreme Court to hear appeal against Gujarat High Court judgment",
      caseNo: "SLP (Crl.) No. 8234/2024",
      nextDate: "Jan 15, 2025",
      date: "Jan 7, 2025",
    },
    {
      status: "Under Review",
      title: "Electoral Bonds Case - Implementation Review",
      court: "Supreme Court of India",
      description: "Monitoring compliance with electoral bonds judgment",
      caseNo: "WP (C) No. 880/2017",
      nextDate: "Jan 20, 2025",
      date: "Jan 6, 2025",
    },
    {
      status: "Reserved",
      title: "Article 370 Constitutional Challenge",
      court: "Supreme Court of India",
      description:
        "Constitutional bench reserves judgment on Article 370 abrogation",
      caseNo: "WP (C) No. 1031/2019",
      nextDate: "Judgment Reserved",
      date: "Jan 5, 2025",
    },
  ],
};

const courtSlice = createSlice({
  name: "court",
  initialState,
  reducers: {
    setSelectedTab: (state, action: PayloadAction<string>) => {
      state.selectedTab = action.payload;
    },
  },
});

export const { setSelectedTab } = courtSlice.actions;
export default courtSlice.reducer;
