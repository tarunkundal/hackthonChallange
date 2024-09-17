import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Hackthon {
    id: string | number
    challengeName: string
    startDate: string
    endDate: string
    description: string
    level: string
    image: string
}

const initialState: Hackthon[] = []


const hackthonSlice = createSlice({
    name: 'hackthon',
    initialState,
    reducers: {
        addHackthon: (state, action: PayloadAction<Hackthon>) => {
            state.push(action.payload)
        },
        removeHackthon: (state, action: PayloadAction<string | number>) => {
            return state.filter((hack) => hack.id !== action.payload)
        },
        updateHackthon: (state, action: PayloadAction<Hackthon>) => {
            const hackthonToUpdate = state.find((hackthon) => hackthon.id === action.payload.id);
            if (hackthonToUpdate) {
                hackthonToUpdate.challengeName = action.payload.challengeName;
                hackthonToUpdate.startDate = action.payload.startDate;
                hackthonToUpdate.endDate = action.payload.endDate;
                hackthonToUpdate.description = action.payload.description;
                hackthonToUpdate.level = action.payload.level;
                hackthonToUpdate.image = action.payload.image;
            }
        }
    }
})

export default hackthonSlice.reducer
export const hackthonActions = hackthonSlice.actions