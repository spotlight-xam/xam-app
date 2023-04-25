const CTRL_C = "\u0003";

const debug = console.log;

/** An abstract key stroke interceptor. */
class KeyPressHandler {
  isInterceptingKeyStrokes = false;
  isHandlingKeyPress = false;

  /** Start observing interaction pause listeners. */
  createInteractionListener() {
    // Support observing prompts.
    let wasIntercepting = false;

    const listener = ({ pause }) => {
      if (pause) {
        // Track if we were already intercepting key strokes before pausing, so we can
        // resume after pausing.
        wasIntercepting = this.isInterceptingKeyStrokes;
        this.stopInterceptingKeyStrokes();
      } else if (wasIntercepting) {
        // Only start if we were previously intercepting.
        this.startInterceptingKeyStrokes();
      }
    };

    return listener;
  }

  handleKeypress = async (key) => {
    // Prevent sending another event until the previous event has finished.
    if (this.isHandlingKeyPress && key !== CTRL_C) {
      return;
    }
    this.isHandlingKeyPress = true;
    try {
      debug(`Key pressed: ${key}`);
      await this.onPress(key);
    } catch (error) {
      console.warn("error : " + JSON.stringify(error));
    } finally {
      this.isHandlingKeyPress = false;
    }
  };

  /** Start intercepting all key strokes and passing them to the input `onPress` method. */
  startInterceptingKeyStrokes() {
    if (this.isInterceptingKeyStrokes) {
      return;
    }
    this.isInterceptingKeyStrokes = true;
    const { stdin } = process;
    // TODO: This might be here because of an old Node version.
    if (!stdin.setRawMode) {
      console.warn(
        "Using a non-interactive terminal, keyboard commands are disabled."
      );
      return;
    }
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding("utf8");
    stdin.on("data", this.handleKeypress);
  }

  /** Stop intercepting all key strokes. */
  stopInterceptingKeyStrokes() {
    if (!this.isInterceptingKeyStrokes) {
      return;
    }
    this.isInterceptingKeyStrokes = false;
    const { stdin } = process;
    stdin.removeListener("data", this.handleKeypress);
    // TODO: This might be here because of an old Node version.
    if (!stdin.setRawMode) {
      console.warn(
        "Using a non-interactive terminal, keyboard commands are disabled."
      );
      return;
    }
    stdin.setRawMode(false);
    stdin.resume();
  }
}

module.exports = KeyPressHandler;
