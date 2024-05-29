import "./styles.css";

// import {postcodeValidator } from "postcode-validator";
import { lookup } from "country-code-lookup";
import { countryList } from "./countries";

const email = document.getElementById("email");
const country = document.getElementById("country");
const zip = document.getElementById("zip");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm-pword");
const submit = document.getElementById("submit-btn");
const form = document.querySelector("form");
const emailError = document.getElementById("email-error");
const countryError = document.getElementById("country-error");
const zipError = document.getElementById("zip-error");

email.addEventListener("input", () => {
    const format = /[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+/;
    if (!email.value.match(format)) {
        emailError.textContent =
            "Enter email in correct format (johndoe@gmail.com)";
    } else {
        emailError.textContent = "";
    }
});

country.addEventListener("input", () => {
    const loc = country.value;
    if (!countryList.includes(loc)) {
        country.setCustomValidity("invalid");
        countryError.textContent = "Please enter valid country";
    } else {
        country.setCustomValidity("");
        countryError.textContent = "";
    }
});

zip.addEventListener("input", () => {
    if (!postcodeValidator(zip.input, lookup.byCountry(country.value))) {
        zip.setCustomValidity("invalid");
        zipError.textContent = "Please enter valid zip code";
    }
});

form.addEventListener("submit", (event) => {
    if (!email.value) {
        emailError.textContent = "Please enter an email address";
    } else if (!email.validity.valid) {
        emailError.textContent = "";
    }
    event.preventDefault();
});
