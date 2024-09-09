// services/mock/mock-todoItems.ts
import { TodoItem } from '../../models/todoItem';

export const mockTodoItems: TodoItem[] = [
  new TodoItem(
    1, 
    'Finish Too_Doo project',
    new Date('2024-09-07T10:00:00'), 
    'Complete all features and test the application.', 
    ['work'],       
    'Critical',
    0, 
    false
  ),
  new TodoItem(
    2, 
    'Buy groceries',          
    new Date('2024-09-08T14:30:00'), 
    'Purchase milk, bread, eggs, and vegetables.',     
    ['household'],  
    'Medium', 
    0,
    false
  ),
  new TodoItem(
    3, 
    'Team meeting',           
    new Date('2024-09-09T18:00:00'), 
    'Discuss project progress and next steps.',        
    ['work'],       
    'High', 
    0,
    false
  ),
  new TodoItem(
    4, 'Read a book',            
    new Date('2024-09-10T09:45:00'), 
    'Read the new novel by a favorite author.',        
    ['leisure'],    
    'Very Low', 
    0,
    false
  ),
  new TodoItem(
    5, 
    'Jog in the park',        
    new Date('2024-09-11T16:00:00'), 
    'Morning jog in the fresh air.',                   
    ['health', 'leisure'],     
    'Low', 
    0,
    false
  )
];
