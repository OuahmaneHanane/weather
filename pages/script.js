function convert() {
    // Get the input value (Celsius)
    const celsius = document.getElementById("celsius-to-fahrenheit").value;

    // Check if the input is a number and not empty
    if (celsius === "" || isNaN(celsius)) {
        alert("Please enter a valid number for Celsius.");
        return;
    }

    // Convert Celsius to Fahrenheit
    const fahrenheit = (celsius * 9/5) + 32;

    // Set the Fahrenheit value to the input field
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2); // rounded to 2 decimal places

    // Update weather status based on temperature
    let weatherStatus = "";
    if (fahrenheit < 32) {
        weatherStatus = "Cold";
    } else if (fahrenheit >= 32 && fahrenheit <= 70) {
        weatherStatus = "Moderate";
    } else {
        weatherStatus = "Hot";
    }

    // Set the weather status to the input field
    document.getElementById("statut").value = weatherStatus;
}