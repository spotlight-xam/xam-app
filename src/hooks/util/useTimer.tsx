import {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  AppState,
  AppStateStatus,
  NativeEventSubscription,
} from "react-native";

interface TimerEventHandlers {
  onStart?: () => void;
  onStop?: () => void;
  onFinish?: () => void;
  onReset?: () => void;
}

export interface UseTimerOptions extends TimerEventHandlers {
  /**
   * @summary update interval based on milliseconds
   * @default 1000
   * @mutable only when timer is stopped
   */
  interval?: number;
  /**
   * @summary 컴포넌트가 마운트되면 자동으로 시작할지 여부
   * @default false
   * @mutable false
   */
  startOnMount?: boolean;

  /**
   * @summary 컴포넌트가 언마운트되면 자동으로 타이머를 종료할지 여부
   * @default true
   * @mutable false
   *
   * @todo 언마운트 후 다시 마운트되면 재개되는 기능 만들기
   */
  resetOnUnmount?: boolean;

  /**
   * @summary 타이머가 종료되면(onFinish) 시간을 초기화할지 여부
   * @default false
   */
  resetTimeOnFinish?: boolean;
}

/**
 * @param time time based on milliseconds
 */
export function useTimer(
  time: number,
  {
    onStart,
    onStop,
    onFinish,
    onReset,
    interval = 1000,
    startOnMount = false,
    resetOnUnmount = true,
    resetTimeOnFinish = false,
  }: UseTimerOptions = {}
) {
  const timer = useRef<NodeJS.Timeout | null>(null);
  const blurTime = useRef<number | null>(null);
  const [remainingTime, setRemainingTime] = useState(time);

  const nativeEventSubscriptionRef = useRef<NativeEventSubscription | null>(
    null
  );
  const ref = useRef<TimerEventHandlers>({
    onStart,
    onStop,
    onFinish,
    onReset,
  });

  useImperativeHandle(ref, () => ({ onStart, onStop, onFinish, onReset }), [
    onStart,
    onStop,
    onFinish,
    onReset,
  ]);

  const onAppStateChange = useCallback((currentAppState: AppStateStatus) => {
    if (currentAppState === "background") {
      blurTime.current = new Date().getTime();
    } else if (currentAppState === "active") {
      const inactiveTime =
        new Date().getTime() - (blurTime.current || new Date().getTime());
      setRemainingTime((prev) => prev - inactiveTime);
    }
  }, []);

  const addTimerEvent = useCallback(() => {
    if (timer.current) return;

    timer.current = setInterval(() => {
      setRemainingTime((prev) => {
        const current = prev - interval;

        if (current > 0) return current;

        clearTimerEvent();
        ref.current.onFinish?.();

        if (resetTimeOnFinish) {
          return time;
        } else {
          return 0;
        }
      });
    }, interval);

    nativeEventSubscriptionRef.current &&
      nativeEventSubscriptionRef.current.remove();
    nativeEventSubscriptionRef.current = AppState.addEventListener(
      "change",
      onAppStateChange
    );
  }, []);

  const clearTimerEvent = useCallback(() => {
    nativeEventSubscriptionRef.current?.remove();

    timer.current && clearInterval(timer.current);
    timer.current = null;
  }, []);

  const start = useCallback(() => {
    addTimerEvent();
    ref.current.onStart?.();
  }, []);

  const stop = useCallback(() => {
    clearTimerEvent();
    ref.current.onStop?.();
  }, []);

  const reset = useCallback(() => {
    stop();
    setRemainingTime(time);
    ref.current.onReset?.();
  }, []);

  useEffect(() => {
    if (startOnMount) start();
  }, []);

  useEffect(() => {
    return () => {
      if (resetOnUnmount) reset();
    };
  }, []);

  return { remainingTime, start, stop, reset };
}
