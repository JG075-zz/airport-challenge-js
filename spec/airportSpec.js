describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
    anotherPlane = new Plane();
  });

  it("should be able to land a plane", function() {
    airport.land(plane);
    expect(airport.planes).toContain(plane);
  });

  it("raises an error when airport is full", function() {
    airport.land(plane);
    expect(function() { airport.land(anotherPlane); }).toThrowError("The airport is at full capacity");
  });

  it("should throw an error if the plane is already landed", function() {
    airport.land(plane);
    expect(function() { airport.land(plane); }).toThrowError("Plane already landed");
  });

  it("should be able to allow a plane to take off", function() {
    airport.land(plane);
    spyOn(airport, 'isStormy').and.returnValue(false);
    airport.depart(plane);
    expect(airport.planes).not.toContain(plane);
  });

  it("should prevent a plane to take off when stormy", function() {
    airport.land(plane);
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function() { airport.depart(plane); }).toThrowError("Plane can't depart due to stormy weather");
  });
});
