$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
       
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });


    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });


    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Switch from Propane to Natural Gas!!", "Find your Savings!!"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});

    
const consumptionUnitSelect = document.getElementById("consumption-unit");
const consumptionSlider = document.getElementById("consumption");
const consumptionValue = document.getElementById("consumption-value");
const priceInput = document.getElementById("price");
const natPriceInput = document.getElementById("natprice");
const costOutput = document.getElementById("cost");
// const co2Output = document.getElementById("co2");
const totNatGas = document.getElementById('totNatGas')
const NatGasCost = document.getElementById("natgascost");
const CO2saving = document.getElementById("CO2saving");
const natsaving = document.getElementById("natsaving");

// Display the initial value of the consumption slider
consumptionValue.value = consumptionSlider.value;

// Update the consumption value display when the slider is changed
consumptionSlider.addEventListener("input", () => {
    consumptionValue.value = (consumptionSlider.value);
    updateResults();
});

consumptionValue.addEventListener('input', () => {
    const value = parseInt(consumptionValue.value);
    if (value >= 0 && value <= 200000) {
        consumptionSlider.value = value;
    }
    updateResults();
});

consumptionUnitSelect.addEventListener("chnage", () => {
    updateResults();
});

// Update the results when the price input is changed
priceInput.addEventListener("input", () => {
    updateResults();
});

natPriceInput.addEventListener("input", () => {
    updateResults();
});

totNatGas.addEventListener("input", () => {
    updateResults();
});

function updateResults() {
    const unit = consumptionUnitSelect.value;
    const value = parseInt(consumptionValue.value);
    let consumption = value;

    // if (unit === "day"){
    //     consumption = value*365;
    // }

    // else if (unit === "month"){
    //     consumption = value*12;
    // }

    // const consumption = consumptionSlider.value;
    const price = priceInput.value;
    const natbaseprice = parseFloat(natPriceInput.value);
    const cost = (consumption * price).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    const cost1 = (consumption * price)
    const GJ = consumption/39.37;
    const CO2savings = ((GJ*0.060483)-(GJ*0.053)).toFixed(1);
    const totNatPrice = (natbaseprice+6.983).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 });
    const NatCost = (GJ*(natbaseprice+6.983)).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    const NatCost1 = (GJ*(natbaseprice+6.983))
    const costsaving = (cost1-NatCost1).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 });

    costOutput.value = `$ ${cost}`;
    totNatGas.value = `$ ${totNatPrice}`;
    NatGasCost.value = `$ ${NatCost}`;
    natsaving.value = `$ ${costsaving}`;
    CO2saving.value =  `${CO2savings} tons`;
}


