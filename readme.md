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
<script src="https://cdn.jsdelivr.net/npm/businessjs@1.1.1/build/index.min.js"></script>
```

This will give you the package available for use in any front-end or Node.js environment.

## Guide

### Time Value of money

```js
const businessjs = require('businessjs');
const tvm = businessjs.tvm;

// Get present values of ordinary annuities.
const futureValue = 310.58;
const interest = 0.12;
const numPeriods = 10;
// Not required if not compunding at different interval
const perPeriod = 1;

tvm.presentValue(futureValue, interest, numPeriods);

// Get present values of ordinary annuities that compound monthly.
const futureValue = 330;
const interest = 0.12;
const numPeriods = 10;
const perPeriod = 12;

tvm.presentValue(futureValue, interest, numPeriods);

// Get future values of ordinary annuities.
const presentValue = 100;
const interest = 0.12;
const numPeriods = 10;
// Not required if not compunding at different interval
const perPeriod = 1;

tvm.futureValue(presentValue, interest, numPeriods);

// Get future values of ordinary annuities.
const presentValue = 100;
const interest = 0.12;
const numPeriods = 10;
// Not required if not compunding at different interval
const perPeriod = 1;

tvm.futureValue(presentValue, interest, numPeriods);

// Get period of formulae
const presentValue = 100;
const futureValue = 310.58;
const interest = 0.12;
const perPeriod = 1;

tvm.numPeriods(presentValue, futureValue, interest, perPeriod);

// Get interest value of formula in decimal.
const presentValue = 10000;
const futureValue = 142100000;
const numPeriod = 39.5;
const perPeriod = 1;

tvm.interest(presentValue, futureValue, numPeriod, perPeriod);

// Get future values of ordinary annuities due at end.
const payment = 100;
const interest = 0.12;
const numPeriods = 3;
const perPeriod = 1;

tvm.futureValueAnnuityDue(payment, interest, numPeriods, perPeriod);

// Get present values of ordinary annuities payable in advance.
const payment = 100;
const interest = 0.12;
const numPeriods = 3;
const perPeriod = 1;

tvm.futureValueAnnuityAdvance(payment, interest, numPeriods, perPeriod);

// Get present values of ordinary annuities due.
const payment = 100;
const interest = 0.12;
const numPeriods = 3;
const perPeriod = 1;

tvm.presentValueAnnuityDue(payment, interest, numPeriods, perPeriod);

// Get present values of ordinary annuities in advance.
const payment = 100;
const interest = 0.12;
const numPeriods = 3;
const perPeriod = 1;

tvm.presentValueAnnuityAdvance(payment, interest, numPeriods, perPeriod);

// Get effective yearly rate from a nominal rate.
const nominalRate = 0.06;
const perPeriod = 12;

tvm.effectiveRate(nominalRate, perPeriod);
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

These are just the first few methods in version 1, Documentation will be updated as version improves.
