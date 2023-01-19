import { configureStore } from "@reduxjs/toolkit";
import buyOperationsSlice from "./buyOperationsSlice";
import complectsSlice from "./complectsSlice";
import componentsReducer from './componentsSlice';
import packedOperationSlice from "./packedOperationSlice";

const store = configureStore({
    reducer: {
        components: componentsReducer,
        complects: complectsSlice,
        buyOperations: buyOperationsSlice,
        packedOperaions: packedOperationSlice,
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

