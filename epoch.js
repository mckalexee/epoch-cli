#!/usr/bin/env node

const [,, ...args] = process.argv

if(args.length === 0) {
  displayCurrentEpoch();
  return;
}

const input = args[0];
const inputNumber = Number(input);

if(!isNaN(inputNumber)) {
  convertEpochToDateString(inputNumber);
  return;
}

convertInputStringToEpoch(input);

/**
 * Displays the current epoch time
 */
function displayCurrentEpoch() {
  console.log(Math.floor(Date.now() / 1000));
}

/**
 * Takes an epoch time number and prints a human readable date
 * @param {number} epochTime 
 */
function convertEpochToDateString(epochTime) {
  const date = new Date(epochTime * 1000);
  console.log(date.toLocaleString());
}

/**
 * Takes the input and attempts to convert it to an epoch time number
 * @param {string} inputString 
 */
function convertInputStringToEpoch(inputString) {
  const date = new Date(inputString);

  if(isNaN(date.getDate())) {
    throw new Error(`Unable to convert ${inputString} to a date`);
  }

  console.log(Math.floor(date.getTime() / 1000));
}