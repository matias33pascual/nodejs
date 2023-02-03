const os = require("os");

const user = os.userInfo();
const uptime = os.uptime();
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
};

console.log(user);
console.log(uptime);
console.log(currentOS);
