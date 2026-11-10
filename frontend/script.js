function turnOn() {
    document.getElementById("lampStatus").innerText = "ON";
}

function turnOff() {
    document.getElementById("lampStatus").innerText = "OFF";
}

function sendLCD() {
    let message = document.getElementById("lcdMessage").value;

    if (message === "") {
        alert("Please enter a message");
    } else {
        alert("LCD Message: " + message);
    }
}
