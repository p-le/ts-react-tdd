import { IObserver } from './Observer';

export interface IObersavable {
    register(observer: IObserver): void;
    remove(observer: IObserver): void;
    notify(): void;
}
