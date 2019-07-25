// using yargs command we can take input and add handler for same.
const yargs = require('yargs');


yargs.command({
    command : "add",
    describe : "add nodes",
    handler : function(){
        console.log("Adding a new node");
    }
});

yargs.command({
    command : "addlist",
    describe : "add list",
    handler(){
        console.log("add new in list");
    }
})

//console.log(yargs.argv);
