export function turnOn() {
    document.getElementById("lampStatus").textContent = "ON";
}

export function turnOff() {
    document.getElementById("lampStatus").textContent = "OFF";
}
window.turnOn = turnOn;
window.turnOff = turnOff;
