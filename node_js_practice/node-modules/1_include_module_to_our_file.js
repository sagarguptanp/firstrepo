
// including predefined modules
const fs = require('fs');

fs.writeFileSync("./demoFile.txt","This file is created by NodeJs!!!");

fs.appendFileSync("demoFile.txt",`
This data is appending.`);
