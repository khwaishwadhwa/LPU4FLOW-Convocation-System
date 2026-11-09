const robeSize = document.getElementById("robeSize");

const guestPasses = document.getElementById("guestPasses");

const registrationForm =
    document.querySelector("#registration form");

const guestButton =
    document.querySelector("#guest button");

const depositAmount =
    document.querySelector("#robe p");




const registrationMessage = document.createElement("p");

registrationForm.appendChild(registrationMessage);

const guestMessage = document.createElement("p");

guestButton.after(guestMessage);



robeSize.addEventListener("change", function () {

    const selectedSize = robeSize.value;

    if (selectedSize === "") {

        depositAmount.textContent =
            "Please select your robe size.";

    }

    else {

        depositAmount.textContent =
            "Security Deposit: ₹1000";

    }

});




registrationForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const studentName =
        document.getElementById("name").value.trim();

    const registrationNumber =
        document.getElementById("regNumber").value.trim();

    const department =
        document.getElementById("department").value;

    const cgpaInput =
        document.getElementById("cgpa").value;

    const cgpa = Number(cgpaInput);

    const attendance =
        document.querySelector(
            ".attendance-label input[type='checkbox']"
        ).checked;




    if (studentName === "") {

        alert("Please enter your name.");

        return;

    }



    if (registrationNumber === "") {

        alert("Please enter your registration number.");

        return;

    }



    if (department === "") {

        alert("Please select your department.");

        return;

    }




    if (cgpaInput === "" || cgpa < 0 || cgpa > 10) {

        alert("Please enter CGPA between 0 and 10.");

        return;

    }


 

    if (!attendance) {

        alert("Please confirm your attendance.");

        return;

    }




    registrationMessage.textContent =
        "Registration submitted successfully!";

    registrationMessage.style.color = "green";

    alert("Welcome " + studentName +
        "! Your registration is successful.");

    registrationForm.reset();

});




guestButton.addEventListener("click", function () {



guestButton.addEventListener("click", function () {

    const numberOfGuests = Number(guestPasses.value);

    if (numberOfGuests === 0) {

        guestMessage.textContent =
            "You have not requested any guest passes.";

        guestMessage.style.color = "orange";

    }

    else if (numberOfGuests === 1) {

        guestMessage.textContent =
            "Your request for 1 guest pass has been submitted successfully!";

        guestMessage.style.color = "green";

    }

    else if (numberOfGuests === 2) {

        guestMessage.textContent =
            "Your request for 2 guest passes has been submitted successfully!";

        guestMessage.style.color = "green";

    }

    else {

        guestMessage.textContent =
            "Maximum 2 guest passes are allowed.";

        guestMessage.style.color = "red";

    }

});

});




console.log(
    "LPU4FLOW Convocation Management System Loaded Successfully!"
);


const cgpaInput = document.getElementById("cgpa");

const cgpaMessage = document.getElementById("cgpaMessage");

cgpaInput.addEventListener("input", function () {

    const cgpa = Number(cgpaInput.value);

    if (cgpaInput.value === "") {

        cgpaMessage.textContent = "";

    }

    else if (cgpa < 0 || cgpa > 10) {

        cgpaMessage.textContent =
            "Please enter CGPA between 0 and 10.";

        cgpaMessage.style.color = "red";

    }

    else {

        cgpaMessage.textContent = "Valid CGPA!";

        cgpaMessage.style.color = "green";

    }

});



const nameInput = document.getElementById("name");

const nameMessage = document.getElementById("nameMessage");

nameInput.addEventListener("input", function () {

    const studentName = nameInput.value.trim();

    if (studentName === "") {

        nameMessage.textContent = "";

    }

    else if (studentName.length < 4) {

        nameMessage.textContent = "Name is too short!";

        nameMessage.style.color = "red";

    }

    else {

        nameMessage.textContent = "Valid student name!";

        nameMessage.style.color = "green";

    }

});

