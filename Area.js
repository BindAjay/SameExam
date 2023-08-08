var a = 5;
var b = 6;
var c = 7;
// formula (s(s-a)(s-b)(s-c))
var t = a + b + c;
var area = Math.sqrt(t*(t-a)*(t-b)*(t-c));

console.log(`Area of a Trangle :${area}`);

