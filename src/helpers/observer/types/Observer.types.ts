interface IBaseEvent<T> {
  payload: T;
}
export type ObserverEvent<
  Payload extends Record<string | number | symbol, any>
> = IBaseEvent<Payload>;

export type ObserverCallback<
  Event extends ObserverEvent<any> = ObserverEvent<any>
> = (event: Event) => void;

export interface IObserver<
  Event extends ObserverEvent<any> = ObserverEvent<any>,
  ObserverKey extends string | number | symbol = symbol
> {
  get key(): ObserverKey;
  update(event: Event): void;
}
