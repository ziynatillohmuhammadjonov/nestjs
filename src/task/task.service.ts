import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create.task.dto';
import { UpdateTaskDto } from './dto/update.task.dto';

@Injectable()
export class TaskService {
  private tasks = [
    {
      id: 1,
      title: 'Learn Nestjs',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Build API',
      isCompleted: false,
    },
  ];

  findAll() {
    return this.tasks;
  }

  findById(id: string) {
    const task = this.tasks.find((item) => item.id === Number(id));
    if (!task) {
      throw new NotFoundException('Bunday idlik task topilmadi.');
    }
    return task;
  }

  create(dto: CreateTaskDto) {
    const { title } = dto;
    const newTask = {
      id: this.tasks.length + 1,
      title: title,
      isCompleted: true,
    };
    this.tasks.push(newTask);
    return this.tasks;
  }

  update(id: string, dto: UpdateTaskDto) {
    const { isCompleted, title } = dto;

    const task = this.findById(id);

    task.isCompleted = isCompleted;
    task.title = title;

    return task;
  }

  patchTask(id: string, dto: Partial<UpdateTaskDto>) {
    const task = this.findById(id);
    Object.assign(task, dto);
    return task;
  }

  deleteTask(id: string) {
    const task = this.findById(id);
    this.tasks = this.tasks.filter((task) => task.id !== Number(id));

    return task;
  }
}
