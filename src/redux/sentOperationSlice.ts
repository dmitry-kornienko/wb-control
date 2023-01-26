import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ISentOperation {
    id: number,
    date: string,
    complectName: string,
    article?: string,
    count: number,
    warehouse: string,
    boxCount: number,
    weight: number,
    documentNumber: string,
    plannedDate: string,
    deliveryPrice: number,
    isAgreed: boolean,
    isAccepted: boolean,
}

interface senOperationState {
    list: ISentOperation[];
}

const initialState: senOperationState ={
    list: [],
}

const sentOperationSlice = createSlice({
    name: 'sentOperation',
    initialState,
    reducers: {
        addSentOperation(state, action: PayloadAction<ISentOperation>) {
            state.list.push(action.payload)
        },
        deleteSentOperation(state, action: PayloadAction<number>) {
            state.list = state.list.filter(operation => operation.id !== action.payload);
        },
        toggleAgreedSentOperation(state, action: PayloadAction<number>) {
            const toggledSentOperation = state.list.find(operation => operation.id === action.payload);
            if (toggledSentOperation) {
                toggledSentOperation.isAgreed = !toggledSentOperation.isAgreed;
            }
        },
        toggleAcceptedSentOperation(state, action: PayloadAction<number>) {
            const toggledSentOperation = state.list.find(operation => operation.id === action.payload);
            if (toggledSentOperation) {
                toggledSentOperation.isAccepted = !toggledSentOperation.isAccepted;
            }
        },
    }
});

export const {addSentOperation, deleteSentOperation, toggleAgreedSentOperation, toggleAcceptedSentOperation} = sentOperationSlice.actions;
export default sentOperationSlice.reducer;