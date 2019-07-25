// we can also declare a function by directly name and number of parameter but inside the object and classes only.


/*add(a,b){
    console.log(a+b);
}*/ // it gives error

var collection = {
    list : [],
    add(data){
        this.list.push(data);
    },
    get(index){
        return this.list[index];
    },
    toString : function(){
        console.log("List Data");
        for(var data in this.list){
            console.log(this.list[data]);
        }
    }

}

collection.add(10);
collection.add(20);
collection.add(30);
collection.add(40);
console.log(collection.get(2));
console.log(collection.get(3));
collection.toString();



// we can use the above function declaration by another way in which name is present in contant variable and we can change
// its name any time

const addFunction = "add",getFunction = "get";

var collection = {
    list : [],
    [addFunction](data){
        this.list.push(data);
    },
    [getFunction](index){
        return this.list[index];
    },
    toString : function(){
        console.log("List Data");
        for(var data in this.list){
            console.log(this.list[data]);
        }
    }
}

collection[addFunction](10);
collection[addFunction](20);
console.log(collection[getFunction](2));