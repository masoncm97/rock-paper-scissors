// Step 2: Add Computer Choice Generation
// Now we can make the computer play against us!

// Function to determine who wins (from Step 1)
function determineWinner(playerChoice: string, computerChoice: string): string {
  if (playerChoice === computerChoice) return 'tie'
  
  if (playerChoice === 'rock' && computerChoice === 'scissors') return 'player'
  if (playerChoice === 'paper' && computerChoice === 'rock') return 'player'
  if (playerChoice === 'scissors' && computerChoice === 'paper') return 'player'
  
  return 'computer'
}

// NEW: Function to generate computer's choice
function getComputerChoice(): string {
  const choices = ['rock', 'paper', 'scissors']
  const randomIndex = Math.floor(Math.random() * 3)
  return choices[randomIndex]
}

// NEW: Function to play a complete game
function playGame(playerChoice: string) {
  const computerChoice = getComputerChoice()
  const result = determineWinner(playerChoice, computerChoice)
  
  console.log(`You chose: ${playerChoice}`)
  console.log(`Computer chose: ${computerChoice}`)
  console.log(`Result: ${result}`)
  console.log('---')
}

// Test our complete game logic
console.log('Testing complete game:')
playGame('rock')
playGame('paper')
playGame('scissors')

// You can also test this in the browser console by calling:
// playGame('rock')
// playGame('paper')
// playGame('scissors') 