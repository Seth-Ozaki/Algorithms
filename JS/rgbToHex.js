function rgb(r, g, b) {
    if (r < 0 || r > 255) {
        r > 255 ? r = 255 : r = 0;
    }
    if (g < 0 || g > 255) {
        g > 255 ? g = 255 : g = 0;
    }
    if (b < 0 || b > 255) {
        b > 255 ? b = 255 : b = 0;
    }

    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
    if (r.length === 1) {
        r = "0" + r;
    }
    if (g.length === 1) {
        g = "0" + g;
    }
    if (b.length === 1) {
        b = "0" + b;
    }
    return "#" + r.toUpperCase() + g.toUpperCase() + b.toUpperCase();
}

let test = rgb(300, 255, 255);
let test1 = rgb(-10, 0, 0);
let test2 = rgb(148, 0, 211);

console.log(test);
console.log(test1);
console.log(test2);

