function callFunc() {
    let a  = 4;
    let b = 4;
    if (a === b) console.log("This is the same value");
    else {
        let c = a + b;
        let d = a - b;
        let e = c * d;

        console.log(e);
    };
    console.log(a);
}