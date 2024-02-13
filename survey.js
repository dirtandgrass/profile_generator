
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const promptsAndAnswers = [
  { prompt: "What's your name? Nicknames are also acceptable :)"},
  { prompt: "What's an activity you like doing?"},
  { prompt: "What do you listen to while doing that?"},
  { prompt: "Which meal is your favourite (eg: dinner, brunch, etc.)"},
  { prompt: "What's your favourite thing to eat for that meal?"},
  { prompt: "Which sport is your absolute favourite?"},
  { prompt: "What is your superpower? In a few words, tell us what you are amazing at!"}
];

const askQuestions = (i = 0) => {
  if (i === promptsAndAnswers.length) { // base case
    rl.close();
    return;
  }

  rl.question(promptsAndAnswers[i].prompt, (answer) => {
    if (answer.trim() === '') { // make sure user enters at least something
      console.log('Please enter a valid response');
      askQuestions(i); // repeat question
    } else {
      promptsAndAnswers[i].answer = answer;
      askQuestions(++i); // advance to next question
    }
  });

};

askQuestions(); // start asking questions

rl.on('close', () => {
  const a  = promptsAndAnswers.map((prompt) => prompt.answer); // shorter answers for code legibility
  console.log(`${a[0]} loves listening to ${a[2]} while ${a[1]}, devouring ${a[3]} for ${a[4]}, prefers ${a[5]} over any other sport, and is amazing at ${a[6]}.`);
});
