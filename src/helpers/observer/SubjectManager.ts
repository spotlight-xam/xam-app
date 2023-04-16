import { Subject } from "./Subject";
import { IObserver, ISubject, ISubjectManager, ObserverEvent } from "./types";

// type SubjectFactory<SubjectKey extends Keyable, CustomSubject> = (
//   key: SubjectKey,
//   ...args: any[]
// ) => CustomSubject;

export abstract class SubjectManager<
  Event extends ObserverEvent<any> = ObserverEvent<any>,
  ManagerKey extends string | number | symbol = symbol,
  SubjectKey extends string | number | symbol = symbol,
  ObserverKey extends string | number | symbol = symbol,
  CustomSubject extends ISubject<Event, SubjectKey, ObserverKey> = Subject<
    Event,
    SubjectKey,
    ObserverKey
  >
> implements
    ISubjectManager<Event, ManagerKey, SubjectKey, ObserverKey, CustomSubject>
{
  protected subjects: Map<SubjectKey, CustomSubject> = new Map();
  protected observerKeyToSubjectKey: Map<ObserverKey, SubjectKey> = new Map();

  private readonly _key: ManagerKey;

  constructor(key: ManagerKey) {
    this._key = key;
  }

  public get key(): ManagerKey {
    return this._key;
  }

  public get subjectKeys(): IterableIterator<SubjectKey> {
    return this.subjects.keys();
  }

  public get subjectCount(): number {
    return this.subjects.size;
  }

  public get observerKeys(): IterableIterator<ObserverKey> {
    return this.observerKeyToSubjectKey.keys();
  }

  public get observerCount(): number {
    return this.observerKeyToSubjectKey.size;
  }

  abstract createSubject(subjectKey: SubjectKey, ...args: any[]): CustomSubject;

  protected getSubjectInternal(
    subjectKey: SubjectKey
  ): CustomSubject | undefined {
    return this.subjects.get(subjectKey);
  }

  public getSubject(subjectKey: SubjectKey): CustomSubject | undefined {
    return this.getSubjectInternal(subjectKey);
  }

  public getSubjectByObserver(
    observerKey: ObserverKey
  ): CustomSubject | undefined {
    const subjectKey = this.observerKeyToSubjectKey.get(observerKey);

    if (subjectKey) {
      return this.getSubjectInternal(subjectKey);
    }

    return undefined;
  }

  /**
   * if subject does not exist, create & register it
   */
  public registerSubject(subjectKey: SubjectKey): CustomSubject {
    let subject = this.getSubjectInternal(subjectKey);

    if (subject !== undefined) {
      return subject;
    }

    subject = this.createSubject(subjectKey);
    this.subjects.set(subjectKey, subject);

    return subject;
  }

  public removeSubject(subjectKey: SubjectKey): void {
    const subject = this.getSubjectInternal(subjectKey);

    if (subject === undefined) {
      return;
    }

    for (const objectKey of subject.observerKeys) {
      this.removeObserver(objectKey);
      this.observerKeyToSubjectKey.delete(objectKey);
    }

    this.subjects.delete(subject.key);
  }

  public registerObserver(
    observer: IObserver<Event, ObserverKey>,
    subjectKey: SubjectKey,
    ...registerObserverArgs: any[]
  ): void {
    this.observerKeyToSubjectKey.set(observer.key, subjectKey);

    let subject = this.getSubjectInternal(subjectKey);
    if (subject === undefined) {
      // create new subject
      subject = this.registerSubject(subjectKey);
    }

    subject.registerObserver(observer, ...registerObserverArgs);
  }

  public removeObserver(
    observerKey: ObserverKey,
    ...removeObserverArgs: any[]
  ): void {
    const subject = this.getSubjectByObserver(observerKey);

    if (subject) {
      subject.removeObserver(observerKey, ...removeObserverArgs);
    }
  }
}
