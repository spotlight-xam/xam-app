import { IObserver, ObserverEvent } from "./Observer.types";
import { ISubject } from "./Subject.types";

export interface ISubjectManager<
  Event extends ObserverEvent<any> = ObserverEvent<any>,
  ManagerKey extends string | number | symbol = symbol,
  SubjectKey extends string | number | symbol = symbol,
  ObserverKey extends string | number | symbol = symbol,
  CustomSubject extends ISubject<Event, SubjectKey, ObserverKey> = ISubject<
    Event,
    SubjectKey,
    ObserverKey
  >
> extends ISubject<Event, ManagerKey, ObserverKey> {
  get subjectKeys(): IterableIterator<SubjectKey>;
  get subjectCount(): number;

  createSubject(subjectKey: SubjectKey, ...args: any[]): CustomSubject;

  /**
   * @returns undefined if subject is not in the manager
   */
  getSubject(subjectKey: SubjectKey): CustomSubject | undefined;

  registerSubject(subjectKey: SubjectKey, ...args: any[]): void;

  removeSubject(subjectKey: SubjectKey, ...args: any[]): void;

  registerObserver(
    observer: IObserver<Event, ObserverKey>,
    subjectKey: SubjectKey,
    ...args: any[]
  ): void;

  removeObserver(observerKey: ObserverKey, ...args: any[]): void;
}
