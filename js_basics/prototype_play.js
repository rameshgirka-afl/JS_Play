//use strict


// new F() constructer function 
let PlayObject = function (arg1,arg2){
    console.log(`constructer::args::${arg1},${arg2.literal}
    This Operator::Set to this: ${this.toString()}
    `)

    //adding constructer magic 
    this.constructer_literal = arg2.literal
    this.constructer_prop = arg2.prop2

    console.log(`After Construction: this => ${this} and object props: ${this.constructer_prop}`)


};

//TODO:: getters and setters for this Func Object 


// TODO:: 

// DEMO:: 1. Empty Object Creation 1.a. assign this to Empty Object
// 2. CONSTRUCTION is upto Developer 
// 3. 
let play_obj1 = new PlayObject("1",{literal:"literal1",prop2:"value2"})

// constructer func should return objects and its props ?? 
console.log("reading func object",play_obj1.constructer_literal)