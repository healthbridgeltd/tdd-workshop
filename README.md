# TDD Workshop

Please clone the repo and complete the exercise working in pairs!


## What is TDD?

<img src="https://cdn-images-1.medium.com/max/2400/1*W93Ke-ezhfWJ6cTbmCdaPQ.jpeg" alt="" />

> Test-driven development (TDD) is a software development process that relies on the repetition of a very short development cycle: requirements are turned into very specific test cases, then the software is improved to pass the new tests, only. This is opposed to software development that allows software to be added that is not proven to meet requirements.


## Why using TDD?

* Develop a whole other level of confidence.
* Freedom to be creative with no fear of breaking things.
* Design by contract.
* Avoid superfluous code.
* Code coverage is guaranteed from the start!


## Red / Green / Refactor 

<img src="https://marcabraham.files.wordpress.com/2012/04/06_red_green_refactor.jpg" alt="" />

**RED: Write a failing test.**

Requires understanding the story well enough to write a test for what you expect (design by contract!). The test should fail initially because there is no production code yet, hence RED.


**GREEN: Make the failing test pass.**

Write only the bare minimum code required to make the failing test pass while ensuring your previous tests still pass (no regressions). 


**REFACTOR: Refactor the code you wrote.**

Is there any chance to make your code simpler? Can some tidy ups be made?



## Time to get our hands dirty with some code!

We need to implement a lambda function that:

* Will request a random number between 1 and 100. You can use an online service like http://numbersapi.com/random?min=1&max=100&json
* If the number is multiple of 3, the lambda function should return `Fizz`.
* If the number is multiple of 5, it should return `Buzz`.
* If the number is both multiple of 3 and 5, it should return `Fizzbuzz`.
* If none of the above, return simply the number.
* If there is any issue with the API, an error must be thrown.
* BONUS: the XYZ team should be emailed about the error using SES (optional step, only if you have time).


## Considerations

* Work in pairs using the roles of driver and navigator. Swap every 2 to 5 minutes.
* Assume the API may fail. Cover failures.
* Use modern javascript for your implementation (async/await when needed).




