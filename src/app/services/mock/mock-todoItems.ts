// services/mock/mock-todoItems.ts
import { TodoItem } from '../../models/item.model';

export const mockTodoItems: TodoItem[] = [

  // Tasks for the current week
  new TodoItem(
    6,
    'Prepare presentation',
    new Date('2024-09-12T10:00:00'),
    'Create slides for the upcoming meeting.',
    'work',
    'high',
    0,
    false
  ),
  new TodoItem(
    7,
    'Visit doctor',
    new Date('2024-09-13T15:00:00'),
    'Routine check-up at the clinic.',
    'health',
    'medium',
    0,
    false
  ),
  new TodoItem(
    8,
    'Grocery shopping for the week',
    new Date('2024-09-14T12:00:00'),
    'Restock the kitchen with essentials.',
    'household',
    'medium',
    0,
    false
  ),
  new TodoItem(
    9,
    'Family movie night',
    new Date('2024-09-15T19:00:00'),
    'Enjoy a movie with the family.',
    'leisure',
    'low',
    0,
    false
  ),
  // Tasks for the next week
  new TodoItem(
    11,
    'Plan weekend trip',
    new Date('2024-09-17T10:00:00'),
    'Research and book accommodations.',
    'leisure',
    'high',
    0,
    false
  ),
  new TodoItem(
    12,
    'Submit project report',
    new Date('2024-09-18T17:00:00'),
    'Final review and submission of the report.',
    'work',
    'critical',
    0,
    false
  ),
  new TodoItem(
    13,
    'Attend workshop',
    new Date('2024-09-19T14:00:00'),
    'Participate in the skills development workshop.',
    'work',
    'medium',
    0,
    false
  ),
  new TodoItem(
    14,
    'Cook dinner for friends',
    new Date('2024-09-20T18:00:00'),
    'Prepare a special meal for friends visiting.',
    'household',
    'low',
    0,
    false
  ),
  new TodoItem(
    15,
    'Finish reading the book',
    new Date('2024-09-21T20:00:00'),
    'Complete the novel by the end of the week.',
    'leisure',
    'very low',
    0,
    false
  ),
  // Additional tasks for the following week
  new TodoItem(
    16,
    'Start new online course',
    new Date('2024-09-22T09:00:00'),
    'Begin learning about advanced Angular.',
    'work',
    'high',
    0,
    false
  ),
  new TodoItem(
    17,
    'Plan family outing',
    new Date('2024-09-23T11:00:00'),
    'Organize a fun day out with the family.',
    'leisure',
    'medium',
    0,
    false
  ),
  new TodoItem(
    18,
    'Complete home improvement project',
    new Date('2024-09-24T14:00:00'),
    'Finish painting the living room.',
    'household',
    'high',
    0,
    false
  ),
  new TodoItem(
    19,
    'Attend a networking event',
    new Date('2024-09-25T18:00:00'),
    'Connect with industry professionals.',
    'work',
    'medium',
    0,
    false
  ),
  new TodoItem(
    20,
    'Take a day trip',
    new Date('2024-09-26T07:30:00'),
    'Explore a nearby city or nature area.',
    'leisure',
    'low',
    0,
    false
  )
];
