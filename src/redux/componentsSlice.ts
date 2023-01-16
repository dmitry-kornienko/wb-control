import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IComponent {
    id: number,
    name: string,
    article?: string,
    price: number,
    count: number,
}

interface IComponentsState {
    list: IComponent[],
}

const initialState: IComponentsState = {
    list: [
        {id: 1, name: 'Капельная лента 20-6-1.6', article: '01', price: 1.95, count: 0},
        {id: 2, name: 'Капельная лента 10-6-1.6', article: '02', price: 2.2, count: 0},
        {id: 3, name: 'Слепая лента', article: '03', price: 1.7, count: 0},
        {id: 4, name: 'Тройник ТЛТ', article: '04', price: 16.1, count: 0},
        {id: 5, name: 'Тройник ЛЛЛ', article: '05', price: 12, count: 0},
        {id: 6, name: 'Заглушка ленты', article: '06', price: 4.5, count: 0},
        {id: 7, name: 'Заглушка шланга', article: '07', price: 2, count: 0},
        {id: 8, name: 'Ремонтный фитинг', article: '08', price: 5, count: 0},
        {id: 9, name: 'Уголок ЛЛ', article: '09', price: 6.5, count: 0},
        {id: 10, name: 'Кран ТТ', article: '10', price: 14, count: 0},
        {id: 11, name: 'Кран ТЛ', article: '11', price: 15, count: 0},
        {id: 12, name: 'Коробка 30-30-3', article: '12', price: 13.55, count: 0},
        {id: 13, name: 'Коробка 39-26-6', article: '13', price: 40, count: 0},
        {id: 14, name: 'Короб 60-40-40', article: '14', price: 80, count: 0},
        {id: 15, name: 'Пакет 32-43', article: '15', price: 3.2, count: 0},
        {id: 16, name: 'Этикетка 58-40', article: '16', price: 0.3, count: 0},
    ]
}

interface IToggleAction extends IComponent {}

const componentSlice = createSlice({
    name: 'component',
    initialState,
    reducers: {
        increaseCount(state, action: PayloadAction<IToggleAction>) {
            const toggledComponent = state.list.find(component => component.id === action.payload.id);
            if (toggledComponent) {
                toggledComponent.count += action.payload.count;
            }
        },
        decreaseCount(state, action: PayloadAction<IToggleAction>) {
            const toggledComponent = state.list.find(component => component.id === action.payload.id);
            if (toggledComponent) {
                toggledComponent.count -= action.payload.count;
            }
        },
        changePrice(state, action: PayloadAction<IToggleAction>) {
            const toggledComponent = state.list.find(component => component.id === action.payload.id);
            if (toggledComponent) {
                toggledComponent.price = action.payload.price;
            }
        }, 
    }
});

export const { decreaseCount, increaseCount, changePrice } = componentSlice.actions;

export default componentSlice.reducer;

