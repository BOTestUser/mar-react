



//------------------------------------------------------
// Function Closures
//------------------------------------------------------



function teach(sub) {
    console.log("teaching sub..." + sub);
    let notes = sub + " notes";
    let fun = "bla bla";
    function learn() {
        console.log("learning with " + notes);
    }
    console.log("teaching ends..");
    return learn;
}

let learn = teach('.js')
learn();
