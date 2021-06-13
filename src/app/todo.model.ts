export class Todo{
    id: number;
    description: string;
    isCompleted: boolean;

    constructor(id?: number, descr?: string, isCompleted?: boolean){
        this.id = id??1;
        this.description = descr??"";
        this.isCompleted = isCompleted??false;
    }
}