chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Message received:', message);
  
  sendResponse('Message received successfully!');
  // 'http://127.0.0.1:5000/fix'
  // https://eldername2.herokuapp.com/fix
  fetch('https://eldername2.herokuapp.com/fix', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: message })
  })
  .then(response => {
    console.log(response.status);
    return response.json();
  })
  .then(data => {
    console.log("from flask:", data)
    // console.log(data);
    // handle the response from the Flask API here
  })
  .catch(error => {
    console.error(error);
    console.log("not work")
  });
  
});