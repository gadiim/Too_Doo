// export class TodoItem {
//     id: number = 0;
//     title: string = '';
//     dueDate: Date = new Date('YYYY-MM-DDTHH:mm:ss');
//     description: string = '';
//     tags: string[] = [];
//     priority: number = 0;
//     isCompleted: boolean = false
//     constructor(id: number,
//         title: string,
//         dueDate: Date,
//         description: string,
//         tags: string[],
//         priority: number,
//         isCompleted: boolean) {
//         this.id = id;
//         this.title = title;
//         this.dueDate = dueDate;
//         this.description = description;
//         this.tags = tags;
//         this.priority = priority;
//         this.isCompleted = isCompleted;
//     };
// };

export class TodoItem {
    constructor(
      public id: number,
      public title: string,
      public dueDate: Date,
      public description: string,
      public tags: string[],
      public priority: number,
      public isCompleted: boolean
    ) {}
  }