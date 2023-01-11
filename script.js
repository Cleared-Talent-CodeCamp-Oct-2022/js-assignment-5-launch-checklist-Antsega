
window.addEventListener("load", function () {
    // Planetary Data
    fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response){
    // Access the JSON in the response
    response.json().then( function(jsonArr){
        let randomPlanet = pickPlanet(jsonArr)
        addDestinationInfo(document,
            randomPlanet.name,
            randomPlanet.diameter,
            randomPlanet.star,
            randomPlanet.distance,
            randomPlanet.moons,
            randomPlanet.image)
    })
})

    // Form Submission
  let form = document.getElementById("launchForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevents refresh upon submit




    // selectors
    let list = document.getElementById("faultyItems");
    let pilotName = document.getElementById("pilotName");
    let copilotName = document.getElementById("copilotName");
    let fuelLevel = document.getElementById("fuelLevel");
    let cargoMass = document.getElementById("cargoMass");

    // doing .value evaluates the variable as a string
    if (formSubmission(document,list,pilotName.value,copilotName.value,fuelLevel.value,cargoMass.value)) {
      list.style.visibility = "visible";

      // selector(s)
      const header = document.getElementById("launchStatus");
      const pilotStatus = document.getElementById("pilotStatus");
      const copilotStatus = document.getElementById("copilotStatus");
      const fuelStatus = document.getElementById("fuelStatus");
      const cargoStaus = document.getElementById("cargoStatus");

      // Default name output
      pilotStatus.innerHTML = `${pilotName.value} Is Ready For Launch`;
      copilotStatus.innerHTML = `${copilotName.value} Is Ready For Launch`;

      // Test Case(s)

      // Fuel Level Evaluation
      fuelLevel = Number(fuelLevel.value);
      if (fuelLevel < 10000) {
        fuelStatus.innerHTML = `Fuel Level Too Low For Launch`;
      } else if (fuelLevel > 10000) {
        fuelStatus.innerHTML = `Fuel level high enough for launch`;
      }

      // Cargo Weight Evaluation
      cargoMass = Number(cargoMass.value);
      if (cargoMass > 10000) {
        cargoStaus.innerHTML = `There Is Too Much Mass For The Shuttle To Take Off`;
      } else if (cargoMass < 10000) {
        cargoStaus.innerHTML = `Cargo mass low enough for launch`;
      }

      // Header innerHTML reassign
      if (fuelLevel < 10000 || cargoMass > 10000) {
        header.style.color = `red`;
        header.innerHTML = `Shuttle Not Ready For Launch`;
      } else {
        header.style.color = `green`;
        header.innerHTML = `Shuttle Is Ready For Launch`;
      }
    }
  });
});

// Assignment https://education.launchcode.org/intro-to-professional-web-dev/assignments/launch-checklist.html
// Your repo https://github.com/Cleared-Talent-CodeCamp-Oct-2022/js-assignment-5-launch-checklist-Antsega
