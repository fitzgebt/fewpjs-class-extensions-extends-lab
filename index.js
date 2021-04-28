// Your code here
class Polygon {
    constructor (intArr) {
        this.side1 = intArr[0]
        this.side2 = intArr[1]
        this.side3 = intArr[2]
        this.side4 = intArr[3]
        this.intArr = intArr
        this.arrLength = this.intArr.length
    }

    get countSides() {
        return this.intArr.length
    }

    get perimeter() {
        let sidesTotal = 0
        for (let side of this.intArr) {
            sidesTotal += side
        }
        return sidesTotal
    }

};

class Triangle extends Polygon {
    get isValid() {
        let side1 = this.intArr[0]
        let side2 = this.intArr[1]
        let side3 = this.intArr[2]
        if (this.arrLength !== 3) return;
        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
    }

};

class Square extends Polygon {

    get isValid() {
        let side1 = this.intArr[0]
        let side2 = this.intArr[1]
        let side3 = this.intArr[2]
        let side4 = this.intArr[3]
        if (this.arrLength !== 4) return;
        return ((side1 == side2) && (side1 == side3) && (side1 == side4))
    }

    get area() {
        let side1 = this.intArr[0]
        if (this.arrLength !== 4) return;
        return ((side1 * side1))
    }
};