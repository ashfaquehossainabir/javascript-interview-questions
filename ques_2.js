// Q-2: Implicit & Explicit Binding

/* If we call obj.display(), this will point at 'this' variable at obj (output will be "Abir") */

var obj = {
    name: 'Abir',
    display: function() {
        console.log(this.name);
    },
};

var obj1 = {
    name: "ABC",
}

obj.display.call(obj1);

/* In the argument, We are taking obj.display functions & saying take the context of obj1, 
not the obj. So, the result will be "ABC". */


// What if we change normal function to arrow function, what will be happen?

var obj = {
    name: 'Abir',
    display: () => {
        console.log(this);
    },
};

var obj1 = {
    name: "ABC",
}

obj.display.call(obj1);

// We didn't get anything in the output when using arrow function, why?
// Because the arrow function is pointing to the global scope or window object.

/* In the window object there is no such variable called "name". That's the main reason, 
we didn't get any output from here. */