// collection.

var listCollection = {
    list : [] ,
    addAll : function(data){
        for(var innerData in data){
            this.list.push(data[innerData]);
        }
        
    },
    deleteData : function(index){
        var data = this.list[index];
        this.list[index] = null;
        return data;
    },
    getData : function (){
        this.list = this.list.filter(number =>  number!=null ? true: false);
        console.log(this.list);
    }
}

listCollection.addAll([10,34,23,45,2,3]);
console.log(listCollection.getData());
listCollection.deleteData(4);
listCollection.deleteData(1);
console.log(listCollection.getData());
