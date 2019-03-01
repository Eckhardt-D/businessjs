const chai = require('chai');
chai.should();

const businessjs = require('../index');
const tvm = businessjs.tvm;

describe('Fin library unit tests', () => {
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
      'effectiveRate'
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
      const fvad = tvm.presentValueAnnuityDue(100, 0.12, 3, 1);

      fvad.should.exist;
      fvad.should.be.approximately(269.01, 0.05);
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
});
