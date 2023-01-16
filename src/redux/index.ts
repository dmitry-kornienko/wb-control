import { configureStore } from "@reduxjs/toolkit";
import complectsSlice from "./complectsSlice";
import componentsReducer from './componentsSlice';

const store = configureStore({
    reducer: {
        components: componentsReducer,
        complects: complectsSlice,
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

