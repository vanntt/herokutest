var add = require('../lib/calculate2').add;

describe('#testing add() function', function() {
  it('should run right', function(done) {
    add([1,2,3,4]).should.equal(10);
    add(['-1','-2','1','2']).should.equal(0);
    //add([2,1.5,'2.5',-4.5]).should.equal(1.5);
    add(['-10',-20,'30',0]).should.equal(0);
    add('9230').should.equal(14);
    //add('-9230').should.equal(14);
    done();
  }).on('error', function(e) {
    throw new Error(e);
  });

  it('should retun not a number', function(done) {
    add(['2ie', 34,65,'0']).should.equal('not a number');
    add([null,'0e']).should.equal('not a number');
    done();
  }).on('error', function(e) {
      throw new Error(e);
  });

  it('should retun not an array', function(done) {
    add().should.equal('not an array');
    add(null).should.equal('not an array');
    add([]).should.equal('not an array');
    done();
  }).on('error', function(e) {
    throw new Error(e);
  });
});
