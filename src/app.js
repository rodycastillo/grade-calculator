const result = document.getElementById('result');

result.addEventListener("click", () => {

    const wd = document.getElementById('wd').value;
    const maths = document.getElementById('maths').value;
    const computer = document.getElementById('computer').value;
    const phy = document.getElementById('phy').value;

    const totalGrades = parseFloat(wd) + parseFloat(maths) + parseFloat(computer) + parseFloat(phy);
    alert(totalGrades);

    let perc = (totalGrades / 400) * 100;
    alert(perc);

    let grades = "";

    // debugger;

    if (perc <= 100 && perc >= 80) {
        grades = 'A';
    } else if (perc <= 79 && perc >= 60) {
        grades = 'B';
    } else if (perc <= 59 && perc >= 40) {
        grades = 'C';
    } else {
        grades = 'F';
    }

    if (perc >= 39.5) {
        document.getElementById('showData').innerHTML = `Out of 400 your total is ${totalGrades} and percentage is ${perc}%. Your Grade is ${grades}. You are Pass`;
    } else {
        document.getElementById('showData').innerHTML = `Out of 400 your total is ${totalGrades} and percentage is ${perc}%. Your Grade is ${grades}. You are Fail`;
    }

})