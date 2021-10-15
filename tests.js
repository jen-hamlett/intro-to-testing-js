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
    it('should be a defined function', function () {
        expect(typeof itsFive).toBe('function');
    });
    it('should return a boolean', function () {
        expect(typeof itsFive()).toBe('boolean');
    });
    it('should return true when passed input of 5', function () {
        expect(itsFive(5)).toBe(true);
    });
    it('should return true when passed input of string 5', function () {
        expect(itsFive("5")).toBe(true);
    });
});

    //unit Test exercise 11  itsEven
describe( "itsEven", function() {
    it("should be a defined function", function()  {
        expect( typeof isEven).toBe( 'function');
        });
    it("should return a boolean", function()  {
        expect( typeof isEven()).toBe( 'boolean');
    });
    it("should return true when passed input of 2", function()  {
        expect( isEven(2)).toBe( true);
    });
    it("should return false  when passed input of -4", function()  {
        expect( isEven(-4)).toBe( true);
    });
    it("should return false  when passed input of 3", function()  {
        expect( isEven(3)).toBe( false);
    });
    it("should return false  when passed input of string banana", function()  {
        expect( isEven('banana')).toBe( false);
    });
    it("should return false  when passed input of 8", function()  {
        expect( isEven(8)).toBe( true);
    });
    it("should return false  when passed input of Infinity", function()  {
        expect( isEven(Infinity)).toBe( false);
    });
    it("should return false  when passed no argument", function()  {
        expect( isEven("")).toBe( false);
    });

});

//Unit test exercise number 12 isVowel
describe( "isVowel", function() {
    it("should be a defined function", function()  {
        expect( typeof isVowel).toBe( 'function');
    });
    it("should return a boolean", function()  {
        expect( typeof isVowel()).toBe( 'boolean');
    });
    it("should return true when passed input of a", function()  {
        expect( isVowel("a")).toBe( true);
    });
    it("should return true  when passed input of A", function()  {
        expect( isVowel("A")).toBe( true);
    });
        it("should return false  when passed input of 4", function()  {
            expect( isVowel(4)).toBe( false);
        });
    it("should return false  when passed input of B", function()  {
        expect( isVowel("B")).toBe( false);
    });
    it("should return true  when passed input of y", function()  {
        expect( isVowel("y")).toBe( true);
    });
    it("should return true  when passed input of e", function()  {
        expect( isVowel("e")).toBe( true);
    });
    it("should return false  when passed input of a boolean value", function()  {
            expect( isVowel(true)).toBe( false);
            expect( isVowel(false)).toBe(false);
    });
    it("should return false  when passed input of string banana", function()  {
        expect( isVowel('banana')).toBe( false);
    });
    it("should return false when passed no input", function() {
        expect( isVowel()).toBe(false);
    });
});

    //Unit test exercise number 13 add

describe( "add", function() {
    it("should be a defined function", function()  {
        expect( typeof add).toBe( 'function');
    });
    it("should return a boolean", function()  {
        expect( typeof add()).toBe( 'number');
    });
    it("should return true when passed input of 2, 3", function()  {
        expect( add(2, 3)).toBe( 5);
    });
    it("should return true when passed input of -4, 10", function()  {
        expect( add(-4, 10)).toBe( 6);
    });
    it("should return true when passed input of -3 9", function()  {
        expect( add(-3, -9)).toBe( -12);
    });
    it("should return true when passed input of 2, apples", function()  {
        expect( add(2, 'apples')).toBeNaN();
    });


});