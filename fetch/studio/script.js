//TODO: Add Your Code Below
window.addEventListener("load", function () {
  // TODO; create object for container element
  const container = document.getElementById("container");

  // Fetch using traditional syntax
  fetch(
    "https://handlers.education.launchcode.org/static/astronauts.json"
  ).then(function (response) {
    response.json().then(function (data) {
      console.log(data);

      // Bonus mission 1
      data.sort(function (a, b) {
        return a.hoursInSpace < b.hoursInSpace ? 1 : -1;
      });

      // Bonus mission 3
      const count = document.getElementById('count');
      count.innerHTML = `These ${data.length} people have ventured into outer space.`

      for (let i = 0; 0 < data.length; i++) {
        let astronaut = data[i];

        // Bonus mission 2
        let activeClass = astronaut.active ? "active" : "";


        container.innerHTML += `
          <div class = "astronaut">
            <div class = "bio">
              <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
              <ul>
              <li>Hours in space: ${astronaut.hoursInSpace}</li>
              <li class = ${activeClass}>Active: ${astronaut.active}</li>
              <li>Skills: ${astronaut.skills.join(", ")}</li>
              </ul>
            </div>
            <img class = "avatar" src = "${astronaut.picture}"
          </div>
        `;
      }
    });
  });
});
