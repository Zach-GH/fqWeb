/* This file is for creating and displaying announcements */

/* The latest alerts should always be at the top of the list */
const alerts = [
  { id: 'scroll-text', message: '3/4/23 - ONLINE PAYMENTS / REGISTRATION NOW OPEN' },
  { id: 'scroll-text', message: '3/2/23 - 2023 EVENT DATES HAVE BEEN ANNOUNCED' }
];

let currentAlertIndex = 0;
let displayAlerts = true; /* flag variable to control alert display */

function displayNextAlert() {
  const alertsContainer = document.getElementById('scroll-container');
  
  if (!displayAlerts) { /* if flag is false, do not display alert */
    return;
  }
  
  const currentAlert = alerts[currentAlertIndex];
  const alertElement = document.createElement('div');
  alertElement.id = currentAlert.id;
  alertElement.className = 'card';
  alertElement.textContent = currentAlert.message;

  /* This event listener allows the removal of the element on its click 
     and toggles the flag to stop alert display */
  alertElement.addEventListener('click', () => {
    alertsContainer.removeChild(alertElement);
    displayAlerts = false;
  });

  if (alertsContainer.childNodes.length > 0) {
    alertsContainer.replaceChild(alertElement, alertsContainer.childNodes[0]);
  } else {
    alertsContainer.appendChild(alertElement);
  }
  
  currentAlertIndex = (currentAlertIndex + 1) % alerts.length;
}

/* Call displayNextAlert on page load so there is always at least one alert */
window.addEventListener('load', displayNextAlert);

/* This creates the alert every 15 seconds and has
 * to be faster then the travel time in style.css 
 * dependent on the alert, you may have to play around with this 
 * I have found that the best interval is when this is 2 seconds
 * lower then the alotted time given in the css travel variable
 */
setInterval(displayNextAlert, 23000);
