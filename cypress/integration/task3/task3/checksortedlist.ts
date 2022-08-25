import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import foothillSolutionActions from "@pageObjects/foothillSolution/foothillSolutionAction";
import foothillSolutionAssertions from "@pageObjects/foothillSolution/foothillSolutionAssertions";
//objects creation
const foothillActions = new foothillSolutionActions();
const foothillAssertions = new foothillSolutionAssertions();
//constants declaration
let myNumbersArray: Number[];
let number1: string = "";
let number2: Number;
let intArr2 = [];
let myFunc = (num) => Number(num);
let sortedArray = [];
Given("User go to list page", () => {
  cy.visit("https://sortablejs.github.io/Sortable/#simple-list");
});

When("User check the list", () => {
  cy.get("#example1").invoke("text").as("clickedTitle"); //get all elements in the list
  cy.get("@clickedTitle").then((clickedTitle) => {
    let cells = String(clickedTitle); //convert them into strings
    let arr: string[] = cells.split("\n"); //split them into array of strings

    for (let i = 1; i < 7; i++) {
      number1 = arr[i].replace(/\D/g, ""); //to get the number(i) from "Task i"
      number2 = parseInt(number1); //convert the string into number
      var intArr = Array.from(String(number2), myFunc); //number to array
      intArr2.push(i);
    }
  });
  sortedArray = intArr2.sort();
});
Then("The list should be sorted", () => {
  foothillAssertions.checkTheSortedList(intArr2, sortedArray);
});
