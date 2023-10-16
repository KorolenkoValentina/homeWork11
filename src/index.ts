/*Попрацюємо з числовим паліндромом. Числовий паліндром — це натуральне число, яке читається зліва направо і справа наліво однаково. 
Інакше кажучи, відрізняється симетрією запису (розташування цифр), причому число знаків може бути як парним, так і непарним.
 Але. Паліндром можна отримати як результат операцій над іншими числами. 
 Візьмемо будь-яке натуральне число і складемо його зі зворотним числом, тобто записаним тими самими цифрами, 
 але у зворотному порядку. Проробимо ту саму дію з сумою, що вийшла, і будемо повторювати її доти, доки не утвориться паліндром. 
 Іноді достатньо зробити всього один крок (наприклад, 312 + 213 = 525), але, як правило, потрібно не менше двох. 
 Скажімо, число 96 породжує паліндром 4884 тільки на четвертому кроці.... 
 Вам потрібно написати функцію, яка повертатиме об'єкт, де буде властивістьresultі це буде паліндром,
  і властивістьsteps— це число викликів до знаходження паліндрома. Для того, щоб перевірити себе використовуйте число 196.
  Це так зване Lychrel number — число яке немає поліндрому*/



  function isPalindrome(num: number): boolean {
    const numStr = num.toString();
    const reversedStr = numStr.split('').reverse().join('');
    return numStr === reversedStr;
  }
  
  function findNumericPalindrome(input: number): { results: number, steps: number } {
    let steps = 0;
    let currentNumber = input;
  
    while (!isPalindrome(currentNumber)) {
      const numStr = currentNumber.toString();
      const reversedStr = numStr.split('').reverse().join('');
      currentNumber += parseInt(reversedStr, 10);
      steps++;
    }
  
    return { results: currentNumber, steps };
  }
  
  const inputNumber = 87; 
  const { results, steps } = findNumericPalindrome(inputNumber);
  console.log(`Palindrome: ${results}`);
  console.log(`Number of steps: ${steps}`);
  
  

/*Напишіть функцію, яка приймає масив унікальних елементів і генерує всі можливі перестановки цього масиву. 
Використовуйте рекурсію для знаходження всіх перестановок. Наприклад, якщо вхідний масив[1, 2, 3],
 функція має повернути масив, що містить[1, 2, 3],[1, 3, 2],[2, 1, 3],[2, 3, 1],[2, 3, 1],[3, 1, 2]і[3, 2, 1].*/


function generatePermutations<T>(arr: T[]): T[][] {
  if (arr.length === 0) {
    return [[]]; 
  }

  const permutations: T[][] = [];

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    const remainingElements = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const remainingPermutations = generatePermutations(remainingElements);

    for (const subPermutation of remainingPermutations) {
      permutations.push([currentElement, ...subPermutation]);
    }
  }

  return permutations;
}
const uniqueElements = [1, 2, 3];
const result = generatePermutations(uniqueElements);
console.log(result);
