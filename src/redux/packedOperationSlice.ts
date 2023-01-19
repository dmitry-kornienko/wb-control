import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IComplect } from "./complectsSlice";

interface IPackedOperation {
    id: number,
    date: string,
    complect: IComplect,
}

interface packedOperationState {
    list: IPackedOperation[],
}

const initialState: packedOperationState = {
    list: [],
}

const packedOperaionSlice = createSlice({
    name: 'packedOperation',
    initialState,
    reducers: {
        addPackedOperation: (state, action: PayloadAction<IPackedOperation>) => {
            state.list.push(action.payload);
        },
        deletePackedOperation: (state, action: PayloadAction<number>) => {
            state.list = state.list.filter(operation => operation.id !== action.payload)
        },
    }
});

export const { addPackedOperation, deletePackedOperation } = packedOperaionSlice.actions;
export default packedOperaionSlice.reducer;