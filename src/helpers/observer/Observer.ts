import { IObserver, ObserverCallback, ObserverEvent } from "./types";

/**
 * @summary implementation of IObserver
 *
 * @param {string | number | symbol} key is the key of the observer, it must be unique
 * @param {ObserverCallback} callback is the update function of the observer
 */
export class Observer<
  Event extends ObserverEvent<any>,
  Key extends string | number | symbol = symbol
> implements IObserver<Event, Key>
{
  private readonly _key: Key;
  private callback: ObserverCallback<Event>;

  constructor(key: Key, callback: ObserverCallback<Event>) {
    this._key = key;
    this.callback = callback;
  }

  public get key(): Key {
    return this._key;
  }

  public update(event: Event): void {
    this.callback(event);
  }
}
