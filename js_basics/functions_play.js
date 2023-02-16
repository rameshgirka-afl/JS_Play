// function declaration is associated to global context. 
// using before declaration is POSSIBLE and NOT for expression (no valuation of expression yet)
function func(arg1,arg2,arg3="0"){
    console.log('this : => '+ this)
    console.log('this : => '+ parseInt(arg3))
}

let func_expr = function (thisarg){ console.log("this in Func Expression: "+ this) }

let func_lambda = (thisarg) => console.log("this in arrows "+ this)





// calling module || Default parameter: Unassigned arguments are "undefined"|==> NaN operation| Un initialized variables. 
func("test","no_third_arg")

// passing args:: VAlUE TYPES: Pass by Value(primitives:: Data Types - stores data ): number, string, Boolean, null, undefined, BigInt, symbol 
// MEMORY:: Immutable || STACK MEMORY:: value is stored in itself (VALUE TYPE) = REASSIGNING does not remove the 
let a = 30 
let b = 100 
a = b  // re assignement. 
// now a and b both store 100 and 30 in still in memory of stack. 

// REFERNCE TYPES:  || HEAP MEMORY    arrays, functions, Dates, Objects || pass by References (Objects )
// only Reference : stores only memory address not value : RE-ASSIGNING
// fx:: ==> state update by using different references (passed by arguments as reference) will be affected. {MUTABLE}