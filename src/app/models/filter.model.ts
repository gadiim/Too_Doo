// src/app/models/filter.model.ts

export interface TodoFilter {
    isCompleted: boolean | null;
    months: number;
    priority: string;
    tag: string;
}

export const defaultTodoFilter: TodoFilter = {
    isCompleted: null,
    months: 0,
    priority: '',
    tag: ''
};
