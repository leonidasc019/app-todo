import { Component, OnInit } from '@angular/core';

//Interfaces
import { TaskList } from './../../pages/model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{
  public taskList: Array<TaskList> = [

  ];

  constructor() {}

  ngDoCheck(){
    this.taskList.sort((first, last)=> Number(first.checked) - Number(last.checked))
  }

  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1)
  }

  ngOnInit(): void {

  }

  public setEmitTaskList(event: string)
  {
    this.taskList.push({task: event, checked: false});
  }

  public deleteAllTaskList()
  {
    const confirm = window.confirm("Você deseja realmente Deletar tudo?");
    if(confirm){
      this.taskList = [];
    }
  }

}
