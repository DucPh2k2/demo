function callFunc() {
    let a  = 4;
    let b = 4;
    if (a === b) console.log("This is the same value");
    else {
        let c = a + b;
        let d = a * b;
        if (c > d) var e  = c - d;
        else e = c + d;

        console.log(e);
    };
    console.log(a);
}