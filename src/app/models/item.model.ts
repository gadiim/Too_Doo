// models/item.model.ts
export class TodoItem {
    id: number = 0;
    title: string = '';
    dueDate: Date = new Date('YYYY-MM-DDTHH:mm:ss');
    description: string = '';
    tag: string = '';
    priority: string = '';
    projectId?: number;
    // project: string = '';
    isCompleted: boolean = false;
    
    constructor(
        id: number,
        title: string,
        dueDate: Date,
        description: string,
        tag: string,
        priority: string,
        projectId: number,
        // project: string,
        isCompleted: boolean,
        ) {
        this.id = id;
        this.title = title;
        this.dueDate = dueDate;
        this.description = description;
        this.tag = tag;
        this.priority = priority;
        this.projectId = projectId;
        // this.project = project;
        this.isCompleted = isCompleted;     
    };
};
