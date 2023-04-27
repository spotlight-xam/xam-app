export class KeyPressHandler {
  private isInterceptingKeyStrokes = false;
  private isHandlingKeyPress = false;

  constructor(public onPress: (key: string) => Promise<any>) {}

  createInteractionListener() {
    let wasIntercepting = false;

    const listener = ({ pause }: { pause: boolean }) => {
      if (pause) {
        wasIntercepting = this.isInterceptingKeyStrokes;
        this.stopInterceptingKeyStrokes();
      } else if (wasIntercepting) {
        this.startInterceptingKeyStrokes();
      }
    };

    return listener;
  }

  private handleKeypress = async (key: string) => {
    if (this.isHandlingKeyPress) return;

    this.isHandlingKeyPress = true;
    try {
      await this.onPress(key);
    } catch (error: any) {
      console.error(JSON.stringify(error));
    } finally {
      this.isHandlingKeyPress = false;
    }
  };

  startInterceptingKeyStrokes() {
    if (this.isInterceptingKeyStrokes) {
      return;
    }
    this.isInterceptingKeyStrokes = true;
    const { stdin } = process;
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding("utf8");
    stdin.on("data", this.handleKeypress);
  }

  stopInterceptingKeyStrokes() {
    if (!this.isInterceptingKeyStrokes) {
      return;
    }
    this.isInterceptingKeyStrokes = false;
    const { stdin } = process;
    stdin.removeListener("data", this.handleKeypress);
    stdin.setRawMode(false);
    stdin.resume();
  }
}
