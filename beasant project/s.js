// // script.js

// // பின்வரும் எளிதாக புரியும் மாற்று குறியீடு உள்ளபடி Story-ன் சில பகுதிகளை காட்டுகிறது.

// let storyText = document.getElementById('story-text');
// let choices = document.getElementById('choices');

// // இந்த function பயன்படுத்தியபோது பயனர் எதைத் தேர்வு செய்தாலும், அதன் அடிப்படையில் கதையை மாற்றுகிறது.
// function makeChoice(choice) {
//   if (choice === 'explore') {
//     storyText.textContent = "You decide to explore your surroundings. You find a strange glowing rock. Do you touch it?";
//     choices.innerHTML = `
//       <button class="choice-btn" onclick="makeChoice('touch')">Touch the glowing rock</button>
//       <button class="choice-btn" onclick="makeChoice('leave')">Leave it alone and move on</button>
//     `;
//   } else if (choice === 'check') {
//     storyText.textContent = "You look into the mirror and see that you have strange markings on your skin. Do you try to investigate further?";
//     choices.innerHTML = `
//       <button class="choice-btn" onclick="makeChoice('investigate')">Investigate the markings</button>
//       <button class="choice-btn" onclick="makeChoice('ignore')">Ignore them and go outside</button>
//     `;
//   } else if (choice === 'touch') {
//     storyText.textContent = "As soon as you touch the glowing rock, a surge of energy flows through your body. You feel invincible! What do you do now?";
//     choices.innerHTML = `
//       <button class="choice-btn" onclick="makeChoice('fight')">Go fight crime in the city</button>
//       <button class="choice-btn" onclick="makeChoice('test')">Test your powers first</button>
//     `;
//   } else if (choice === 'leave') {
//     storyText.textContent = "You decide to leave the rock alone. You feel like something's missing, but you continue your day.";
//     choices.innerHTML = `
//       <button class="choice-btn" onclick="makeChoice('end')">End story</button>
//     `;
//   } else if (choice === 'investigate') {
//     storyText.textContent = "You investigate the markings and suddenly, your body starts glowing! You have gained super strength!";
//     choices.innerHTML = `
//       <button class="choice-btn" onclick="makeChoice('fight')">Use your strength to fight villains</button>
//       <button class="choice-btn" onclick="makeChoice('train')">Train to control your powers</button>
//     `;
//   } else if (choice === 'ignore') {
//     storyText.textContent = "You ignore the markings and leave the house, but you feel something is off. You walk into the street and see a bank robbery!";
//     choices.innerHTML = `
//       <button class="choice-btn" onclick="makeChoice('fight')">Stop the robbery</button>
//       <button class="choice-btn" onclick="makeChoice('run')">Run away and call the cops</button>
//     `;
//   } else if (choice === 'fight') {
//     storyText.textContent = "You charge into battle and stop the robbers with your newfound powers. You feel unstoppable!";
//     choices.innerHTML = `
//       <button class="choice-btn" onclick="makeChoice('hero')">Embrace your new life as a hero</button>
//       <button class="choice-btn" onclick="makeChoice('villain')">Use your powers to take over the world</button>
//     `;
//   } else if (choice === 'test') {
//     storyText.textContent = "You spend the day testing your powers. You can fly and have super strength!";
//     choices.innerHTML = `
//       <button class="choice-btn" onclick="makeChoice('hero')">Decide to become a hero</button>
//       <button class="choice-btn" onclick="makeChoice('villain')">Decide to use your powers for personal gain</button>
//     `;
//   } else if (choice === 'train') {
//     storyText.textContent = "You spend years training and mastering your powers. You become an unstoppable force!";
//     choices.innerHTML = `
//       <button class="choice-btn" onclick="makeChoice('hero')">Become a legendary hero</button>
//       <button class="choice-btn" onclick="makeChoice('villain')">Turn your power into a dictatorship</button>
//     `;
//   } else if (choice === 'run') {
//     storyText.textContent = "You run and call the cops. They handle the situation, but you feel like you missed your chance to be a hero.";
//     choices.innerHTML = `
//       <button class="choice-btn" onclick="makeChoice('end')">End story</button>
//     `;
//   } else if (choice === 'end') {
//     storyText.textContent = "The end. You've lived a quiet, normal life, but you'll always wonder what could have been.";
//     choices.innerHTML = "";
//   } else if (choice === 'hero') {
//     storyText.textContent = "You decide to dedicate your life to fighting crime, becoming a beacon of hope for the world!";
//     choices.innerHTML = "";
//   } else if (choice === 'villain') {
//     storyText.textContent = "You use your powers to take control of the world, ruling with an iron fist!";
//     choices.innerHTML = "";
//   }
// }
function sidebar(){
  let menu=document.getElementById("side menu")
  menu.style.left=menu.style.left==="0px" ? "-200px":"0px";
}
