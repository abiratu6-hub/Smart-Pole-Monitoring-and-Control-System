export function sendLCD() {
    let message = document.getElementById("lcdMessage").value;

    if (message === "") {
        alert("Please enter a message");
    } else {
        alert("LCD Message: " + message);
    }
}
