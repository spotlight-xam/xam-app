const CTRL_C = "\u0003";
const CTRL_L = "\u000C";

module.exports = onPressAsync = async (key) => {
  switch (key) {
    case CTRL_C: {
      try {
        process.exit();
      } catch (error) {
        throw error;
      }
      break;
    }
    case CTRL_L:
      return console.clear();
  }

  switch (key) {
    case "s":
      return console.log("start");
    case "e":
      return console.log("end");
    case "g":
      return console.log("generate");
  }
};
