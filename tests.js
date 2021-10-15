// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


//unit test for sayHello
describe( 'sayHello', function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should never return undefined', function () {
        expect(typeof sayHello()).not.toBe('undefined');
    });
    it('should return a string', function () {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return correct greeting', function () {
        expect( sayHello('Jen')).toBe('Hello Jen');
        expect( sayHello('Bob')).toBe('Hello Bob');
    });

});

//unit test for itsFive
describe( 'itsFive', function() {
    it('should be a defined function', function() {
        expect( typeof itsFive).toBe('function');
    });
    it('should return a boolean', function () {
        expect( typeof itsFive()).toBe( 'boolean');
    });
    it('should return true when passed input of 5', function()  {
        expect( itsFive(5)).toBe(true);
    });
    it('should return true when passed input of string 5', function()  {
        expect (itsFive("5")).toBe(true);
    });



});