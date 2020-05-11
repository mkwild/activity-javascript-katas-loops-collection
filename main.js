/** KATA 01 ⮕
***
*** Log the numbers from 1 to 20. (1, 2, 3,..., 19, 20)
***
**/

  console.log('%cKATA 1 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

  let counter = 1
  while (counter <= 20) {
    console.log(counter)
    counter += 1
  }

/** KATA 02 ⮕
***
*** Log the even numbers from 1 to 20. (2, 4, 6,...18,20)
***
***/

  console.log('%cKATA 02 RESULTS:', 'background: darkblue; color: white; font-weight: bold;') // These console.logs are just to help make the console log better organized and more readable


  let counter2 = 1
  while (counter2 <= 20) {
    if (counter2 % 2 == 0) {
      console.log(counter2)
    }
    counter2++
  }


/** KATA 03 ⮕
***
*** Log the odd numbers from 1 to 20. (1, 3, 5,...,17,19)
***
***/

  console.log('%cKATA 03 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
 

  let counter3 = 1
  while (counter3 <=20) {
    if (counter3 % 2 == 1) {
      console.log(counter3)
    }
    counter3++
  }


/** KATA 04 ⮕
***
*** Log the multiples of 5 up to 100. (5, 10, 15, ..., 95, 100)
***
***/

  console.log('%cKATA 04 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')


  let counter4 = 1
  while (counter4 <= 100) {
    if (counter4 % 5 == 0) {
      console.log(counter4)
    }
    counter4++
  }


/** KATA 05 ⮕
***
*** Log all numbers up to 100 that are perfect squares. (1, 4, 9, ..., 81, 100)
***
***/

  console.log('%cKATA 05 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')


  let counter5 = 1
  while (counter5 <= 100) {
    if ((Math.sqrt(counter5))%1 == 0) {
      console.log(counter5)
    }
    counter5++
  }


/** KATA 06 ⮕
***
*** Log the numbers counting backwards from 20 to 1. (20, 19, 18, ..., 2, 1)
***
***/

  console.log('%cKATA 06 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')


  let counter6 = 20
  while (counter6 > 0) {
    console.log(counter6)
    counter6--
  }


/** KATA 07 ⮕
***
*** Log the even numbers counting backwards from 20. (20, 18, 16, ..., 4, 2)
***
***/

  console.log('%cKATA 07 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')


  let counter7 = 20
  while (counter7 > 0) {
    if (counter7 % 2 == 0) {
      console.log(counter7)
    }
    counter7--
  }


/** KATA 08 ⮕
***
*** Log the odd numbers from 20 to 1, counting backwards. (19, 17, 15, ..., 3, 1)
***
***/

  console.log('%cKATA 08 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')


  let counter8 = 20
  while (counter8 > 0) {
    if (counter8 % 2 == 1) {
      console.log(counter8)
    }
    counter8--
  }


/** KATA 09 ⮕
***
*** Log the multiples of 5, counting down from 100. (100, 95, 90, ..., 10, 5)
***
***/

  console.log('%cKATA 09 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')


  let counter9 = 100
  while (counter9 > 0) {
    if (counter9 % 5 == 0) {
      console.log(counter9)
    }
    counter9--
  }


/** KATA 10 ⮕
***
*** Log the numbers that are perfect squares, counting down from 100. (100, 81, 64, ..., 4, 1)
***
***/

  console.log('%cKATA 10 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')


  let counter10 = 100
  while (counter10 > 0) {
    if ((Math.sqrt(counter10))%1 == 0) {
      console.log(counter10)
    }
    counter10--
  }




