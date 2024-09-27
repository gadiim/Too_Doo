// src/app/models/filter.model.ts

export interface TodoFilter {
    isCompleted: boolean | null;
    project: number;
    days: number[]; // змінено з day на масив days
    months: number;
    priority: string;
    tag: string;
    isToday: boolean;
}

export const defaultTodoFilter: TodoFilter = {
    isCompleted: null,
    project: 0,
    days: [], // array вибраних днів
    months: 0,
    priority: '',
    tag: '',
    isToday: false,
};


