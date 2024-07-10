import { spawn } from "child_process";

const ls = spawn("mkdir", ["sim"]);

ls.stdout.on("data", (data) => {
  console.log(`${data}`);
});
