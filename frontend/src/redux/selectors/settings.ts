import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IfovoritGame } from "../../utils/helper";

interface ISettings {
  isOpenContactPopup: boolean;
  openInfoGamePopup: IfovoritGame | null;
}

const initialState: ISettings = {
  isOpenContactPopup: false,
  openInfoGamePopup: null,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setIsOpenContactPopup: (state, action: PayloadAction<boolean>) => {
      state.isOpenContactPopup = action.payload;
    },
    setOpenInfoGamePopup: (
      state,
      action: PayloadAction<IfovoritGame | null>,
    ) => {
      state.openInfoGamePopup = action.payload;
    },
  },
});

export const { setIsOpenContactPopup, setOpenInfoGamePopup } =
  settingsSlice.actions;
