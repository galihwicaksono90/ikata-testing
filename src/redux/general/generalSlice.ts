import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

export interface GeneralStateProps {
  articleMenuPosition: number;
  dewanPengawasTabPosition: number;
  pengurusPusatTabPosition: number;
  counter: number;
}

const initialState: GeneralStateProps = {
  articleMenuPosition: 0,
  dewanPengawasTabPosition: 0,
  pengurusPusatTabPosition: 5,
  counter: 0,
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setArticleMenuPosition: (state, action: PayloadAction<number>) => {
      state.articleMenuPosition = action.payload;
    },
    setDewanPengawasTabPosition: (state, action: PayloadAction<number>) => {
      state.dewanPengawasTabPosition = action.payload;
    },
    setPengurusPusatTabPosition: (state, action: PayloadAction<number>) => {
      state.pengurusPusatTabPosition = 2;
    },
    addCounter: (state) => {
      state.counter++;
    },
  },
});

export const {
  setArticleMenuPosition,
  setDewanPengawasTabPosition,
  setPengurusPusatTabPosition,
  addCounter,
} = generalSlice.actions;

export const articleMenuPosition = (state: RootState) =>
  state.general.articleMenuPosition;

export const dewanPengawasTabPosition = (state: RootState) =>
  state.general.dewanPengawasTabPosition;

export const pengurusPusatTabPosition = (state: RootState) =>
  state.general.pengurusPusatTabPosition;

export const counter = (state: RootState) => state.general.counter;

export default generalSlice.reducer;
