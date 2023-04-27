import chalk from "chalk";

const BLT = "›";

export function printItem(text: string) {
  return console.log(`${BLT} ` + text.trimStart());
}

export function logCommandsTable(
  ui: (
    | false
    | { key?: string; msg?: string; status?: string; disabled?: boolean }
  )[]
) {
  console.log(
    ui
      .filter(Boolean)
      // @ts-ignore: filter doesn't work
      .map(({ key, msg, status, disabled }) => {
        if (!key) return "";
        let view = `${BLT} `;
        if (key.length === 1) view += "Press ";
        view += chalk`{bold ${key}} {dim │} `;
        view += msg;
        if (status) {
          view += ` ${chalk.dim(`(${chalk.italic(status)})`)}`;
        }
        if (disabled) {
          view = chalk.dim(view);
        }
        return view;
      })
      .join("\n")
  );
}

export function printUsage() {
  logCommandsTable([
    {},
    { key: "s", msg: "start Record" },
    { key: "p", msg: "pause Record" },
    {},
    { key: "c", msg: "cancel Record" },
    { key: "g", msg: "generate Test" },
    {},
  ]);
}
