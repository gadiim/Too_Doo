// src/app/models/filter.model.ts

// export interface TodoFilter {
//     isCompleted: boolean | null;
//     day: number;
//     months: number;
//     priority: string;
//     tag: string;
// }

// export const defaultTodoFilter: TodoFilter = {
//     isCompleted: null,
//     day: 0,
//     months: 0,
//     priority: '',
//     tag: ''
// };

export interface TodoFilter {
    isCompleted: boolean | null;
    days: number[]; // змінено з day на масив days
    months: number;
    priority: string;
    tag: string;
}

export const defaultTodoFilter: TodoFilter = {
    isCompleted: null,
    days: [], // array вибраних днів
    months: 0,
    priority: '',
    tag: ''
};


