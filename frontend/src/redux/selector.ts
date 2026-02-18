import type { RootState } from './selectors/store';

export const selectSettings = (state: RootState) => state.settings;
