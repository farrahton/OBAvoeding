// import { selector } from "./fetch.js";
import { checkState } from "../states.js";

// render data
export function render(data, selector) {
  console.log(selector)
  const section = document.querySelector(`main ${selector} ul`);
  const results = data.results;
  results.forEach((item, i) => {
    const html = `
            <li>
              <img src="${
                item.coverimages ? item.coverimages[1] : './OBA/images/book-placeholder.jpeg'
              }">
              <h4>${item.titles[0]}</h4>
            </li>
          `;
    section.insertAdjacentHTML('beforeend', html);
  });

  checkState('resultsLoaded');
}