let arrayStates = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];

let getState = document.getElementById('input-state');

arrayStates.forEach(function(element,key){
    getState[key] =new Option(element, key);
});
    