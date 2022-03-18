// keys:

// my own= 'cdb8415c172ec6178b63451e222891a6' 
// public='1e19898c87464e239192c8bfe422f280'
// secret='4289fec4e962a33118340c888699438d'

import { render } from "./render.js";
import { checkState } from "./states.js";

export function fetchOBA(topic, type, selector) {

// fetching data
const cors = 'https://cors-anywhere.herokuapp.com/';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const key = '1e19898c87464e239192c8bfe422f280';
const secret = '4289fec4e962a33118340c888699438d';
const refine = `&refine=true`
const detail = 'Default';
const url = `${cors}${endpoint}${topic}${refine}${type}&authorization=${key}&detaillevel=${detail}&output=json`;

const config = {
  Authorization: `Bearer ${secret}`
};

checkState('loading');

fetch(url, config)
  .then(response => {
    return response.json();
  })
  .then(data => {
    render(data, selector);
    console.log(data)
  })
  .catch(err => {
    console.log(err)
    checkState('error');
  });
} 

