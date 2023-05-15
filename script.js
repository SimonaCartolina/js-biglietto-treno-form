const kilometri;
let costoalkm= parseInt(0.233.toFixed(2) + €);
let costocomplessivo= costoalkm * kilometri;
let costoscontato;

if (userAge < 18) {
    costoscontato= ((19.4 * costocomplessivo) / 100).toFixed(2);
} else if (userAge > 65) {
    costoscontato= ((37.7 * costocomplessivo) / 100).toFixed(2);
} else {
    costoscontato=costocomplessivo.toFixed(2);
}


document.getElementById('kilometri') .innerHTML = kilometri;
document.getElementById('costototale') .innerHTML = costoscontato;

console.log(kilometri);
console.log(userAge);
console.log(costoalkm);
console.log(costocomplessivo);
console.log(costoscontato);

let Submit= document.getElementById('Submit');

Submit.addEventListener ('click' , function()
{
    if(click){
        costoscontato= ((19.4 * costocomplessivo) / 100).toFixed(2);
    } else if (userAge > 65) {
        costoscontato= ((37.7 * costocomplessivo) / 100).toFixed(2);
    } else if{
        costoscontato=costocomplessivo.toFixed(2);
    } 
    if (userAge> 120){
        alert('Invalid digit');
    }
    else if (userAge< 0){
        alert('Invalid digit');
    }
}
)

