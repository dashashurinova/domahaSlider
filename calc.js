let stars = document.getElementById('stars');
let days = document.getElementById('days');
let sharacteristics = document.getElementById('sharacteristics');
let cost;

function calculateCost() {
    console.log(totalCost);
    switch (Number(document.getElementById('sharacteristics').value)) {
        case 0: cost =0; console.log(cost);break;
        case 1: cost =130;  console.log(cost);break;
        case 2: cost =50; console.log(cost);break;
        case 3: cost =120;console.log(cost); break;
        case 4: cost =180;console.log(cost); break;
    }
totalCost= cost*stars.value*days.value;
document.getElementById('totalCost').innerHTML = totalCost;
}


