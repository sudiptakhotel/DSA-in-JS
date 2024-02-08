//We will see how to implement dynamic array . In js by default our array is dynamic that means it can grow and shrink dynamically . 

class DynamicArray{

    constructor(size , capacity , arr){
        this.size = 0;
        this.capacity = 1;
        this.arr = [];
    }

    push(num){
        if(this.size === this.capacity){
            let newArr = new Array(2*this.capacity);

            //copy the element from old array to newly created newArr
            for(let i=0;i<this.capacity;i++){
                newArr[i] = this.arr[i];
            }
            //update the reference
            this.arr = newArr;

            this.capacity*=2;
           
            
        }
            //push the item
            this.arr[this.size] = num;
            //update the size and capacity
            this.size++;
    }
    pop(){
        if(this.size != 0){
            //just update the size.
            console.log(`Item popped ${this.arr[this.size-1]}`);
            this.size--;
        }
    }
    back(){
        if(this.size!=0){
            console.log(`Last element is ${this.arr[this.size-1]}`);
        }
    }
    length(){
        //size will always sit just after the last added element
        console.log(`Length of the array is ${this.size}`);
    }
    at(id){
        //given index should be in the range
        if(id>=0 && id<this.size){
            console.log(this.arr[id]);
        }else{
            console.log("not in range");
        }
   
    }
    print(){
        for(let i=0;i<this.size;i++){
            console.log(this.arr[i]);
        }
        // console.log(`size = ${this.size} , capacity = ${this.capacity}`);
    }
}

let dobj = new DynamicArray();
// dobj.push(10);
// dobj.print();
// dobj.push(20);
// dobj.print();
// dobj.push(30);
// dobj.print();
// dobj.push(40);
// dobj.print();
// dobj.push(50);
// dobj.print();
// dobj.push(60);
// dobj.print();
// dobj.push(70);
// dobj.print();
// dobj.push(80);
// dobj.print();
// dobj.push(90);
// dobj.print();
// dobj.push(100);
// dobj.print();
// dobj.push(110);
// dobj.print();
// dobj.push(120);
// dobj.print();


dobj.push(10);
dobj.push(20);
dobj.push(30);
dobj.push(40);
dobj.push(50);
dobj.push(60);
dobj.push(70);
dobj.push(80);

dobj.pop();
dobj.print();
dobj.length();
dobj.back();
dobj.at(6);