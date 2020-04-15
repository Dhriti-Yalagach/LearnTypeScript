( () => {

    // Variables - Can change multiple times
    let aNumber: number = 12;
    let aChoice: boolean = true; // false
    let aMessage: string;

    // Constant - Can assign value only once.
    const cNumber: number = 10;
    // cNumber = 20; // Can't assign again, because it is a constant.

    aNumber = 22;

    // Assignment
    aMessage = "Hello Dhriti";

    // Referencing of aMessage
    let bMessage = aMessage + ", How are you?";

    // Referencing bMessage variable.
    console.log(bMessage);

})();