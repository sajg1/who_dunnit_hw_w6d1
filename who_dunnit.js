// 1. "The murderer is Miss Scarlet" will be the output. "Miss Scarlet" is the value of the key, murderer, in the object, scenario, which is a const. This is passed into the string interpolation in declareMurderer which is a function

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);


//  2. The changeMurderer function should error as the variable name, murderer, is a constant with the value "Professor Plum". The console.log will give "The murderer is Professor Plum" as declareMurderer will take the value of murderer from the constant.

const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// //  3. The firstVerdict will be Mrs Peacock as the block scope of let murderer = "Mrs. Peacock" will apply to the string interpolation used within the function declareMurderer, which is called by firstVerdict.
//
// //      - The secondVerdict will be for Professor Plum as this is the only value assigned to murderer in the scope of the whole file. Mrs Peacock as murderer does not exist outside of the declareMurderer constant.

let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// //  4. console.log(suspects); will replace Mrs.Peacock with Colonel Mustard as suspectThree is reassigned with let in the scope of the function.
// //    - console.log('Suspect three is ${suspect Three}') will return Mrs. Peacock as this value has been defined in the broader scope of the file. Colonel Mustard does not exist ouutside the block {}.

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);


// //  5. The weapon declared would be the revolver. Even though the constant scenario has been set, the values of its keys can still be changed. The changeWeapon function assigns a new weapon to the key weapon:, and the function declareWeapon prints out the string with the new weapon.

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

//
// //  6.  console.log(verdict) should return The murderer is Mrs White. The plotTwist function is contained within change Murderer and is the last function called.

let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// 7. I think we'll see an error as the plotTwist const cannot assign Colonel Mustard to murderer after unexpectedOutcome has assigned it to Miss Scarlet.

let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
     let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// 8. Because the values inside the object, scenario, can still be assigned in a const I think the weapon would be the candlestick as the dining room and colonel mustard would pass the if statements. Im not quite sure about how the order of unexpectedOutcome and plotTwist affect this though.

const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

//  9. I think as Mrs. Peacock is only assigned to murderer inside the if block, the murderer in declareMurderer would be Professor Plum.

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
