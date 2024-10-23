function convertion() {
            var h1 = document.getElementById('ft').value;
            var h2 = document.getElementById('in').value;
            var h4 = parseInt(h1 * 12) + parseInt(h2);
            var H = h4 * 2.54;
            document.getElementById('height-output').innerText = "Your height in CM: " + H;
            
            // Display the output section
    document.getElementById('height-output').style.display = "block"; // Show the output section
    document.getElementById('height-output').innerHTML = bmiOutput;
        }

        function calculation() {
    var w = document.getElementById('w1').value; // weight stored in variable w
    var h2 = document.getElementById('h1').value; // height stored in variable h2

    var h3 = h2 / 100; // h2 converted to meter unit, result stored in variable h3
    var h = h3 * h3; // square of h3 is stored in variable h, h is ready to be used in calculation
    var BMI = w / h; // BMI formula
    
    // Display the output section
    document.getElementById('bmi-output').style.display = "block"; // Show the output section

    // New lines to create the meter HTML and inject it into the output
    var meterHTML = `
    <div class="bmi-meter-container">
    <div class="bmi-meter">
        <div class="bmi-range severe-thinness">Underweight (Severe thinness)</div>
        <div class="bmi-range moderate-thinness">Underweight (Moderate thinness)</div>
        <div class="bmi-range mild-thinness">Underweight (Mild thinness)</div>
        <div class="bmi-range normal">Normal</div>
        <div class="bmi-range overweight">Overweight (Pre-obese)</div>
        <div class="bmi-range class-i">Obese (Class I)</div>
        <div class="bmi-range class-ii">Obese (Class II)</div>
        <div class="bmi-range class-iii">Obese (Class III)</div>
    </div>
</div>
`;


    var bmiOutput = meterHTML; // Start with the meter HTML
    bmiOutput += "<br>Your BMI is " + BMI.toFixed(2); // calculated BMI

    // status
    bmiOutput += "<br><br> BMI Status: ";
    if (BMI < 16) bmiOutput += "Underweight (Severe thinness)";
    else if (BMI >= 16 && BMI <= 16.999) bmiOutput += "Underweight (Moderate thinness)";
    else if (BMI >= 17 && BMI <= 18.499) bmiOutput += "Underweight (Mild thinness)";
    else if (BMI >= 18.5 && BMI <= 24.999) bmiOutput += "Normal";
    else if (BMI >= 25 && BMI <= 29.999) bmiOutput += "Overweight (Pre-obese)";
    else if (BMI >= 30 && BMI <= 34.999) bmiOutput += "Obese (Class I)";
    else if (BMI >= 35 && BMI <= 39.999) bmiOutput += "Obese (Class II)";
    else if (BMI >= 40) bmiOutput += "Obese (Class III)";
    else bmiOutput += "Error!!";

    // Normal bmi range
    bmiOutput += "<br><br> Normal BMI Range: 18.5 to 24.9";

    // Ideal Weight
    bmiOutput += "<br><br> Ideal Weight Range For You: ";
    var wfrom = 18.5 * h; // lower limit of ideal weight
    var wto = 24.9 * h; // upper limit of ideal weight
    bmiOutput += wfrom.toFixed(2) + "kg to " + wto.toFixed(2) + "kg";

    // in case of underweight and overweight
    bmiOutput += "<br><br> Further Steps: ";
    if (BMI < 18.5) {
        var gain = wfrom - w; // underweight
        bmiOutput += "Gain " + gain.toFixed(2) + "kg to reach " + wfrom.toFixed(2) + "kg";
    } else if (BMI > 24.9) {
        var lose = w - wto; // overweight
        bmiOutput += "Lose " + lose.toFixed(2) + "kg to reach " + wto.toFixed(2) + "kg";
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        bmiOutput += "No action needed! Your BMI is in normal range.";
    } else {
        bmiOutput += "Error!!";
    }

    bmiOutput += "<br><br><button onclick='resetForm();'>Calculate Again</button>";
    document.getElementById('bmi-output').innerHTML = bmiOutput;

    // Update the meter value after displaying the output
    updateBMIMeter(BMI); // Call to update the pointer position
}

function updateBMIMeter(BMI) {
    // Reset all classes
    var ranges = document.querySelectorAll('.bmi-range');
    ranges.forEach(function(range) {
        range.style.opacity = 0.3; // Default opacity for all ranges
        range.classList.remove('user-bmi'); // Remove user-bmi class from all ranges
    });

    // Highlight the corresponding range based on BMI value
    if (BMI < 16) {
        ranges[0].style.opacity = 1; // Severe thinness
        ranges[0].classList.add('user-bmi'); // Add user-bmi class
    } else if (BMI < 17) {
        ranges[1].style.opacity = 1; // Moderate thinness
        ranges[1].classList.add('user-bmi'); // Add user-bmi class
    } else if (BMI < 18.5) {
        ranges[2].style.opacity = 1; // Mild thinness
        ranges[2].classList.add('user-bmi'); // Add user-bmi class
    } else if (BMI < 25) {
        ranges[3].style.opacity = 1; // Normal
        ranges[3].classList.add('user-bmi'); // Add user-bmi class
    } else if (BMI < 30) {
        ranges[4].style.opacity = 1; // Overweight
        ranges[4].classList.add('user-bmi'); // Add user-bmi class
    } else if (BMI < 35) {
        ranges[5].style.opacity = 1; // Obese Class I
        ranges[5].classList.add('user-bmi'); // Add user-bmi class
    } else if (BMI < 40) {
        ranges[6].style.opacity = 1; // Obese Class II
        ranges[6].classList.add('user-bmi'); // Add user-bmi class
    } else {
        ranges[7].style.opacity = 1; // Obese Class III
        ranges[7].classList.add('user-bmi'); // Add user-bmi class
    }
}



        function resetForm() {
            window.location.reload();
        }
