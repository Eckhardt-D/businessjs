const chai = require('chai');
chai.should();
const expect = chai.expect;

const businessjs = require('../index');
const tvm = businessjs.tvm;

describe('Businessjs library unit tests', () => {
  it('Should have all properties', done => {
    tvm.should.be.a('object');

    const methods = [
      'futureValue',
      'presentValue',
      'numPeriods',
      'interest',
      'futureValueAnnuityDue',
      'presentValueAnnuityDue',
      'presentValueAnnuityAdvance',
      'futureValueAnnuityAdvance',
      'effectiveRate',
      'amortisation',
      'amortization'
    ];

    methods.forEach(method => {
      tvm[method].should.exist;
    });

    done();
  });

  describe('futureValue', () => {
    it('Should return the correct amount to two decimals without perPeriod', done => {
      const fv = tvm.futureValue(100, 0.12, 10);

      fv.should.exist;
      fv.should.be.approximately(310.58, 0.05);
      done();
    });

    it('Should return correct amount to 2 decimals as compounding', done => {
      const fv = tvm.futureValue(100, 0.12, 10, 12);

      fv.should.exist;
      fv.should.be.approximately(330, 0.05);
      done();
    });
  });

  describe('presentValue', () => {
    it('Should return the correct amount to two decimals without perPeriod', done => {
      const pv = tvm.presentValue(310.58, 0.12, 10);

      pv.should.exist;
      pv.should.be.approximately(100, 0.05);
      done();
    });

    it('Should return correct amount to 2 decimals as compounding', done => {
      const pv = tvm.presentValue(330, 0.12, 10, 12);

      pv.should.exist;
      pv.should.be.approximately(100, 0.05);
      done();
    });
  });

  describe('numPeriods', () => {
    it('Should return the correct amount of time for a time value', done => {
      np = tvm.numPeriods(100, 310.58, 0.12, 1);

      np.should.exist;
      np.should.be.approximately(10, 0.05);
      done();
    });
  });

  describe('interest', () => {
    it('Should return the correct interest rate to 5 decimals', done => {
      i = tvm.interest(10000, 142100000, 39.5, 1);

      i.toString().should.have.lengthOf(8);
      i.should.be.approximately(0.27388, 0.001);
      done();
    });
  });

  describe('futureValueAnnuityDue', () => {
    it('Should return the correct amount to two decimals', done => {
      const fvad = tvm.futureValueAnnuityDue(100, 0.12, 3, 1);

      fvad.should.exist;
      fvad.should.be.approximately(377.93, 0.05);
      done();
    });
  });

  describe('futureValueAnnuityAdvance', () => {
    it('Should return the correct amount to two decimals', done => {
      const fvad = tvm.futureValueAnnuityAdvance(100, 0.12, 3, 1);

      fvad.should.exist;
      fvad.should.be.approximately(337.44, 0.05);
      done();
    });
  });

  describe('presentValueAnnuityDue', () => {
    it('Should return the correct amount to two decimals', done => {
      const fvad = tvm.presentValueAnnuityDue(121, 0.12, 3, 1);

      fvad.should.exist;
      fvad.should.be.approximately(325.50, 0.05);
      done();
    });
  });

  describe('presentValueAnnuityAdvance', () => {
    it('Should return the correct amount to two decimals', done => {
      const fvad = tvm.presentValueAnnuityAdvance(100, 0.12, 3, 1);

      fvad.should.exist;
      fvad.should.be.approximately(240.18, 0.05);
      done();
    });
  });

  describe('effectiveRate', () => {
    it('Should correctly convert nominal to effective', done => {
      const eff = tvm.effectiveRate(0.06, 12);

      eff.should.be.approximately(0.061678, 0.0001);
      done();
    });
  });

  describe('amortisation length', () => {
    it('Should return correct array length', done => {
      let amort = tvm.amortisation(1000, 0.1, 3, 12);
      amort.length.should.equal(12 * 3);
      done();
    });
  });

  describe('amortisation values', () => {
    it('Should all be numbers', done => {
      let amort = tvm.amortisation(1000, 0.1, 3, 12);
      amort.forEach(obj => {
        let keys = Object.keys(obj);
        keys.forEach(key => {
          expect(obj[key]).to.be.a('number');
        });
      });
      done();
    });
  });

  describe('amortisation amounts', () => {
    it('Should all be correct to 2 decimals', done => {
      const result = tvm.amortisation(100200, 0.1, 10, 12);
      result[result.length - 1].totalBalance.should.equal(0);
      result[0].payment.should.be.approximately(1324.15, 1);
      result[0].interestPortion.should.be.approximately(835, 0.5);      
      result[0].principlePortion.should.be.approximately(489, 0.5);
      done();
    });
  });
});
