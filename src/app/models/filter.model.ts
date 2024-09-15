// src/app/models/filter.model.ts

export interface TodoFilter {
    isCompleted: boolean | null;
    day: number;
    months: number;
    priority: string;
    tag: string;
}

export const defaultTodoFilter: TodoFilter = {
    isCompleted: null,
    day: 0,
    months: 0,
    priority: '',
    tag: ''
};
