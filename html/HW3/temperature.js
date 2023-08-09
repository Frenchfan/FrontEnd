function convertTemperature() {
    const celsiusInput = document.getElementById('celsiusInput');
    const fahrenheitOutput = document.getElementById('fahrenheitOutput');

    const celcius = parseFloat(celsiusInput.value);
    const fahrenheit = Math.round(((9 / 5) * celcius + 32) * 10) / 10;
    fahrenheitOutput.innerText = fahrenheit;

    const data = {
        "celcius": celcius,
        "farenheit": fahrenheit
    };

    fetch('https://365ingame.hopto.org/gb/temperature', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        console.log(response);
    }).catch(error => {
        console.error(error);
    });

    updateTemperatureTable(data);

}

function updateTemperatureTable(newData) {
    fetch('https://365ingame.hopto.org/gb/temperature/last/3')
        .then(response => response.json()
            .then(data => {
                const temperatureTable = document.getElementById('temperatureTable');

                while (temperatureTable.firstChild) {
                    temperatureTable.removeChild(temperatureTable.firstChild);
                }

                for (let i = 0; i < data.length; i++) {
                    const row = document.createElement('tr');

                    const celsiusCell = document.createElement('td');
                    celsiusCell.innerText = data[i].celcius;
                    row.appendChild(celsiusCell);

                    const fahrenheitCell = document.createElement('td');
                    fahrenheitCell.innerText = data[i].farenheit;
                    row.appendChild(fahrenheitCell);

                    temperatureTable.appendChild(row);
                }

                if (newData) {
                    const row = document.createElement('tr');
                    const celsiusCell = document.createElement('td');
                    celsiusCell.innerText = newData.celcius;
                    row.appendChild(celsiusCell);

                    const fahrenheitCell = document.createElement('td');
                    fahrenheitCell.innerText = newData.farenheit;
                    row.appendChild(fahrenheitCell);
                    temperatureTable.insertBefore(row, temperatureTable.firstChild);

                }
            }).catch (error => {
        console.error(error);
    }));
}

document.addEventListener('DOMContentLoaded', () => updateTemperatureTable());