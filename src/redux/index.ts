import { configureStore } from "@reduxjs/toolkit";
import buyOperationsSlice from "./buyOperationsSlice";
import complectsSlice from "./complectsSlice";
import componentsReducer from './componentsSlice';
import packedOperationSlice from "./packedOperationSlice";
import sentOperationSlice from "./sentOperationSlice";
import { statisticsApi } from "./statistics.api";

const store = configureStore({
    reducer: {
        components: componentsReducer,
        complects: complectsSlice,
        buyOperations: buyOperationsSlice,
        packedOperaions: packedOperationSlice,
        sentOperations: sentOperationSlice,
        [statisticsApi.reducerPath]: statisticsApi.reducer,
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(statisticsApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

