# businessjs

A new finance library for javascript. Intended to improve the workflow of JavaScript developers who are also in the finance industry.
The package includes nice helper functions to quickly get values for ratio analysis, time value of money, managerial calculations etc.

> Currently version 1.x.x only has Time Value of Money

## To get started

```bash
npm install businessjs
```

## get CDN

```html
<script src="https://cdn.jsdelivr.net/npm/businessjs@1.2.1/build/index.min.js"></script>
```

This will give you the package available for use in any front-end or Node.js environment.

## Guide

### Time Value of money

Import syntax:

```js
import businessjs from 'businessjs';
```

In node environment:

```js
const businessjs = require('businessjs');
const tvm = businessjs.tvm;
```

## Browser support from node_modules

> Using the CDN is recommended though.

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="node_modules/businessjs/build/index.js"></script>
  </head>
  <body></body>
</html>
```

This should create the instance globally on the window

```html
<script>
  const tvm = businessjs.tvm;
</script>
```

# Time Value of Money

Methods

#### `futureValue = function(presentValue, interest, [numPeriods = 1, perPeriod = 1])`
  - Requires the present value and effective interest in decimal format and returns a future value based on a number of periods.
  - `numPeriods` defaults to 1 as in 1 year.
  - `perPeriod` The amount of times an interest rate is compounded defaults to 1.

#### `presentValue = function(futureValue, interest, [numPeriods = 1, perPeriod = 1])`
  - Requires the present value and interest in decimal format and returns a future value.
  - `numPeriods` defaults to 1 as in 1 year.
  - `perPeriod` The amount of times an interest rate is compounded defaults to 1.

#### `numPeriods = function(presentValue, futureValue, interest, [perPeriod = 1])`
  - Returns the number of periods that an investment / loan would take to realise, pay off. 
  - `perPeriod` The amount of times an interest rate is compounded defaults to 1.

#### `interest = function(presentValue, futureValue, [numPeriods = 1, perPeriod = 1])`
  - Returns the interest rate of a given investment/loan.
  - `numPeriods` defaults to 1 as in 1 year.
  - `perPeriod` The amount of times an interest rate is compounded defaults to 1.

#### `futureValueAnnuityDue = function(payment, interest, [numPeriods = 1, perPeriod = 1])`
  - Returns the future value of an annuity paid at the end of every cycle with an effective interest rate.
  - `numPeriods` defaults to 1 as in 1 year.
  - `perPeriod` The amount of times an interest rate is compounded defaults to 1.

#### `futureValueAnnuityAdvance = function(payment, interest, [numPeriods = 1, perPeriod = 1])`
  - Returns the future value of an annuity paid at the beginning of every cycle with an effective interest rate.  
  - `numPeriods` defaults to 1 as in 1 year.
  - `perPeriod` The amount of times an interest rate is compounded defaults to 1.
  
#### `presentValueAnnuityDue = function(payment, interest, [numPeriods = 1, perPeriod = 1])`
  - Returns the present value of an annuity paid at the end of every cycle with an effective interest rate.
  - `numPeriods` defaults to 1 as in 1 year.
  - `perPeriod` The amount of times an interest rate is compounded defaults to 1.

#### `presentValueAnnuityAdvance = function(payment, interest, [numPeriods = 1, perPeriod = 1])`
  - Returns the present value of an annuity paid at the beginning of every cycle with an effective interest rate.
  - `numPeriods` defaults to 1 as in 1 year.
  - `perPeriod` The amount of times an interest rate is compounded defaults to 1.

#### `effectiveRate = function(nominalRate, perPeriod)`
  - Returns the annual effective interest rate from a nominal rate and per-period compund amount.
  - Useful because all other functions use effective rate, eg.

  ```js
  const tvm = require('businessjs').tvm;

  // Convert the monthly nominal rate to yearly effective inline
  tvm.futureValue(100, tvm.effectiveRate(0.1, 12), 1, 1);
  ```

#### `amortisation = function(presentValue, interest, [numPeriods=1, perPeriod=12])`
  - Returns an array of objects that have the following shape:
  ```js
  {
    period,
    payment,
    interestPortion,
    principlePortion,
    totalBalance,
    principleBalance
  }
  ```
  - Returns the tabular data of an amortisation with breakdown of interest and principle amounts.
  - `numPeriods` defaults to 1 as in 1 year.
  - `perPeriod` The amount of times an interest rate is compounded defaults to 12 payments per year.


These are just the first few methods in version 1, Documentation will be updated as version improves.
