// models/todoItem.ts
export class TodoItem {
    id: number = 0;
    title: string = '';
    dueDate: Date = new Date('YYYY-MM-DDTHH:mm:ss');
    description: string = '';
    tags: string[] = [];
    priority: string = '';
    projectId?: number;
    isCompleted: boolean = false;
    
    constructor(id: number,
        title: string,
        dueDate: Date,
        description: string,
        tags: string[],
        priority: string,
        projectId: number,
        isCompleted: boolean,
        ) {
        this.id = id;
        this.title = title;
        this.dueDate = dueDate;
        this.description = description;
        this.tags = tags;
        this.priority = priority;
        this.projectId = projectId;
        this.isCompleted = isCompleted;
        
    };
};
