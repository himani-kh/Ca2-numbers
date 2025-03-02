document.getElementById('fetchFact').addEventListener('click', () => {
    const number = document.getElementById('numberInput').value;
    const factDisplay = document.getElementById('factDisplay');
  
    if (number === '') {
      factDisplay.textContent = 'Please enter a number.';
      return;
    }
  
    fetch(`http://numbersapi.com/${number}`)
      .then(response => response.text())
      .then(fact => {
        factDisplay.textContent = fact;
      })
      .catch(error => {
        factDisplay.textContent = 'An error occurred. Please try again.';
        console.error('Error fetching data:', error);
      });
  });
  