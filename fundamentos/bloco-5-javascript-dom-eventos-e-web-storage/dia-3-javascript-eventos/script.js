function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Exercício 1.

  let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let getDaysList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let dayItem = document.createElement('li');

    if (day === 24 | day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 4 | day === 11 | day === 18) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else {
      dayItem.innerHTML = day;
      dayItem.className = 'day';
      getDaysList.appendChild(dayItem);
    }
  };
};
createDaysOfTheMonth();

// Exercício 2.

  function holidays(buttonName){
    let getDiv = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');

    newButton.id = 'btn-holiday';
    newButton.innerHTML = buttonName;

    getDiv.appendChild(newButton);


  };
  holidays('Feriados');

  // Exercício 3.

  function holidaysClick(){

    let getNewButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday');
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'purple';

    getNewButton.addEventListener('click', function(){
      for (let index = 0; index < getHolidays.length; index += 1){
        if (getHolidays[index].style.backgroundColor === setNewColor){
          getHolidays[index].style.backgroundColor = backgroundColor;
        }
        else{
          getHolidays[index].style.backgroundColor = setNewColor;
        }
      }
    })
  };
  holidaysClick();

  // Exercício 4.

  function fridayButton(fridayBt){

    let getButtonContainer = document.querySelector('.buttons-container');
    let newButtonFriday = document.createElement('button');
    
    newButtonFriday.innerHTML = fridayBt;
    newButtonFriday.id = 'btn-friday';
    

    getButtonContainer.appendChild(newButtonFriday);
  };
  
  fridayButton('Sexta-feira');

  // Exercício 5.

  function newFridayText (array){

  let getFridayButton = document.querySelector('#btn-friday');
  let getFridays = document.querySelectorAll ('.friday');
  let newText = 'DIA DE MALDADE!'
  
  
  getFridayButton.addEventListener('click', function(){
    for(let index = 0; index < getFridays.length; index += 1){
      if(getFridays[index].innerHTML !== newText){
        getFridays[index].innerHTML = newText;
      }
      else{
        getFridays[index].innerHTML = array[index]
      }
    }
  })
};

let dezFridays = [4, 11, 18, 25];
newFridayText(dezFridays);

// Exercício 6.

function dayMouseOver() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '25px';
    event.target.style.fontWeight = '600';
  })
};

function dayMouseOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};

dayMouseOver();
dayMouseOut();

// Exercício 7.

function newTask (taskText){

  let getMyTasks = document.querySelector('.my-tasks');
  let studyTask = document.createElement ('span');
  studyTask.innerText = taskText;

  getMyTasks.appendChild(studyTask);
}
newTask ('ESTUDAR');

// Exercício 8.

function colorNewTask (color){

  let getMyTasks = document.querySelector('.my-tasks');

  let taskColor = document.createElement('div');
  taskColor.className = 'task';

  getMyTasks.appendChild(taskColor);

  taskColor.style.backgroundColor = color;

}
colorNewTask ('yellow');

// Exercício 9.

function newEvent(){


  let selectedTask = document.getElementsByClassName('task selected');
  let getTaskColor = document.querySelector('.task');

  getTaskColor.addEventListener ('click', function(event){
    if(selectedTask.length === 0){
      event.target.className = 'task selected';
    }
    else {
      event.target.className = 'task';
    }

  });
};

newEvent();

// Exercício 10.

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();