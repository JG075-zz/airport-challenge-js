describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
    anotherPlane = new Plane();
  });

  describe("when weather is not stormy", function() {
    beforeEach(function() {
      spyOn(airport, 'isStormy').and.returnValue(false);
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
      airport.depart(plane);
      expect(airport.planes).not.toContain(plane);
    });
  });

  describe("when weather is stormy", function() {
    beforeEach(function() {
      spyOn(airport, 'isStormy').and.returnValue(true);
    });

    it("should not allow a plane to land if it's stormy", function() {
      expect(function() { airport.land(plane); }).toThrowError("Can't land due to stormy weather");
    });

    it("should prevent a plane to take off when stormy", function() {
      expect(function() { airport.depart(plane); }).toThrowError("Plane can't depart due to stormy weather");
    });
  });
});
