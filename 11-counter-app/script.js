let count = 0;

console.log("Starting count:", count);

// Βρες τα HTML elements
const display = document.getElementById('counter-display');
const btnDecrease = document.getElementById('btn-decrease');
const btnReset = document.getElementById('btn-reset');
const btnIncrease = document.getElementById('btn-increase');

console.log("Display element:", display);
console.log("Increase button:", btnIncrease);


btnIncrease.addEventListener('click', function() {
    count++;  // Αύξησε τον αριθμό κατά 1
    display.textContent = count;  // Ενημέρωσε το display
    console.log("Increased to:", count);
});

btnDecrease.addEventListener('click', function() {
    count--;  // Μείωσε τον αριθμό κατά 1
    display.textContent = count;  // Ενημέρωσε το display
    console.log("Decreased to:", count);
});

btnReset.addEventListener('click', function() {
    count = 0;  // Επαναφορά στο 0
    display.textContent = count;  // Ενημέρωσε το display
    console.log("Reset to:", count);
});