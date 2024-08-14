// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {

  let altitude = 0;
  let rocketPostX = 0;
  let rocketPostY = 0;

  //  BUTTONS
  const takeOffButton = document.getElementById("takeoff");
  const landButton = document.getElementById("landing");
  const AbortButton = document.getElementById("missionAbort");

  // AREAS
  const flightStatus = document.getElementById("flightStatus");
  const shuttleBackground = document.getElementById("shuttleBackground");
  const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

  // ROCKET IMAGE
  const rocket = document.getElementById("rocket");

  takeOffButton.addEventListener("click", function () {
    let confirmed = window.confirm(
      "Confirm that the shuttle is ready for takeoff."
    );

    if (confirmed) {
      flightStatus.innerHTML = "Shuttle in flight.";
      shuttleBackground.style.backgroundColor = "blue";
      altitude = 10000;
      spaceShuttleHeight.innerHTML = altitude;
    }
  });
  landButton.addEventListener("click", function () {
    alert("The shuttle is landing. Landing gear engaged.");

    if (landing) {
      flightStatus.innerHTML = "The shuttle has landed.";
      shuttleBackground.style.backgroundColor = "green";
      spaceShuttleHeight.innerHTML = "0";
    }
  });

  AbortButton.addEventListener("click", function() {
    alert("Confirm that you want to abort the mission.");

    if (missionAbort) {
      flightStatus.innerHTML = "Mission aborted.";
      shuttleBackground.style.backgroundColor = "green";
      spaceShuttleHeight.innerHTML = "0";
    }
  });

// Use event delegation for directional buttons
document.addEventListener("click", function(event) {

  if (event.target.id === "left") {
    rocketPostX -= 10;
    rocket.style.marginLeft = rocketPostX + "px";
  } 
  if (event.target.id === "right") {
    rocketPostX += 10;
    rocket.style.marginLeft = rocketPostX + "px";
  } 
  if (event.target.id === "up") {
    rocketPostY += 10;
    rocket.style.marginBottom = rocketPostY + "px";
    altitude += 10000;
    spaceShuttleHeight.innerHTML = altitude;
  } 
  if (event.target.id === "down") {
    rocketPostY -= 10;
    rocket.style.marginBottom = rocketPostY + "px";
    altitude -= 10000;
    spaceShuttleHeight.innerHTML = altitude;
  } 
});

});
