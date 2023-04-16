import { ObserverEvent, IObserver } from "./Observer.types";

/**
 * @summary Subject interface for observer pattern
 * @description Can be Observed by Observer
 */
export interface ISubject<
  Event extends ObserverEvent<any> = ObserverEvent<any>,
  SubjectKey extends string | number | symbol = symbol,
  ObserverKey extends string | number | symbol = symbol
> {
  get key(): SubjectKey;
  get observerKeys(): IterableIterator<ObserverKey>;
  get observerCount(): number;
  registerObserver(
    observer: IObserver<Event, ObserverKey>,
    ...args: any[]
  ): void;
  removeObserver(observerKey: ObserverKey, ...args: any[]): void;

  /**
   * notify is subject's method
   * it cannot be called by outside of the instance who has subject
   */
  // notifyObserver(key: ObserverKey, event: ObserverEvent<Payload>): void;
  // notifyAllObservers(event: ObserverEvent<Payload>): void;
}
