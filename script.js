const firstName = "Jessica";
const age = 32;
// could be "let"
const birthday = "July 15";
const pineapplePizza = true;
const lifeEvents = [
  "I was born in Sterling Heights, Michigan.",
  "I went to Oakland University",
  "I have two dogs",
  "I'm in a Grand Circus Bootcamp",
];

if (pineapplePizza) {
  console.log(
    `My name is ${firstName} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}`
  );
} else {
  console.log(
    `My name is ${firstName} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}
// initialize at 0 because the index of arrays starts at 0

let counter = 0;
// can only use "let" instead of const because it is going to change
// put ALL variables at the top of the page instead in the middle

while (true) {
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  if (randomNumber !== 5) {
    counter = counter + 1;
    // can just be "counter++;"
    console.log(`${randomNumber} !== 5`);
  } else {
    counter++;
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}

// EXTENDED CHALLENGE:

const hours = 50;
const wage = 10;

if (hours <= 40) {
  const pay = hours * wage;
  const weeks = Math.floor(1000000 / pay);
  console.log(
    `Your paycheck comes out to $${pay}. It will take ${weeks} weeks to make $1,000,000)`
  );
} else {
  const pay = wage * 40 + (hours - 40) * (wage * 1.5);
  const weeks = Math.floor(1000000 / pay);
  console.log(
    `Your paycheck comes out to $${
      wage * 40 + (hours - 40) * (wage * 1.5)
    }. It will take ${weeks} to make $1,000,000)`
  );
}
