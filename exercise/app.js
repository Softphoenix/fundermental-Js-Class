

// function calculate() {
//     let principal =Number( document.getElementById('p').value)
//     let rate =Number( document.getElementById('r').value) 
//     let time =Number( document.getElementById('t').value)
//     let result = document.getElementById('result')
//     result.style.background = "red"
//     result.style.padding = "30px"
//     result.style.fontSize = "30px"
//     result.innerHTML = `the Simple Interest is    ` + principal * time * rate / 100
    

//      principal =Number( document.getElementById('p').value= '')
//      rate =Number( document.getElementById('r').value= '') 
//      time =Number( document.getElementById('t').value= '')
       

// }

// function calculate() {
//     let principal =Number( document.getElementById('p').value)
//     let  maxPrincipal = 500000;
//     let time =Number( document.getElementById('t').value)
//     let maxTime = 24;
//     let result = document.getElementById('result')
//     if (principal < maxPrincipal && time < maxTime) {
//        console.log(`the rate is  ` + 5)
//     } else if (principal <= maxPrincipal && time <= maxTime) {
//         console.log(`the rate is  ` + 10)
//     } else {
//         console.log(`the rate is  ` + 0)
//     }
//     result.style.background = "red"
//     result.style.padding = "30px"
//     result.style.fontSize = "30px"
//     result.innerHTML = `the Simple Interest is  ` + principal * time / 100


// } 

function calculate() {
    let principal =Number( document.getElementById('p').value)
    let time =Number( document.getElementById('t').value)
    if (principal <= 10000000) {
        console.log(`rate is 0.60%`);
    } else if (principal >= 10000000) {
        console.log(`rate is 1%`);
    } else if (principal < 10000000) {
        console.log(`rate is  0.25%`);
    } else {
        console.log(`rate is 0`);
    };
    let result = document.getElementById('result')
    result.style.background = "red"
     result.style.padding = "30px"
     result.style.fontSize = "30px"
     result.innerHTML = `The Simple Interest is ` + principal * time  / 100

}


