// models/project.model.ts
export class Project {
    id: number = 0;
    title: string = '';
    isCompleted: boolean = false;

    constructor (id: number, title: string, isCompleted: boolean,) {
        this.id = id;
        this.title = title;
        this.isCompleted = isCompleted;
    }
}