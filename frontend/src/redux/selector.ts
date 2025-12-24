import type { RootState } from "./selects/store";

export const selectSettings = (state: RootState) => state.settings;