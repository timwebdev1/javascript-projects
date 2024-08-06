function init() {
  const missionAbort = document.getElementById("abortMission");
  const button = document.getElementById("liftoffButton");
  const paragraph = document.getElementById("statusReport");

  // Put your code for the exercises here.
  button.addEventListener("click", function () {
    paragraph.innerHTML = "Houston, we have liftoff!";
  });

  missionAbort.addEventListener("mouseover", function (event) {
    const element = event.target;
    element.style.backgroundColor = "red";
  });

  missionAbort.addEventListener("mouseout", function (event) {
    event.target.style.backgroundColor = "";
  });

  missionAbort.addEventListener("click", function() {
    const confirmed = window.confirm("Are you sure you want to abort the mission?");
    if (confirmed) {
      paragraph.innerHTML = "Mission aborted! Space shuttle returning home";
    } else {
        paragraph.innerHTML = "Mission continues. Stay on course!";
    }
  });

};

window.addEventListener("load", init);
