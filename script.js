function limpiarResultado() {
    document.getElementById("resultado").textContent = "";
}

// Exercise 1: Perimeter of a circle
function ejercicio1() {
    limpiarResultado();
    let radius = parseFloat(prompt("Enter the radius of the circle:"));
    let perimeter = 2 * Math.PI * radius;
    let message = "The perimeter of the circle with radius " + radius + " is: " + perimeter.toFixed(2);
    document.getElementById("resultado").textContent = message;
}

// Exercise 2: Area of a trapezoid
function ejercicio2() {
    limpiarResultado();
    let baseMajor = parseFloat(prompt("Enter the larger base of the trapezoid:"));
    let baseMinor = parseFloat(prompt("Enter the smaller base of the trapezoid:"));
    let height = parseFloat(prompt("Enter the height of the trapezoid:"));
    let area = ((baseMajor + baseMinor) * height) / 2;
    let message = "The area of the trapezoid is: " + area;
    document.getElementById("resultado").textContent = message;
}

// Exercise 3: Dollar to Lempira conversion
function ejercicio3() {
    limpiarResultado();
    const exchangeRate = 24;
    const dollars = parseFloat(prompt("Enter the amount in dollars:"));
    const converted = dollars * exchangeRate;
    const message = dollars + " dollars are equal to " + converted + " lempiras.";
    document.getElementById("resultado").textContent = message;
}

// Exercise 4: Celsius to Fahrenheit conversion
function ejercicio4() {
    limpiarResultado();
    let celsius = parseFloat(prompt("Enter the temperature in Celsius:"));
    let fahrenheit = (celsius * 9 / 5) + 32;
    let message = celsius + " degrees Celsius are " + fahrenheit + " degrees Fahrenheit.";
    document.getElementById("resultado").textContent = message;
}

// Exercise 5: Area of a square
function ejercicio5() {
    limpiarResultado();
    let side = parseFloat(prompt("Enter the side length of the square:"));
    let area = side * side;
    let message = "The area of the square is: " + area;
    document.getElementById("resultado").textContent = message;
}

// Exercise 6: Triangle area calculation
function ejercicio6() {
    limpiarResultado();
    let base = parseFloat(prompt("Enter the base of the triangle:"));
    let height = parseFloat(prompt("Enter the height of the triangle:"));
    let area = (base * height) / 2;
    let message = "The area of the triangle is: " + area;
    document.getElementById("resultado").textContent = message;
}

// Exercise 7: Are you a minor or an adult?
function ejercicio7() {
    limpiarResultado();
    let age = parseFloat(prompt("Enter your age:"));
    let message = "";
    if (age >= 18) {
        message = "You are an adult.";
    } else {
        message = "You are a minor.";
    }
    document.getElementById("resultado").textContent = message;
}

// Exercise 8: Convert Lempiras to Dollars
function ejercicio8() {
    limpiarResultado();
    let lempiras = parseFloat(prompt("Enter the amount in lempiras:"));
    let exchangeRate = 24;
    let converted = lempiras / exchangeRate;
    let message = lempiras + " lempiras are equal to " + converted.toFixed(2) + " dollars.";
    document.getElementById("resultado").textContent = message;
}

// Exercise 9: Calculate average grade
function ejercicio9() {
    limpiarResultado();
    const grade1 = parseFloat(prompt("Enter the first grade:"));
    const grade2 = parseFloat(prompt("Enter the second grade:"));
    const grade3 = parseFloat(prompt("Enter the third grade:"));
    const grade4 = parseFloat(prompt("Enter the fourth grade:"));
    const average = Math.round((grade1 + grade2 + grade3 + grade4) / 4);
    let message = "The average grade is: " + average;
    document.getElementById("resultado").textContent = message;
}

// Exercise 10: Calculate ticket price based on age
function ejercicio10() {
    limpiarResultado();
    let price = parseFloat(prompt("Enter the ticket price:"));
    let age = parseFloat(prompt("Enter your age to check for discounts:"));
    let message = "";

    if (age <= 12) {
        let discountAmount = price * 0.40;
        let finalPrice = price - discountAmount;
        message = "Since you are under 12, you get a 40% discount. The final price is $" + finalPrice;
    } else if (age <= 21) {
        let isStudent = prompt("Are you a student? (yes/no)").toLowerCase();
        if (isStudent === "yes") {
            let discountAmount = price * 0.30;
            let finalPrice = price - discountAmount;
            message = "Since you are under 21 and a student, you get a 30% discount. The final price is $" + finalPrice;
        } else {
            message = "Since you're not a student, you must pay the full price of $" + price;
        }
    } else if (age >= 60) {
        let discountAmount = price * 0.60;
        let finalPrice = price - discountAmount;
        message = "Since you are 60 or older, you get a 60% discount. The final price is $" + finalPrice;
    } else {
        message = "No discount applies. The full price is $" + price;
    }

    document.getElementById("resultado").textContent = message;
}

// Exercise 11: Convert meters to centimeters and vice versa
function ejercicio11() {
    limpiarResultado();
    let amount = parseFloat(prompt("Enter the amount to convert:"));
    let unit = prompt("Enter the unit (m for meters, cm for centimeters):").toLowerCase();
    let message = "";
    if (unit === "m") {
        let cm = amount * 100;
        message = `${amount} meters is equal to ${cm} centimeters.`;
    } else if (unit === "cm") {
        let m = amount / 100;
        message = `${amount} centimeters is equal to ${m} meters.`;
    } else {
        message = "Invalid unit entered.";
    }
    document.getElementById("resultado").textContent = message;
}

// Exercise 12: Area of a circle
function ejercicio12() {
    limpiarResultado();
    let radius = parseFloat(prompt("Enter the radius of the circle:"));
    let area = Math.PI * (radius * radius);
    let message = "The area of the circle with radius " + radius + " is: " + area;
    document.getElementById("resultado").textContent = message;
}

// Exercise 13: Determine student's attendance category
function ejercicio13() {
    limpiarResultado();
    let name = prompt("Enter the student's name:");
    let attendance = parseFloat(prompt("Enter the student's attendance:"));
    let message = "";
    if (attendance >= 35) {
        message = name + " is in attendance category A.";
    } else if (attendance > 21 && attendance < 35) {
        message = name + " is in attendance category B.";
    } else if (attendance >= 0 && attendance < 21) {
        message = name + " is in attendance category C.";
    } else {
        message = "Invalid attendance value.";
    }
    document.getElementById("resultado").textContent = message;
}

// Exercise 14: Determine if a grade is passing
function ejercicio14() {
    limpiarResultado();
    let grade = parseFloat(prompt("Enter your grade:"));
    let message = "";
    if (grade < 75) {
        message = "You need to improve.";
    } else if (grade < 80) {
        message = "Good.";
    } else if (grade < 91) {
        message = "Very good.";
    } else if (grade <= 100) {
        message = "You have academic excellence.";
    } else {
        message = "Invalid grade entered.";
    }
    document.getElementById("resultado").textContent = message;
}

// Exercise 15: Perimeter of a rectangle
function ejercicio15() {
    limpiarResultado();
    let width = parseFloat(prompt("Enter the width of the rectangle:"));
    let height = parseFloat(prompt("Enter the height of the rectangle:"));
    let perimeter = 2 * (width + height);
    let message = "The perimeter of the rectangle is: " + perimeter;
    document.getElementById("resultado").textContent = message;
}