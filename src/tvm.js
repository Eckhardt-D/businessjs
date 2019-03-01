const TVM = function() {};

/**
 * Returns the future value of a compounding or simple amount
 * @param {Number} presentValue The present value of the amount
 * @param {Number} interest The interest amount in decimal
 * @param {Number} [numPeriods=1] The number of periods usually years
 * @param {Number} [perPeriod=1] How many times interest compounds in a period
 */
TVM.prototype.futureValue = function(presentValue, interest, numPeriods = 1, perPeriod = 1) {
  return round(presentValue * Math.pow(1 + interest / perPeriod, numPeriods * perPeriod), 2);
};

/**
 * Returns the present value of a compounding or simple amount
 * @param {Number} futureValue The future value of the amount
 * @param {Number} interest The interest amount in decimal
 * @param {Number} [numPeriods=1] The number of periods usually years
 * @param {Number} [perPeriod=1] How many times interest compounds in a period
 */
TVM.prototype.presentValue = function(futureValue, interest, numPeriods = 1, perPeriod = 1) {
  return round(futureValue / Math.pow(1 + interest / perPeriod, numPeriods * perPeriod), 2);
};

/**
 * Returns the number of periods required for a specific amount and rate
 * @param {Number} presentValue The present value of the amount
 * @param {Number} futureValue The future value of the amount
 * @param {Number} interest The interest amount in decimal
 * @param {Number} [perPeriod=1] How many times interest compounds in a period
 */
TVM.prototype.numPeriods = function(presentValue, futureValue, interest, perPeriod = 1) {
  return round((Math.log(futureValue) - Math.log(presentValue)) / Math.log(1 + interest / perPeriod), 4);
};

/**
 * Returns the number of periods required for a specific amount and rate
 * @param {Number} presentValue The present value of the amount
 * @param {Number} futureValue The future value of the amount
 * @param {Number} [numPeriods=1] The number of periods usually years
 * @param {Number} [perPeriod=1] How many times interest compounds in a period
 */
TVM.prototype.interest = function(presentValue, futureValue, numPeriods = 1, perPeriod = 1) {
  return round(Math.pow(futureValue / presentValue, 1 / (numPeriods * perPeriod)) - 1, 6);
};

/**
 * Returns the future value of a compounding or simple amount
 * @param {Number} interest The interest amount in decimal
 * @param {Number} payment The amount paid at the end of every payment cycle
 * @param {Number} [numPeriods=1] The number of periods usually years
 * @param {Number} [perPeriod=1] How many times interest compounds in a period
 */
TVM.prototype.futureValueAnnuityDue = function(payment, interest, numPeriods = 1, perPeriod = 1) {
  return round(payment * ((Math.pow(1 + interest, numPeriods * perPeriod + 1) - 1) / (interest / perPeriod) - 1), 2);
};

/**
 * Returns the future value of a compounding or simple amount
 * @param {Number} payment The amount paid at the beginning of every payment cycle
 * @param {Number} [numPeriods=1] The number of periods usually years
 * @param {Number} [perPeriod=1] How many times interest compounds in a period
 */
TVM.prototype.futureValueAnnuityAdvance = function(payment, interest, numPeriods = 1, perPeriod = 1) {
  return round(payment * ((Math.pow(1 + interest / perPeriod, numPeriods * perPeriod) - 1) / (interest / perPeriod)), 2);
};

/**
 * Returns the present value of a compounding or simple amount
 * @param {Number} interest The interest amount in decimal
 * @param {Number} payment The amount paid at the end of every payment cycle
 * @param {Number} [numPeriods=1] The number of periods usually years
 * @param {Number} [perPeriod=1] How many times interest compounds in a period
 */
TVM.prototype.presentValueAnnuityDue = function(payment, interest, numPeriods = 1, perPeriod = 1) {
  let newInterest = interest / perPeriod;
  let discount = 1 / Math.pow(1 + newInterest, 2);
  let ratio = (1 - discount) / newInterest + 1;
  return 100 * ratio;
};

/**
 * Returns the present value of a compounding or simple amount
 * @param {Number} interest The interest amount in decimal
 * @param {Number} payment The amount paid at the end of every payment cycle
 * @param {Number} [numPeriods=1] The number of periods usually years
 * @param {Number} [perPeriod=1] How many times interest compounds in a period
 */
TVM.prototype.presentValueAnnuityAdvance = function(payment, interest, numPeriods = 1, perPeriod = 1) {
  return round((payment * (1 - 1 / Math.pow(1 + interest / perPeriod, numPeriods * perPeriod))) / (interest / perPeriod), 2);
};

/**
 * Returns the annual effective interest rate from a nominal rate
 * @param {Number} payment The amount paid at the beginning of every payment cycle
 * @param {Number} perPeriod How many times interest compounds in a period
 */
TVM.prototype.effectiveRate = function(nominalRate, perPeriod) {
  return Math.pow(1 + nominalRate / perPeriod, perPeriod) - 1;
};

function round(number, decimals) {
  let amount = Math.pow(10, decimals);
  return Math.round((number + 0.00001) * amount) / amount;
}

module.exports = new TVM();
