import {persons} from './data.js';


export function randomNumber(maxLength) {
  return (Math.floor(Math.random() * maxLength));
}

function randomPersons() {
  var x = randomNumber(persons.length);
  return (persons[x]);
}


export function selectedPersons() {

  var random_names = [];
  var i = 0;

    while(true) {
      var random_name = randomPersons();

      if(!(random_names.includes(random_name))) {
        random_names[i] = random_name;

        i++;
      }

      if (i > 3) {
        break;
      }
    }
    return (random_names);
}





