// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
    fetch("/data").then(response => response.json()).then((greetingObj) => {
        const newGreeting = document.getElementById("greeting-container");
        newGreeting.innerHTML = ' ';
        newGreeting.appendChild(createListElement(greetingObj));
    });

  //const greetings =
    //  ['I plan on joining the millitary after college', 'I didnt start programming until i got to college'];

  // Pick a random greeting.
  //const greetingPromise = fetch("/data");

  // Add it to the page.
  //const greetingContainer = document.getElementById('greeting-container');
  //greetingContainer.innerText = greeting;

  //greetingPromise.then(handleGreeting);
}

function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}

/*function handleGreeting (response) {
    const textPromise = response.text();
    
    textPromise.then(addGreeting);
}

function addGreeting (greeting) {
    const greetingContainer = document.getElementById('greeting-container');
    greetingContainer.innerHTML = greeting;
}*/

