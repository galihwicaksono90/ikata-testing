import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

export interface GeneralStateProps {
  articleMenuPosition: number;
}

const initialState: GeneralStateProps = {
  articleMenuPosition: 0,
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setArticleMenuPosition: (state, action: PayloadAction<number>) => {
      state.articleMenuPosition = action.payload;
    },
  },
});

export const { setArticleMenuPosition } = generalSlice.actions;

export const articleMenuPosition = (state: RootState) =>
  state.general.articleMenuPosition;

export default generalSlice.reducer;
