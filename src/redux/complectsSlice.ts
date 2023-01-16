import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IComponent } from "./componentsSlice";

export interface IComplect {
    id: number,
    name: string,
    article: string,
    count: number,
    components: Omit<IComponent, 'article' | 'price' | 'id'>[],
}

interface IComplectsState {
    list: IComplect[],
}

const initialState: IComplectsState = {
    list: [
        {id: 1, name: '100м на Ленте шаг 20см', article: 'bgr-wp-100', count: 0,components: [
            {name: 'Капельная лента 20-6-1.6', count: 100},
            {name: 'Слепая лента', count: 10},
            {name: 'Тройник ЛЛЛ', count: 9},
            {name: 'Заглушка ленты', count: 10},
            {name: 'Уголок ЛЛ', count: 2},
            {name: 'Ремонтный фитинг', count: 3},
            {name: 'Кран ТЛ', count: 1},
            {name: 'Коробка 39-26-6', count: 1},
            {name: 'Пакет 32-43', count: 1},
            {name: 'Этикетка 58-40', count: 1},
            {name: 'Короб 60-40-40', count: 0.07},
        ]},
        {id: 2, name: '100м на Ленте шаг 10см', article: 'К-100Л-10', count: 0, components: [
            {name: 'Капельная лента 10-6-1.6', count: 100},
            {name: 'Слепая лента', count: 10},
            {name: 'Тройник ЛЛЛ', count: 9},
            {name: 'Заглушка ленты', count: 10},
            {name: 'Уголок ЛЛ', count: 2},
            {name: 'Ремонтный фитинг', count: 3},
            {name: 'Кран ТЛ', count: 1},
            {name: 'Коробка 39-26-6', count: 1},
            {name: 'Этикетка 58-40', count: 1},
            {name: 'Короб 60-40-40', count: 0.07},
        ]},
        {id: 3, name: '50м на Трубке шаг 20см', article: 'brg-wp-50-1', count: 0, components: [
            {name: 'Капельная лента 20-6-1.6', count: 50},
            {name: 'Тройник ТЛТ', count: 5},
            {name: 'Заглушка ленты', count: 5},
            {name: 'Заглушка шланга', count: 1},
            {name: 'Ремонтный фитинг', count: 2},
            {name: 'Кран ТТ', count: 1},
            {name: 'Коробка 30-30-4', count: 1},
            {name: 'Этикетка 58-40', count: 1},
            {name: 'Короб 60-40-40', count: 0.042},
        ]},
    ]
}

// interface IToggleAction extends IComponent {}

const complectSlice = createSlice({
    name: 'complect',
    initialState,
    reducers: {
        increaseCount(state, action: PayloadAction<IComplect>) {
            const toggledComponent = state.list.find(comlect => comlect.id === action.payload.id);
            if (toggledComponent) {
                toggledComponent.count += action.payload.count;
            }
        },
        decreaseCount(state, action: PayloadAction<IComplect>) {
            const toggledComponent = state.list.find(complect => complect.id === action.payload.id);
            if (toggledComponent) {
                toggledComponent.count -= action.payload.count;
            }
        },
    }
});

export const { decreaseCount, increaseCount } = complectSlice.actions;

export default complectSlice.reducer;

