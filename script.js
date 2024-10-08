let timers = {
    1: 30, // Section 1 timer in seconds
    2: 45, // Section 2 timer in seconds
    3: 60  // Section 3 timer in seconds
};

let intervalIds = {};

function startTimer(section) {
    let timeLeft = timers[section];
    document.getElementById(`time${section}`).textContent = timeLeft;

    intervalIds[section] = setInterval(() => {
        timeLeft--;
        document.getElementById(`time${section}`).textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(intervalIds[section]);
            alert(`Time is up for Section ${section}`);
            nextSection(section);
        }
    }, 1000);
}

function nextSection(currentSection) {
    clearInterval(intervalIds[currentSection]);
    document.getElementById(`section${currentSection}`).style.display = 'none';
    
    let nextSection = currentSection + 1;
    if (document.getElementById(`section${nextSection}`)) {
        document.getElementById(`section${nextSection}`).style.display = 'block';
        startTimer(nextSection);
    }
}

// Start the timer for the first section when the page loads
window.onload = function() {
    startTimer(1);
};
