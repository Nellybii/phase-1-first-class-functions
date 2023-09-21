function receivesAFunction(callback){
   callback();
}
receivesAFunction(function(){
    return "It recives a function"
});

function returnsANamedFunction(namedFunction){
    return (function namedFunction(){
        return "returns a function"
})
}
returnsANamedFunction();

function returnsAnAnonymousFunction(){
    return (function (){
        return "returns an anoonymous function"
    })
}
returnsAnAnonymousFunction();
