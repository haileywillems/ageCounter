let ages = []; // user-entered ages
let ageGroups = [10, 20, 30]; // predefined age groups
let ageCounts = [0, 0, 0]; // blank counts (parallel)
function addAge() {
    let age = Number(document.getElementById("ageInput").value);
    // TODO 1: add age to ages array
    ages.push(age) // 21
    // TODO 2: check which ageGroup it belongs to
    if(age < ageGroups[1]){
        ageCounts[0]++
        
    }
    else if(age< ageGroups[2]){
        ageCounts[1]++
    }
    else{
        ageCounts[2]++
    }
    
    // 0–19 → index 0
    // 20–29 → index 1
    // 30+ → index 2
    // TODO 3: update ageCounts array
    document.getElementById("tens").innerText = ageCounts[0]
    document.getElementById("twenties").innerText = ageCounts[1]
    document.getElementById("thirties").innerText = ageCounts[2]
    console.log(ageCounts);
}