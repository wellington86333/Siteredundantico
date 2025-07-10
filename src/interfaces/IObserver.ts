// Observer Pattern Interface
export interface IObserver<T = any> {
  update(data: T): void;
}

export interface ISubject<T = any> {
  subscribe(observer: IObserver<T>): void;
  unsubscribe(observer: IObserver<T>): void;
  notify(data: T): void;
}