// Q-1: Hoisting

function abc() {
    console.log(a); // undefined

    // let & const will be hoisted as well, but they are going to the temporal dead zone.

    /* Temporal dead zone is they (const & let variables) are in the scope but they have not 
    been declared yet. */
    
    const c = 30;
    let b = 20;

    // var will be hoisted completely.
    var a = 10;
}

abc();