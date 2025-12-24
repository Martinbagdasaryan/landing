import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ISettings {
  isOpenContactPopup: boolean;
}

const initialState: ISettings = {
  isOpenContactPopup: false,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setIsOpenContactPopup: (state, action: PayloadAction<boolean>) => {
      state.isOpenContactPopup = action.payload;
    },
  },
});

export const { setIsOpenContactPopup } = settingsSlice.actions;
