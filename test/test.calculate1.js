var isAdult = require('../lib/calculate1').isAdult;

describe('#testing isAdult() function', function() {
  it('should return false', function(done){
    isAdult(18).should.equal(false);
    done();
  });

  it('should return true', function(done){
    isAdult(60).should.equal(true);
    done();
  });

  it('should return -1', function(done){
    isAdult(0).should.equal(-1);
    done();
  });
});
