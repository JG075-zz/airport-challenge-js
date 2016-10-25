describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it("should be able to land a plane", function() {
    airport.land(plane);
    expect(airport.planes).toContain(plane);
  });

  it("should be able to allow a plane to take off", function() {
    airport.land(plane);
    airport.depart(plane);
    expect(airport.planes).not.toContain(plane);
  });


});
