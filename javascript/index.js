function calculate() {
    setInterval(() => {
      // Input Birth date
      let birthdate = new Date(document.getElementById('birthdate').value);
  
      // getTime: returns the number of milliseconds since January 1, 1970
      let now = new Date();
  
      let ageInMs = now.getTime() - birthdate.getTime();
      let ageInS = ageInMs / 1000; // to seconds
      let ageInMins = ageInS / 60; // to minutes
      let ageInHrs = ageInMins / 60; // to Hours
      let ageInDays = ageInHrs / 24; // to days
      let ageInMonths = ageInDays / 30.4375; // to months
      let ageInYears = ageInMonths / 12; // to years
  
      document.querySelector('#years').innerHTML = Math.floor(ageInYears);
      document.querySelector('#months').innerHTML = Math.floor(ageInMonths % 12);
      document.querySelector('#days').innerHTML = Math.floor(ageInDays % 30.4375);
      document.querySelector('#minutes').innerHTML = Math.floor(ageInMins % 60);
      document.querySelector('#seconds').innerHTML = Math.floor(ageInS % 60);
      document.querySelector('#seconds').style.borderBottom = '1px grey solid';
      document.querySelector('#hours').innerHTML = Math.floor(ageInHrs % 24);
    }, 100);
  }
  
  function reset() {
    window.location.reload();
  }
  
// //   logic
// Certainly! Let's go through the logic of the code step by step:

// The calculate() function is called when the page loads or when a specific event occurs. It uses the setInterval() method to execute a piece of code repeatedly at a specified interval (in this case, every 1000 milliseconds or 1 second).

// Inside the setInterval() function, the code retrieves the birthdate value from an input field with the id 'birthdate' and creates a new Date object with it. This represents the user's birthdate.

// It then creates another Date object representing the current date and time, which is stored in the now variable.

// The difference between the current date and the birthdate is calculated in milliseconds by subtracting the birthdate's time from the current time.

// The age is then calculated by converting the milliseconds to seconds, minutes, hours, days, months, and years. Each conversion is performed by dividing the previous unit by the appropriate conversion factor.

// The calculated age values are then used to update the content of specific HTML elements on the page. For example, Math.floor(ageInYears) gives the number of full years, which is assigned to the innerHTML property of the HTML element with the id 'years'. Similarly, other age values are updated in their respective HTML elements.

// Finally, the reset() function is provided to reload the page when called. This can be used to reset the age calculation and start over.

// By using setInterval(), the code continuously updates the age values in real-time, ensuring that the displayed age is always up to date.