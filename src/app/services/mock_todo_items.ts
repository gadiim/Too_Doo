import { TodoItem } from '../models/todo_item';

export const mockTodoItems: TodoItem[] = [
  new TodoItem(1, 'Finish Too_Doo project', new Date('2024-09-07T10:00:00'), 'Complete all features and test the application.', ['work'], 5),
  new TodoItem(2, 'Buy groceries', new Date('2024-09-08T14:00:00'), 'Purchase milk, bread, eggs, and vegetables.', ['household'], 3),
  new TodoItem(3, 'Team meeting', new Date('2024-09-09T18:00:00'), 'Discuss project progress and next steps.', ['work'], 4),
  new TodoItem(4, 'Read a book', new Date('2024-09-10T09:00:00'), 'Read the new novel by a favorite author.', ['leisure'], 1),
  new TodoItem(5, 'Jog in the park', new Date('2024-09-11T16:00:00'), 'Morning jog in the fresh air.', ['health'], 2)
];

