const quotes = [
  '"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle." - Christian D. Larson',
  '"Success is not final, failure is not fatal: it is the courage to continue that counts." - Winston Churchill',
  '"Be the change that you wish to see in the world." - Mahatma Gandhi',
  '"The only way to do great work is to love what you do." - Steve Jobs',
  '"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart." - Helen Keller',
  '"Life is 10% what happens to us and 90% how we react to it." - Charles R. Swindoll',
  '"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt',
  '"Happiness is not something ready-made. It comes from your own actions." - Dalai Lama',
  '"Don\'t wait for opportunities, create them." - Roy T. Bennett',
  '"In the end, we will remember not the words of our enemies, but the silence of our friends." - Martin Luther King Jr.'
];

let h3 = document.querySelector('h3')
let quoteChoice = Math.floor(Math.random() * quotes.length)

h3.innerHTML = quotes[quoteChoice]
