let toggleGenderUnisex = document.querySelector(".gender-unisex");
let toggleGenderMale = document.querySelector(".gender-male");
let toggleGenderFemale = document.querySelector(".gender-female");
let rowXS = document.querySelector(".xs-row");

toggleGenderUnisex.addEventListener("click", function() {
    if (this.classList.contains("active")) {
        
    } else {
        this.classList.add("active");
        toggleGenderMale.classList.remove("active");
        toggleGenderFemale.classList.remove("active");
        rowXS.classList.add("hidden");
    }
});

toggleGenderMale.addEventListener("click", function() {
    if (this.classList.contains("active")) {
        
    } else {
        this.classList.add("active");
        toggleGenderUnisex.classList.remove("active");
        toggleGenderFemale.classList.remove("active");
        rowXS.classList.add("hidden");
    }
});

toggleGenderFemale.addEventListener("click", function() {
    if (this.classList.contains("active")) {

    } else {
        this.classList.add("active");
        toggleGenderMale.classList.remove("active");
        toggleGenderUnisex.classList.remove("active");
        rowXS.classList.remove("hidden");
    }
});


// Start calculator script
let inputField = document.querySelector(".calculator-input-field");
let genderUnisex = document.querySelector(".gender-unisex");
let genderMale = document.querySelector(".gender-male");
let genderFemale = document.querySelector(".gender-female");
let genderValue = genderUnisex.innerHTML;

genderUnisex.addEventListener("click", selectGender);
genderMale.addEventListener("click", selectGender);
genderFemale.addEventListener("click", selectGender);
inputField.addEventListener("keyup", sizeCalculator);



function showErrorMSG() {
    let errorMSG = document.querySelector(".error-msg");
    errorMSG.classList.remove("hidden");
};

function hideErrorMSG() {
    let errorMSG = document.querySelector(".error-msg");
    errorMSG.classList.add("hidden");
};

function selectGender() {
    genderValue = this.innerHTML;
    sizeCalculator();
};

function sizeCalculator() {
    let inputFieldValue = inputField.value;
    
    // Select output fields
    let sizeXS = document.querySelector(".size-xs");
    let sizeS = document.querySelector(".size-s");
    let sizeM = document.querySelector(".size-m");
    let sizeL = document.querySelector(".size-l");
    let sizeXL = document.querySelector(".size-xl");
    let size2XL = document.querySelector(".size-2xl");
    
    // From 100 to 249 pieces
    let sizesLess250 = {
        'mathS' : '11',
        'mathM' : '26',
        'mathL' : '26',
        'mathXL' : '26',
        'math2XL' : '11',
    }
    
    // From 250 pieces
    let sizesUnisex = {
        'mathXS' : '0',
        'mathS' : '17.0508965363626',
        'mathM' : '29.8864016037421',
        'mathL' : '29.8864016037421',
        'mathXL' : '17.0508965363626',
        'math2XL' : '6.1254037197906',
    }

    let sizeFemale = {
        'mathXS' : '5.064145847',
        'mathS' : '25.86090479',
        'mathM' : '29.91222147',
        'mathL' : '19.88521269',
        'mathXL' : '11.3436867',
        'math2XL' : '7.933828494',
    }    

    // Calculate needed prices
    if (inputFieldValue < 100) {
        showErrorMSG();
        var resultXS = 0;
        var resultS = 0;
        var resultM = 0;
        var resultL = 0;
        var resultXL = 0;
        var result2XL = 0;
    } else if (inputFieldValue < 249) {
            hideErrorMSG();
            var resultXS = 0;
            var resultS = Math.round(inputFieldValue * sizesLess250.mathS / 100);
            var resultM = Math.round(inputFieldValue * sizesLess250.mathM / 100);
            var resultL = Math.round(inputFieldValue * sizesLess250.mathL / 100);
            var resultXL = Math.round(inputFieldValue * sizesLess250.mathXL / 100);
            var result2XL = Math.round(inputFieldValue * sizesLess250.math2XL / 100);
    } else {
        if (genderValue == "Unisex" || genderValue == "male") {
            hideErrorMSG();
            var resultXS = Math.round(inputFieldValue * sizesUnisex.mathXS / 100);
            var resultS = Math.round(inputFieldValue * sizesUnisex.mathS / 100);
            var resultM = Math.round(inputFieldValue * sizesUnisex.mathM / 100);
            var resultL = Math.round(inputFieldValue * sizesUnisex.mathL / 100);
            var resultXL = Math.round(inputFieldValue * sizesUnisex.mathXL / 100);
            var result2XL = Math.round(inputFieldValue * sizesUnisex.math2XL / 100); 
        } else { // Female
            hideErrorMSG();
            var resultXS = Math.round(inputFieldValue * sizeFemale.mathXS / 100);
            var resultS = Math.round(inputFieldValue * sizeFemale.mathS / 100);
            var resultM = Math.round(inputFieldValue * sizeFemale.mathM / 100);
            var resultL = Math.round(inputFieldValue * sizeFemale.mathL / 100);
            var resultXL = Math.round(inputFieldValue * sizeFemale.mathXL / 100);
            var result2XL = Math.round(inputFieldValue * sizeFemale.math2XL / 100);
        }
    };


    // Change sizebreak under recommendation
    let breakXSmall = document.querySelector(".size-xsmall");
    let breakSmall = document.querySelector(".size-small");
    let breakMedium = document.querySelector(".size-medium");
    let breakLarge = document.querySelector(".size-large");
    let breakXLarge = document.querySelector(".size-xlarge");
    let break2XLarge = document.querySelector(".size-2xlarge");

    if (inputField < 100) {

    } else if (inputFieldValue < 249) {
        breakSmall.innerHTML = "11%";
        breakMedium.innerHTML = "26%";
        breakLarge.innerHTML = "26%";
        breakXLarge.innerHTML = "26%";
        break2XLarge.innerHTML = "11%";
    }  else {
        if (genderValue == "Unisex" || genderValue == "Male") {
            breakXSmall.innerHTML = "0%";
            breakSmall.innerHTML = "17.1%";
            breakMedium.innerHTML = "29.9%";
            breakLarge.innerHTML = "29.9%";
            breakXLarge.innerHTML = "17.1%";
            break2XLarge.innerHTML = "6.1%";
        } else {
            breakXSmall.innerHTML = "5.1%"
            breakSmall.innerHTML = "25.9%";
            breakMedium.innerHTML = "29.9%";
            breakLarge.innerHTML = "19.9%";
            breakXLarge.innerHTML = "11.3%";
            break2XLarge.innerHTML = "7.9%";
        }
    }
    
    // Calculate total
    let totalSplit = resultXS + resultS + resultM + resultL + resultXL + result2XL;
    let totalDifference = inputFieldValue - totalSplit;

    // Fix total when needed
    if (inputFieldValue > 100) {
        if (totalSplit > inputFieldValue) {
            resultS = resultS - totalDifference; // Subtract the difference to the Small size to adjust the total
        } else if (totalSplit < inputFieldValue) {
            resultS = resultS + totalDifference; // Add the difference to the Large size to adjust the total
        } else if (totalSplit == inputFieldValue) {
        
        }
    } else {

    }

    // Add results to span
    sizeXS.innerHTML = resultXS;
    sizeXS.classList.add("fade-in");
    sizeS.innerHTML = resultS;
    sizeS.classList.add("fade-in");
    sizeM.innerHTML = resultM;
    sizeM.classList.add("fade-in");
    sizeL.innerHTML = resultL;
    sizeL.classList.add("fade-in");
    sizeXL.innerHTML = resultXL;
    sizeXL.classList.add("fade-in");
    size2XL.innerHTML = result2XL;
    size2XL.classList.add("fade-in");
};