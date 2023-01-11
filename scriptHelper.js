function addDestinationInfo(document,name,diameter,star,distance,moons,imageUrl) {
  let missionTargetTxt = document.getElementById("missionTarget");
  missionTargetTxt.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
                `
}

/*
    default a string, named output
    test input(s) as a string value; based on string characters, produce proper categorization
    if input is neither number or contains characters, default as empty
*/
function validateInput(testInput) {
  let output = "Empty";
  if (/[a-zA-Z]/.test(testInput)) return (output = "Not a number");
  if (/[0-9]/.test(testInput)) return (output = "Is a number");
  else return output;
}

/*
    evaluates validateInput(pilot) through validateInput(cargoLevel)
    if any of the inputs are invalide, return proper alert
    else return true if all inputs are valid
*/
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let inputs = [pilot, copilot, fuelLevel, cargoLevel];

  for (let i = 0; i < inputs.length; i++) {
    if (validateInput(inputs[i]) === "Empty") return window.alert("All fields require user input, enter valid data");
 else if (
      validateInput(inputs[0]) === "Is a number" || validateInput(inputs[1]) === "Is a number") return window.alert("Pilot and/or copilot cannot be numbers, enter valid data");
  }
  return true;
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  let randomPlanet = Math.floor(Math.random() * planets.length);
  return planets[randomPlanet];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
