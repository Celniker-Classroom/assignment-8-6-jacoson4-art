// ----- Functions to implement -----

// 1) myFunc(): persistent counter
let count = 0;

function myFunc() {
    count++;
    return count;
}
// 2) getRandomNum(max): 1..max int or 0 if invalid
function getRandomNum(max) {
    max = parseInt(max);
    if (isNaN(max) || max < 1) return 0;
    return Math.floor(Math.random() * max) + 1;
}
// 3) myAdder(x, y): numeric sum
function myAdder(x, y) {
    const numX = parseFloat(x);
    const numY = parseFloat(y);
    return numX + numY;
}
// 4) distance(x1, y1, x2, y2): Euclidean distance
function distance(x1, y1, x2, y2) {
    const x1Num = parseFloat(x1);
    const y1Num = parseFloat(y1);
    const x2Num = parseFloat(x2);
    const y2Num = parseFloat(y2);
    return Math.sqrt((x2Num - x1Num) ** 2 + (y2Num - y1Num) ** 2);
}
// 5) quadratic(a, b, c): roots of ax^2 + bx + c = 0
function quadratic(a, b, c) {
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const cNum = parseFloat(c);
    
    const discriminant = bNum * bNum - 4 * aNum * cNum;
    
    if (discriminant > 0) {
        const r1 = (-bNum + Math.sqrt(discriminant)) / (2 * aNum);
        const r2 = (-bNum - Math.sqrt(discriminant)) / (2 * aNum);
        return [r1, r2];
    } else if (discriminant === 0) {
        const root = -bNum / (2 * aNum);
        return [root];
    } else {
        const realPart = -bNum / (2 * aNum);
        const imagPart = Math.sqrt(-discriminant) / (2 * aNum);
        return [realPart + "+" + imagPart + "i", realPart + "-" + imagPart + "i"];
    }
}


// ----- Helpers -----
function $(id) { return document.getElementById(id); }
function setText(id, value) { $(id).textContent = String(value); }

// ----- Click Handlers (wire UI -> functions -> DOM) -----

function onMyFuncClick() {
  const val = myFunc();
  setText('outMyFunc', val);
}

function onRandomClick() {
  const max = $('maxRand').value;
  const val = getRandomNum(max);
  setText('outRandom', val);
}

function onAdderClick() {
  const x = $('addX').value;
  const y = $('addY').value;
  const sum = myAdder(x, y);
  setText('outAdder', sum);
}

function onDistanceClick() {
  const x1 = $('x1').value, y1 = $('y1').value;
  const x2 = $('x2').value, y2 = $('y2').value;
  const d = distance(x1, y1, x2, y2);
  setText('outDistance', d);
}

function onQuadraticClick() {
  const a = $('qa').value, b = $('qb').value, c = $('qc').value;
  const roots = quadratic(a, b, c);
  setText('outQuadratic', Array.isArray(roots) ? roots.join(', ') : roots);
}
