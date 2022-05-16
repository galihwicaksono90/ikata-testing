import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

export interface GeneralStateProps {
  articleMenuPosition: number;
  dewanPengawasTabPosition: number;
}

const initialState: GeneralStateProps = {
  articleMenuPosition: 0,
  dewanPengawasTabPosition: 0,
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
  },
});

export const { setArticleMenuPosition, setDewanPengawasTabPosition } =
  generalSlice.actions;

export const articleMenuPosition = (state: RootState) =>
  state.general.articleMenuPosition;

export const dewanPengawasTabPosition = (state: RootState) =>
  state.general.dewanPengawasTabPosition;

export default generalSlice.reducer;
