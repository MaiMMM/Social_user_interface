
const MAX_CUPS=10,
      MIN_CUPS=0;

const addButton = document.querySelector(".add");
      removeButton = document.querySelector(".remove");


const currentCupsEl = document.querySelector('.current-cups'),
    currentLitersEl = document.querySelector('.current-liters'),
    currentPercentageEl = document.querySelector('.current-percentage'),
    progressArea = document.querySelector('.progress');

addButton.addEventListener("click",addCup);

removeButton.addEventListener("click",removeCup);


let cups = 0,
    liters = 0,
    percentage = 0;

function addCup(){
    cups++;
    liters += 250;
    percentage = (cups / MAX_CUPS) * 100;

    currentCupsEl.textContent = `${cups}/10 students`;

    currentPercentageEl.textContent = `${percentage}%`;
    progressArea.style.height = `${percentage}%`;


    if(cups === MAX_CUPS){
        addButton.disable = true;
    }else{
        removeButton.disable = false;
    }
}

function removeCup(){
    cups--;
    liters -= 250;
    percentage = (cups / MAX_CUPS) * 100;

    currentCupsEl.textContent = `${cups}/10 students`;

    currentPercentageEl.textContent = `${percentage}%`;
    progressArea.style.height = `${percentage}%`;


    if(cups === MIN_CUPS){
        removeButton.disable = true;
    }else{
        addButton.disable = true;
    }
}