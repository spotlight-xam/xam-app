import React, { Dispatch, forwardRef, LegacyRef, useMemo } from "react";
import {
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps as RNTouchableWithoutFeedbackProps,
  TouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
  TouchableHighlight,
  TouchableHighlightProps as RNTouchableHighlightProps,
  View,
} from "react-native";

import { useLiftedState } from "@hooks/util";

export const TouchableTypeUnionList = [
  "withoutFeedback",
  "opacity",
  "highlight",
] as const;

export type TouchableTypeUnion = (typeof TouchableTypeUnionList)[number];

interface BaseTouchableProps extends RNTouchableWithoutFeedbackProps {
  /**
   * @default 'withoutFeedback'
   */
  type?: TouchableTypeUnion;
  pressed?: boolean;
  setPressed?: Dispatch<boolean>;
}

interface BaseInternalTouchableWithoutFeedbackProps extends BaseTouchableProps {
  ref?: LegacyRef<TouchableWithoutFeedback>;
}

type InternalTouchableWithoutFeedbackProps = {
  type?: "withoutFeedback";
} & BaseInternalTouchableWithoutFeedbackProps;

interface BaseInternalTouchableOpacityProps
  extends BaseTouchableProps,
    RNTouchableOpacityProps {
  ref?: LegacyRef<TouchableOpacity>;
}

type InternalTouchableOpacityProps = {
  type: "opacity";
} & BaseInternalTouchableOpacityProps;

interface BaseInternalTouchableHighlightProps
  extends BaseTouchableProps,
    RNTouchableHighlightProps {
  ref?: LegacyRef<TouchableHighlight>;
}

type InternalTouchableHighlightProps = {
  type: "highlight";
} & BaseInternalTouchableHighlightProps;

export type TouchableProps =
  | InternalTouchableOpacityProps
  | InternalTouchableHighlightProps
  | InternalTouchableWithoutFeedbackProps;

const Touchable = forwardRef<
  TouchableOpacity | TouchableHighlight | TouchableWithoutFeedback,
  TouchableProps
>(
  (
    {
      type,
      style,
      children,
      pressed: liftedPressed,
      setPressed: setLiftedPressed,
      onPressIn,
      onPressOut,
      ...props
    },
    ref
  ) => {
    const [, setPressed] = useLiftedState(
      liftedPressed ?? false,
      liftedPressed,
      setLiftedPressed
    );

    const [TouchableComponent, specifiedProps, childElement] = useMemo(() => {
      switch (type) {
        case "opacity":
          return [
            TouchableOpacity,
            {
              style,
              activeOpacity:
                (props as InternalTouchableOpacityProps).activeOpacity ?? 0.6,
            },
            children,
          ];
        case "highlight":
          return [
            TouchableHighlight as typeof TouchableOpacity,
            { style },
            children,
          ];
        default:
          return [
            TouchableWithoutFeedback,
            {},
            <View collapsable={false} style={style}>
              {children}
            </View>,
          ];
      }
    }, [type, style, props, children]);

    return (
      <TouchableComponent
        {...props}
        {...specifiedProps}
        onPressIn={(event) => {
          onPressIn && onPressIn(event);
          setPressed(true);
        }}
        onPressOut={(event) => {
          onPressOut && onPressOut(event);
          setPressed(false);
        }}
        ref={ref}
      >
        {childElement}
      </TouchableComponent>
    );
  }
);

Touchable.displayName = "Touchable";

export default Touchable;
