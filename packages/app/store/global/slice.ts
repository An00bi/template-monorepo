import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit"

interface InitialStateI {
  lang: string
}

const initialState: InitialStateI = {
  lang: "en",
} as const

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setLang: (state: Draft<typeof initialState>, action: PayloadAction<typeof initialState.lang>) => {
      state.lang = action.payload
    },
  },
})

export const { setLang } = globalSlice.actions

export default globalSlice.reducer
