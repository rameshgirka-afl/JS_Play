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