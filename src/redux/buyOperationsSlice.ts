import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IComponent } from "./componentsSlice";

export interface IBuyOperation {
    id: number,
    date: string,
    components: Omit<IComponent, 'article'>[],
}

interface buyOperationState {
    list: IBuyOperation[],
}

const initialState: buyOperationState = {
    list: [],
}

const buyOperationSlice = createSlice({
    name: 'buyOperation',
    initialState,
    reducers: {
        addBuyOperation: (state, action: PayloadAction<IBuyOperation>) => {
            state.list.push(action.payload);
        },
        deleteBuyOperation: (state, action: PayloadAction<number>) => {
            state.list = state.list.filter(operation => operation.id !== action.payload);
        },
    }
});

export const { addBuyOperation, deleteBuyOperation } = buyOperationSlice.actions;
export default buyOperationSlice.reducer;