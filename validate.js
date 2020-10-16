// Validate that the form does not have any empty strings
function validateForm() {
  let form = document.forms['customerForm'];

  var msgs = [];

  // Validate each input and add it to the list of messages if empty

  if (form['firstName'].value === '') {
    msgs.push('Please fill out the First Name');
  }

  if (form['lastName'].value === '') {
    msgs.push('Please fill out the Last Name');
  }

  if (form['emailAddr'].value === '') {
    msgs.push('Please fill out an Email Address');
  }

  // Display an alert with the collected messages
  if (msgs.length > 0) {
    var str = 'Oops! You forgot to fill in some information. ';
    str += 'Take a look at these fields and submit again:\n';

    // Loop through the array and collect all the messages and merge it into the str
    msgs.forEach((msg, _index, _arr) => {
      str += '\n' + msg;
    });
    // Alert the browser
    alert(str);
    return false;
  } else {
    return true;
  }
}
