const screens = [
  `<h1 class="mainText">Fast GPA Calculator</h1>
   <button class="proceedbtn">Proceed</button>`,

  `<h2 class='inputText'>Applied Physics</h2>
   <input type="text" id="Total" class="mainInput" placeholder="Total Weightage">
   <input type="text" id="Gained" class="mainInput" placeholder="Scored Weightage">
   <button class="proceedbtn">Next</button>`,

  `<h2 class='inputText'>Calculus and Analytical Geometry</h2>
   <input type="text" id="Total" class="mainInput" placeholder="Total Weightage">
   <input type="text" id="Gained" class="mainInput" placeholder="Scored Weightage">
   <button class="proceedbtn">Next</button>`,

  `<h2 class='inputText'>Programming Fundamentals</h2>
   <input type="text" id="Total" class="mainInput" placeholder="Total Weightage">
   <input type="text" id="Gained" class="mainInput" placeholder="Scored Weightage">
   <button class="proceedbtn">Next</button>`,

  `<h2 class='inputText'>Functional English</h2>
   <input type="text" id="Total" class="mainInput" placeholder="Total Weightage">
   <input type="text" id="Gained" class="mainInput" placeholder="Scored Weightage">
   <button class="proceedbtn">Next</button>`,

  `<h2 class='inputText'>Ideology and Constitution of Pakistan</h2>
   <input type="text" id="Total" class="mainInput" placeholder="Total Weightage">
   <input type="text" id="Gained" class="mainInput" placeholder="Scored Weightage">
   <button class="proceedbtn">Next</button>`,

  `<h2 class='inputText'>Pakistan Studies</h2>
   <input type="text" id="Total" class="mainInput" placeholder="Total Weightage">
   <input type="text" id="Gained" class="mainInput" placeholder="Scored Weightage">
   <button class="proceedbtn">Next</button>`,

  `<h2 class='inputText'>Functional English - LAB</h2>
   <input type="text" id="Total" class="mainInput" placeholder="Total Weightage">
   <input type="text" id="Gained" class="mainInput" placeholder="Scored Weightage">
   <button class="proceedbtn">Next</button>`,

  `<h2 class='inputText'>Introduction to ICT</h2>
   <input type="text" id="Total" class="mainInput" placeholder="Total Weightage">
   <input type="text" id="Gained" class="mainInput" placeholder="Scored Weightage">
   <button class="proceedbtn">Next</button>`,

  `<h2 class='inputText'>Programming Fundamentals - LAB</h2>
   <input type="text" id="Total" class="mainInput" placeholder="Total Weightage">
   <input type="text" id="Gained" class="mainInput" placeholder="Scored Weightage">
   <button class="proceedbtn">Finish</button>`
];

let step = 0;
const content = document.querySelector(".content");
sumWeightedPoints = 0.00;

function renderStep() {
    content.innerHTML = screens[step];
    let totalWeightage, gainedWeightage, calcPercentage, weightedpoints;
    function calculateWeightedPoints() {
        if (step>0 && step<11) {
            totalWeightage = parseFloat(document.getElementById('Total').value);
            console.log(totalWeightage, typeof(totalWeightage))
            gainedWeightage = parseFloat(document.getElementById('Gained').value);
            calcPercentage = gainedWeightage/totalWeightage*100;
            calcPercentage = Math.round(calcPercentage);
            function getGradePoint(percentage) {
            if (percentage >= 90) return 4.00;        // A+
            else if (percentage >= 86) return 4.00;   // A
            else if (percentage >= 82) return 3.67;   // A-
            else if (percentage >= 78) return 3.33;   // B+
            else if (percentage >= 74) return 3.00;   // B
            else if (percentage >= 70) return 2.67;   // B-
            else if (percentage >= 66) return 2.33;   // C+
            else if (percentage >= 62) return 2.00;   // C
            else if (percentage >= 58) return 1.67;   // C-
            else if (percentage >= 54) return 1.33;   // D+
            else if (percentage >= 50) return 1.00;   // D
            else return 0.00;                         // F
            }
            const gradePoints = getGradePoint(calcPercentage)
            console.log('gradePoints Are', gradePoints)
            if (step > 0 && step < 4) {
                weightedpoints = gradePoints * 3
            }
            else if (step > 3 && step < 7) {
                weightedpoints = gradePoints * 2
            }
            else { weightedpoints = gradePoints * 1 }
            sumWeightedPoints = sumWeightedPoints + weightedpoints
            console.log(sumWeightedPoints)
        }
    }
    const btn = content.querySelector(".proceedbtn");
    if (btn) {
        btn.addEventListener("click", () => {
        calculateWeightedPoints()
        step++;
        if (step < screens.length) {
            renderStep();
        } else {
            content.innerHTML = "<h2>Calculating Your GPA...</h2>";
            setTimeout(() => {
                content.innerHTML = `<h2>Your Predicted GPA is ${sumWeightedPoints/18} </h2>`
            }, 1000);
        }
        });
    }
}

console.log(screens.length)

window.onload = () => {
  renderStep();
};