/*global window, document, alert, Vector, Matrix, SceneGraphNode */
var Vector = (function () {
    function Vector(pX, pY, pZ) {
        this.setX(pX);
        this.setY(pY);
        this.setZ(pZ);
    }
    Vector.prototype.getX = function () {
        return this.mX;
    };
    Vector.prototype.setX = function (pX) {
        this.mX = pX;
    };
    Vector.prototype.getY = function () {
        return this.mY;
    };
    Vector.prototype.setY = function (pY) {
        this.mY = pY;
    };
    Vector.prototype.getZ = function () {
        return this.mZ;
    };
    Vector.prototype.setZ = function (pZ) {
        this.mZ = pZ;
    };
    Vector.prototype.add = function (pVector) {
        return new Vector(pVector.getX() + this.getX(),
            pVector.getY() + this.getY());
    };
    Vector.prototype.subtract = function (pVector) {
        return new Vector(this.getX() - pVector.getX(),
            this.getY() - pVector.getY());
    };
    Vector.prototype.multiply = function (pVar) {
        return new Vector(this.getX() * pVar,
            this.getY() * pVar);
    };
    Vector.prototype.divide = function (pVar) {
        return new Vector(this.getX() / pVar,
            this.getY() / pVar);
    };
    Vector.prototype.magnitude = function () {
        return Math.sqrt((this.getX() * this.getX()) + (this.getY() * this.getY()));
    };
    Vector.prototype.normalise = function () {
        return new Vector(this.getX() / this.magnitude(), this.getY() / this.magnitude());
    };
    Vector.prototype.limitTo = function (pVar) {
        var limit = this.magnitude();
        if (limit < pVar) {
            return new Vector(this.getX(), this.getY());
        }
        return new Vector((this.getX() / this.magnitude()) * pVar,
            (this.getY() / this.magnitude()) * pVar);
    };
    Vector.prototype.dotProduct = function (pVector) {
        var dotProduct = (this.getX() * pVector.getX()) +
            (this.getY() * pVector.getY()) + (this.getZ() * pVector.getZ());
        return dotProduct;
    };
    Vector.prototype.interpolate = function (pVector, pVar) {
        return new Vector(this.getX() + (pVector.getX() - this.getX()) * pVar,
            this.getY() + (pVector.getY() - this.getY()) * pVar);
    };
    Vector.prototype.rotate = function (pVar) {
        return new Vector((this.getX() * Math.cos(pVar)) - (this.getY() * Math.sin(pVar)),
            (this.getY() * Math.cos(pVar)) + (this.getX() * Math.sin(pVar)));
    };
    Vector.prototype.angleBetween = function (pVector) {
        return Math.acos((this.dotProduct(pVector)) /
            (this.magnitude() * pVector.magnitude()));
    };
    return Vector;
}());

var Matrix = (function () {
    function Matrix(x1, x2, x3, y1, y2, y3, z1, z2, z3) {
        this.matrixArray = [
            [x1, x2, x3],
            [y1, y2, y3],
            [z1, z2, z3]
        ];
    }
    Matrix.prototype.getElement = function (row, column) {
        return this.matrixArray[row][column];
    };
    Matrix.prototype.setElement = function (row, column, pMatrix) {
        this.matrixArray[row][column] = pMatrix;
    };
    Matrix.prototype.multiply = function (pMatrix) {
        var px1, px2, px3, py1, py2, py3, pz1, pz2, pz3;
        px1 = (this.getElement(0, 0) * pMatrix.getElement(0, 0)) +
            (this.getElement(0, 1) * pMatrix.getElement(1, 0)) +
            (this.getElement(0, 2) * pMatrix.getElement(2, 0));
        px2 = (this.getElement(0, 0) * pMatrix.getElement(0, 1)) +
            (this.getElement(0, 1) * pMatrix.getElement(1, 1)) +
            (this.getElement(0, 2) * pMatrix.getElement(2, 1));
        px3 = (this.getElement(0, 0) * pMatrix.getElement(0, 2)) +
            (this.getElement(0, 1) * pMatrix.getElement(1, 2)) +
            (this.getElement(0, 2) * pMatrix.getElement(2, 2));
        py1 = (this.getElement(1, 0) * pMatrix.getElement(0, 0)) +
            (this.getElement(1, 1) * pMatrix.getElement(1, 0)) +
            (this.getElement(1, 2) * pMatrix.getElement(2, 0));
        py2 = (this.getElement(1, 0) * pMatrix.getElement(0, 1)) +
            (this.getElement(1, 1) * pMatrix.getElement(1, 1)) +
            (this.getElement(1, 2) * pMatrix.getElement(2, 1));
        py3 = (this.getElement(1, 0) * pMatrix.getElement(0, 2)) +
            (this.getElement(1, 1) * pMatrix.getElement(1, 2)) +
            (this.getElement(1, 2) * pMatrix.getElement(2, 2));
        pz1 = (this.getElement(2, 0) * pMatrix.getElement(0, 0)) +
            (this.getElement(2, 1) * pMatrix.getElement(1, 0)) +
            (this.getElement(2, 2) * pMatrix.getElement(2, 0));
        pz2 = (this.getElement(2, 0) * pMatrix.getElement(0, 1)) +
            (this.getElement(2, 1) * pMatrix.getElement(1, 1)) +
            (this.getElement(2, 2) * pMatrix.getElement(2, 1));
        pz3 = (this.getElement(2, 0) * pMatrix.getElement(0, 2)) +
            (this.getElement(2, 1) * pMatrix.getElement(1, 2)) +
            (this.getElement(2, 2) * pMatrix.getElement(2, 2));
        return new Matrix(px1, px2, px3, py1, py2, py3, pz1, pz2, pz3);
    };
    Matrix.prototype.multiplyVector = function (pVector) {
        var pX, pY, pZ;
        pX = (this.getElement(0, 0) * pVector.getX()) +
            (this.getElement(0, 1) * pVector.getY()) +
            (this.getElement(0, 2) * pVector.getZ());
        pY = (this.getElement(1, 0) * pVector.getX()) +
            (this.getElement(1, 1) * pVector.getY()) +
            (this.getElement(1, 2) * pVector.getZ());
        pZ = (this.getElement(2, 0) * pVector.getX()) +
            (this.getElement(2, 1) * pVector.getY()) +
            (this.getElement(2, 2) * pVector.getZ());
        return new Vector(pX, pY, pZ);
    };
    Matrix.prototype.setTransform = function (pContext) {
        pContext.setTransform(this.getElement(0, 0), this.getElement(1, 0),
            this.getElement(0, 1), this.getElement(1, 1),
            this.getElement(0, 2), this.getElement(1, 2));
    };
    Matrix.prototype.transform = function (pContext) {
        pContext.transform(this.getElement(0, 0), this.getElement(1, 0),
            this.getElement(0, 1), this.getElement(1, 1),
            this.getElement(0, 2), this.getElement(1, 2));
    };
    return Matrix;
}());

Matrix.createIdentity = function () {
    return new Matrix(1, 0, 0, 0, 1, 0, 0, 0, 1);
};
Matrix.createTranslation = function (pVector) {
    var dx, dy;
    dx = pVector.getX();
    dy = pVector.getY();
    return new Matrix(1, 0, dx, 0, 1, dy, 0, 0, 1);
};
Matrix.createScale = function (pVector) {
    var sx, sy;
    sx = pVector.getX();
    sy = pVector.getY();
    return new Matrix(sx, 0, 0, 0, sy, 0, 0, 0, 1);
};
Matrix.createRotation = function (pVar) {
    return new Matrix(Math.cos(pVar), -(Math.sin(pVar)), 0,
        Math.sin(pVar), Math.cos(pVar), 0,
        0, 0, 1);
};