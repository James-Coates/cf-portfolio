(() => {
  const form = document.querySelector('.contact-form');
  const formResponse = document.querySelector('js-form-response');

  form.onsubmit = e => {
    e.preventDefault();

    // Prepare to send data
    const data = {};
    const formElements = Array.from(form);
    const dataToSubmit = formElements.slice(0, formElements.length - 1); // Remove submit button from array
    dataToSubmit.map(input => data[input.name] = input.value);

    // Log what our lamda fn will recieve
    console.log(JSON.stringify(data));

    // construct a new http request
    var xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action, true);
    // xhr.setRequestHeader('Accepts', 'application/json; charset=utf-8');
    // xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    // Send the collected data as JSON
    xhr.send(JSON.stringify(data));

    //Callback function
    xhr.onloadend = response => {
      if(response.target.status === 200) {
        form.reset();
        formResponse.innerHTML = 'Thanks for the message. I’ll be in touch shortly.';
      } else {
        // The form submission failed
        formResponse.innerHTML = 'Something went wrong';
        console.error(JSON.parse(response.target.response).message);
      }
    }
  }
})();