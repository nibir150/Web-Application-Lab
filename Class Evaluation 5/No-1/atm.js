let balance = 10000;
let currentAction = null;

const outputDiv = document.getElementById('output');
const inputSection = document.getElementById('input-section');
const inputField = document.getElementById('input-field');
const checkBalanceBtn = document.getElementById('check-balance-btn');
const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');
const exitBtn = document.getElementById('exit-btn');
const submitBtn = document.getElementById('submit-button');

function displayOutput(message) {
  outputDiv.textContent = message;
}

function showInputSection(action) {
  currentAction = action;
  inputField.value = '';
  inputSection.style.display = 'block';
}

function hideInputSection() {
  inputSection.style.display = 'none';
  currentAction = null;
}

function checkBalance() {
  displayOutput(`Your current balance is $${balance}`);
}

function depositMoneyPrompt() {
  displayOutput('Enter the amount to deposit:');
  showInputSection('deposit');
}

function withdrawMoneyPrompt() {
  displayOutput('Enter the amount to withdraw:');
  showInputSection('withdraw');
}

function processInput() {
  const amountStr = inputField.value;
  const amount = parseFloat(amountStr);

  if (isNaN(amount) || amount <= 0) {
    displayOutput('Invalid input. Please enter a positive number.');
    return;
  }

  if (currentAction === 'deposit') {
    balance += amount;
    displayOutput(`Deposited $${amount}. Your new balance is $${balance}`);
  } else if (currentAction === 'withdraw') {
    if (amount <= balance) {
      balance -= amount;
      displayOutput(`Withdrew $${amount}. Your new balance is $${balance}`);
    } else {
      displayOutput('Insufficient funds.');
    }
  }

  hideInputSection();
}

function exitATM() {
  displayOutput('Thank you for using the ATM. Goodbye!');
  // You might want to disable further interactions here in a more complex scenario
}

// Event Listeners
checkBalanceBtn.addEventListener('click', checkBalance);
depositBtn.addEventListener('click', depositMoneyPrompt);
withdrawBtn.addEventListener('click', withdrawMoneyPrompt);
exitBtn.addEventListener('click', exitATM);
submitBtn.addEventListener('click', processInput);