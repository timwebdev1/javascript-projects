//Code Your Solution Below
window.addEventListener("load", function() {
  let form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    let testNameInput = document.querySelector("input[name=testName]");
    let testDateInput = document.querySelector("input[name=testDate]");
    if (testNameInput.value === "" || testDateInput.value === "") {
      alert("All fields are required!");

      event.preventDefault();
    }
  });
});

