import { Component } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './task.model';
import { fateSlideAnimation } from '../../shared/animations/fadeSlide.animation';
import { FeatureNotImplementedError } from '../../core/error';
import { BehaviorSubject, map, Observable, of, tap } from 'rxjs';
import { StoreService } from '../../core/store/store.service';
import { TimeService } from '../../core/time/time.service';

@Component({
  selector: 'tasks-component',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
  animations: [fateSlideAnimation()],
})
export class TasksComponent {
  private _tasks = new BehaviorSubject<
    { title: string; created: Date; time: Observable<Date> }[]
  >([]);

  constructor(
    private _service: TaskService,
    private _store: StoreService,
    private _time: TimeService
  ) {}

  get tasks() {
    return this._tasks.asObservable();
  }

  get time() {
    return this._time.now;
  }

  get difference() {
    return this.tasks.pipe(
      tap((data) => console.log('1.', data)),
      map((tasks) => tasks.map((task) => task.created)),
      tap((data) => console.log('2.', data)),
      map((dates) => dates.map((date) => date.getTime())),
      tap((data) => console.log('3.', data)),
      map((times) => times.map((time) => time - new Date().getTime())),
      tap((data) => console.log('4.', data))
    );
  }

  get isEmpty(): Observable<boolean> {
    return this.tasks.pipe(map((data) => data.length <= 0));
  }

  handleSubmit(title: string) {
    const created = new Date();

    const newTask = {
      title,
      created,
      time: this._time.now.pipe(
        map((time) => time.getTime() - created.getTime() + 1000),
        map((time) => new Date(time))
      ),
    };

    this._tasks.value.push(newTask);

    this._service.addTask(newTask);
  }

  clear() {
    this._tasks.next([]);
  }

  remove(task: any) {
    const current = this._tasks.value;

    const index = current.indexOf(task);
    if (index > -1) {
      // only splice array when item is found
      current.splice(index, 1); // 2nd parameter means remove one item only
    }
  }
}
