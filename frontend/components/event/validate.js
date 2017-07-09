export const validateField = (prop, value) => {
  if (prop === "title") {
    if (value === "") {
      document.getElementById('event-form-title').style.borderColor = '#f00';
      document.querySelector('#event-form-title + span').innerHTML = "Title is required";
      return false;
    } else {
      document.getElementById('event-form-title').style.borderColor = 'rgb(210, 214, 223)';
      document.querySelector('#event-form-title + span').innerHTML = "";
    }
  } else if (prop === "start_date") {
    if (value === "") {
      document.getElementById('event-form-start-date').style.borderColor = '#f00';
      document.querySelector('#event-form-start-date + span').innerHTML = "Start date is required";
      return false;
    } else {
      document.getElementById('event-form-start-date').style.borderColor = 'rgb(210, 214, 223)';
      document.querySelector('#event-form-start-date + span').innerHTML = "";
    }
  } else if (prop === "start_time") {
    if (value === "") {
      document.getElementById('event-form-start-time').style.borderColor = '#f00';
      document.querySelector('#event-form-start-time + span').innerHTML = "Start time is required";
      return false;
    } else {
      document.getElementById('event-form-start-time').style.borderColor = 'rgb(210, 214, 223)';
      document.querySelector('#event-form-start-time + span').innerHTML = "";
    }
  } else if (prop === "end_date") {
    if (value === "") {
      document.getElementById('event-form-end-date').style.borderColor = '#f00';
      document.querySelector('#event-form-end-date + span').innerHTML = "End date is required";
      return false;
    } else {
      document.getElementById('event-form-end-date').style.borderColor = 'rgb(210, 214, 223)';
      document.querySelector('#event-form-end-date + span').innerHTML = "";
    }
  } else if (prop === "end_time") {
    if (value === "") {
      document.getElementById('event-form-end-time').style.borderColor = '#f00';
      document.querySelector('#event-form-end-time + span').innerHTML = "End time is required";
      return false;
    } else {
      document.getElementById('event-form-end-time').style.borderColor = 'rgb(210, 214, 223)';
      document.querySelector('#event-form-end-time + span').innerHTML = "";
    }
  }  else if (prop === "topic_id") {
    if (value === "0" || value === 0) {
      document.getElementById('event-form-topic').style.borderColor = '#f00';
      document.querySelector('#event-form-topic + span').innerHTML = "Topic is required";
      return false;
    } else {
      document.getElementById('event-form-topic').style.borderColor = 'rgb(210, 214, 223)';
      document.querySelector('#event-form-topic + span').innerHTML = "";
    }
  } else if (prop === "image_url"){
    if (value === "" ) {
      document.getElementById('event-form-image').style.borderColor = '#f00';
      document.querySelector('#event-form-image + span').innerHTML = "Image is required";
      return false;
    } else {
      document.getElementById('event-form-image').style.borderColor = 'rgb(210, 214, 223)';
      document.querySelector('#event-form-image + span').innerHTML = "";
    }
  }
  return true;
};


export const validateForm = (thisEvent) => {
  let isFormReadyForSubmission = true;
  Object.keys(thisEvent).forEach(attr => {
    if (!validateField(attr, thisEvent[attr])) {
      isFormReadyForSubmission = false;
    }
  });
  return isFormReadyForSubmission;
};
