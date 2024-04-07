document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('uploadForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(form);

        fetch('/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            displayResult(data.result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    function displayResult(result) {
        resultDiv.style.display = 'block'; // Show result div

        resultDiv.innerHTML = ''; // Clear previous content

        const resultTitle = document.createElement('h2');
        resultTitle.classList.add('result-title');
        resultTitle.textContent = 'Classification Result:';
        resultDiv.appendChild(resultTitle);

        const resultText = document.createElement('p');
        resultText.classList.add('result-text');
        resultText.textContent = result;
        resultDiv.appendChild(resultText);
    }
});
