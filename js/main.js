document.getElementById('converter-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;

    // API URL
    const apiUrl = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

    // Fetch the exchange rates
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const rate = data.rates[toCurrency];
            const result = (amount * rate).toFixed(2);
            document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
        })
        .catch(error => {
            console.error('Error fetching exchange rate:', error);
            document.getElementById('result').innerText = 'An error occurred while fetching the exchange rate.';
        });
});
