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

  function reverseString(str: string): string {
    if (str.length === 0) {
      return str;
    } else {
      return reverseString(str.slice(1)) + str[0];
    }
  }
  
  function findNumericPalindrome(input: number, steps = 0): { results: number, steps: number } {
    const numStr = input.toString();
    if (numStr === reverseString(numStr)) {
      return { results: input, steps };
    } else {
      const reversedStr = reverseString(numStr);
      const nextNumber = input + parseInt(reversedStr, 10);
      return findNumericPalindrome(nextNumber, steps + 1);
    }
  }
  
  const inputNumber = 87;
  const { results, steps } = findNumericPalindrome(inputNumber);
  console.log(`Palindrome: ${results}`);
  console.log(`Number of steps: ${steps}`);
  

  // function isPalindrome(num: number): boolean {
  //   const numStr = num.toString();
  //   const reversedStr = numStr.split('').reverse().join('');
  //   return numStr === reversedStr;
  // }
  
  // function findNumericPalindrome(input: number): { results: number, steps: number } {
  //   let steps = 0;
  //   let currentNumber = input;
  
  //   while (!isPalindrome(currentNumber)) {
  //     const numStr = currentNumber.toString();
  //     const reversedStr = numStr.split('').reverse().join('');
  //     currentNumber += parseInt(reversedStr, 10);
  //     steps++;
  //   }
  
  //   return { results: currentNumber, steps };
  // }
  
  // const inputNumber = 87; 
  // const { results, steps } = findNumericPalindrome(inputNumber);
  // console.log(`Palindrome: ${results}`);
  // console.log(`Number of steps: ${steps}`);
  
  

/*Напишіть функцію, яка приймає масив унікальних елементів і генерує всі можливі перестановки цього масиву. 
Використовуйте рекурсію для знаходження всіх перестановок. Наприклад, якщо вхідний масив[1, 2, 3],
 функція має повернути масив, що містить[1, 2, 3],[1, 3, 2],[2, 1, 3],[2, 3, 1],[2, 3, 1],[3, 1, 2]і[3, 2, 1].*/


 function generatePermutations<T>(arr: T[]): T[][] {
  if (arr.length === 0) {
    return [[]];
  }

  const permutations: T[][] = [];

  function permute(remainingElem: T[],  currentPerm: T[] = []) {
    if (remainingElem.length === 0) {
      permutations.push(currentPerm);
      return;
    }

    for (let i = 0; i < remainingElem.length; i++) {
      const newCurrentPerm = currentPerm.concat(remainingElem[i]);
      const newremainingElem = remainingElem.slice(0, i).concat(remainingElem.slice(i + 1));
      permute(newremainingElem, newCurrentPerm);
    }
  }

  permute(arr);

  return permutations;
}


const uniqueElements = [1, 2, 3];
const result = generatePermutations(uniqueElements);
console.log(result);


//   const permutations: T[][] = [];

//   for (let i = 0; i < arr.length; i++) {
//     const currentElement = arr[i];
//     const remainingElements = [...arr.slice(0, i), ...arr.slice(i + 1)];
//     const remainingPermutations = generatePermutations(remainingElements);

//     for (const subPermutation of remainingPermutations) {
//       permutations.push([currentElement, ...subPermutation]);
//     }
//   }

//   return permutations;
// }
// const uniqueElements = [1, 2, 3];
// const result = generatePermutations(uniqueElements);
// console.log(result);
