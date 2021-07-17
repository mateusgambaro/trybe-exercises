let arrayStates = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];

let getState = document.getElementById('input-state');

arrayStates.forEach(function(element,key){
    getState[key] = new Option(element, key);
});

let getDate = document.querySelectorAll('#input-data');

function validDate(getDate){
    if(getDate.value.length === 0){
      return {
        message: 'A data não foi preenchida!'
      }
    }
  
    let regex = /^\d\d\/\d\d\/\d\d\d\d$/;
    
    if(!regex.test(getDate.value)){
      return {
        message: 'Data: Formato inválido'
      };
    }
  
    let splitted = getDate.value.split('/');
    let day = splitted[0];
    let month = splitted[1];
    let year = splitted[2];
  
    if(day < 0 || day > 30){
      return {
        message: 'Dia inválido'
      };
    }
  
    if(month < 0 || month > 12){
      return {
        message: 'Mês inválido'
      }
    }
  
    if(year < 0) {
      return {
        message: 'Ano inválido'
      };
    }
  
    return true;
  }

  function selectedOption(select){
    return select.options[select.selectedIndex]
  }

  let name = document.getElementById['input-name'];

  function selectValidation(select, name){
    let option = selectedOption(select);
    let validation = name;

    if(validation.required && (!option || option.disabled)){
      return false;
    }
    return true;
  }





    

