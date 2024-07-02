document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const height = document.getElementById('height').value / 100;
    const weight = document.getElementById('weight').value;

    if (height === 0 || weight === 0) {
        alert('Please enter valid height and weight');
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    displayResult(bmi);
});

function displayResult(bmi) {
    const resultDiv = document.getElementById('result');
    let category;

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    resultDiv.innerHTML = `
        <p>Your BMI: <strong>${bmi}</strong></p>
        <p>Category: <strong>${category}</strong></p>
    `;
}
