import { IObserver, ISubject, ObserverEvent } from "./types";

/**
 * @summary implementation of ISubject
 */
export class Subject<
  Event extends ObserverEvent<any> = ObserverEvent<any>,
  SubjectKey extends string | number | symbol = symbol,
  ObserverKey extends string | number | symbol = symbol
> implements ISubject<Event, SubjectKey, ObserverKey>
{
  private observers: Map<ObserverKey, IObserver<Event, ObserverKey>> =
    new Map();
  private readonly _key: SubjectKey;

  constructor(key: SubjectKey) {
    this._key = key;
  }

  public get key(): SubjectKey {
    return this._key;
  }

  public get observerKeys(): IterableIterator<ObserverKey> {
    return this.observers.keys();
  }

  public get observerCount(): number {
    return this.observers.size;
  }

  public registerObserver(
    observer: IObserver<Event, ObserverKey>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ...args: any[]
  ): void {
    // console.log(`[Subject ${this.key}/registerObserver]`, observer);
    this.observers.set(observer.key, observer);
  }

  public removeObserver(
    observerKey: ObserverKey,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ...args: any[]
  ): void {
    this.observers.delete(observerKey);
  }

  public notifyObserver(key: ObserverKey, event: Event): void {
    const observer = this.observers.get(key);
    if (!observer) {
      throw new Error(`Observer with key ${key.toString()} not found`);
    }

    observer.update(event);
  }

  public notifyAllObservers(event: Event): void {
    this.observers.forEach((observer) => observer.update(event));
  }
}
