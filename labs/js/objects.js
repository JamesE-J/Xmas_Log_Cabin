/*global Vector, Matrix, SceneGraphNode, Mountain*/
/*global HouseBox, HouseDoor, HouseWindow, Tree, Trees*/
var Background = (function () {
    function Background() {
    }
    Background.prototype.draw = function (pContext) {
        pContext.beginPath();
        pContext.moveTo(0, 0);
        pContext.lineTo(1000, 0);
        pContext.lineTo(1000, 500);
        pContext.lineTo(0, 500);
        pContext.closePath();
        pContext.stroke();
        pContext.fillStyle = "black";
        pContext.fillRect(0, 0, 1000, 250);
        pContext.beginPath();
        pContext.arc(650, 75, 70, 0, 2 * Math.PI);
        pContext.stroke();
        pContext.fillStyle = "#ffffbb";
        pContext.fill();
        pContext.beginPath();
        pContext.moveTo(0, 250);
        pContext.lineTo(1000, 250);
        pContext.lineTo(1000, 500);
        pContext.lineTo(0, 500);
        pContext.closePath();
        pContext.stroke();
        pContext.fillStyle = "white";
        pContext.fill();
    };
    return Background;
}());

var Mountains = (function () {
    function Mountains(pPosition, pScale, pSceneGraph) {
        this.setPosition(pPosition);
        this.setScale(pScale);
        this.setSceneGraph(pSceneGraph);
        this.initialiseSceneGraph();
    }
    Mountains.prototype.getPosition = function () {
        return this.mPosition;
    };
    Mountains.prototype.setPosition = function (pPosition) {
        this.mPosition = pPosition;
    };
    Mountains.prototype.getScale = function () {
        return this.mScale;
    };
    Mountains.prototype.setScale = function (pScale) {
        this.mScale = pScale;
    };
    Mountains.prototype.getSceneGraph = function () {
        return this.mSceneGraph;
    };
    Mountains.prototype.setSceneGraph = function (pSceneGraph) {
        this.mSceneGraph = pSceneGraph;
    };
    Mountains.prototype.initialiseSceneGraph =
        function () {
            var translateSceneNode, scaleSceneNode, translateSceneNodeA,
                translateSceneNodeB, translateSceneNodeC, translateSceneNodeD,
                translateSceneNodeE, translateSceneNodeF, tempTranslateSceneMatrix,
                scaleSceneNodeA, scaleSceneNodeB, scaleSceneNodeC, scaleSceneNodeD,
                scaleSceneNodeE, scaleSceneNodeF, tempScaleMatrix;
            scaleSceneNode = new SceneGraphNode(Matrix.createScale(this.mScale));
            translateSceneNode =
                new SceneGraphNode(Matrix.createTranslation(this.mPosition));
            this.mSceneGraph.addChild(translateSceneNode);
            translateSceneNode.addChild(scaleSceneNode);
            tempTranslateSceneMatrix =
                new Matrix.createTranslation(new Vector(-400, 0, 1));
            translateSceneNodeA = new SceneGraphNode(tempTranslateSceneMatrix);
            tempTranslateSceneMatrix =
                new Matrix.createTranslation(new Vector(-300, 0, 1));
            translateSceneNodeB = new SceneGraphNode(tempTranslateSceneMatrix);
            tempTranslateSceneMatrix =
                new Matrix.createTranslation(new Vector(-100, 0, 1));
            translateSceneNodeC = new SceneGraphNode(tempTranslateSceneMatrix);
            tempTranslateSceneMatrix =
                new Matrix.createTranslation(new Vector(-200, 0, 1));
            translateSceneNodeD = new SceneGraphNode(tempTranslateSceneMatrix);
            tempTranslateSceneMatrix =
                new Matrix.createTranslation(new Vector(300, 0, 1));
            translateSceneNodeE = new SceneGraphNode(tempTranslateSceneMatrix);
            tempTranslateSceneMatrix =
                new Matrix.createTranslation(new Vector(450, 0, 1));
            translateSceneNodeF = new SceneGraphNode(tempTranslateSceneMatrix);
            tempScaleMatrix = new Matrix.createScale(new Vector(1.3, 1.2, 1));
            scaleSceneNodeA = new SceneGraphNode(tempScaleMatrix);
            tempScaleMatrix = new Matrix.createScale(new Vector(1.8, 1, 1));
            scaleSceneNodeB = new SceneGraphNode(tempScaleMatrix);
            tempScaleMatrix = new Matrix.createScale(new Vector(1.2, 0.9, 1));
            scaleSceneNodeC = new SceneGraphNode(tempScaleMatrix);
            tempScaleMatrix = new Matrix.createScale(new Vector(1.3, 1.2, 1));
            scaleSceneNodeD = new SceneGraphNode(tempScaleMatrix);
            tempScaleMatrix = new Matrix.createScale(new Vector(1.6, 1.4, 1));
            scaleSceneNodeE = new SceneGraphNode(tempScaleMatrix);
            tempScaleMatrix = new Matrix.createScale(new Vector(1.3, 1, 1));
            scaleSceneNodeF = new SceneGraphNode(tempScaleMatrix);
            scaleSceneNode.addChild(translateSceneNodeA);
            scaleSceneNode.addChild(translateSceneNodeB);
            scaleSceneNode.addChild(translateSceneNodeC);
            scaleSceneNode.addChild(translateSceneNodeD);
            scaleSceneNode.addChild(translateSceneNodeE);
            scaleSceneNode.addChild(translateSceneNodeF);
            translateSceneNodeA.addChild(scaleSceneNodeA);
            translateSceneNodeB.addChild(scaleSceneNodeB);
            translateSceneNodeC.addChild(scaleSceneNodeC);
            translateSceneNodeD.addChild(scaleSceneNodeD);
            translateSceneNodeE.addChild(scaleSceneNodeE);
            translateSceneNodeF.addChild(scaleSceneNodeF);
            scaleSceneNodeA.addChild(new Mountain());
            scaleSceneNodeB.addChild(new Mountain());
            scaleSceneNodeC.addChild(new Mountain());
            scaleSceneNodeD.addChild(new Mountain());
            scaleSceneNodeE.addChild(new Mountain());
            scaleSceneNodeF.addChild(new Mountain());
        };
    Mountains.prototype.draw = function (pContext, pWorldTransformMatrix) {
        this.mSceneGraph.draw(pContext, pWorldTransformMatrix);
    };
    return Mountains;
}());

var Mountain = (function () {
    function Mountain() {
    }
    Mountain.prototype.draw = function (pContext) {
        pContext.beginPath();
        pContext.moveTo(0, 0);
        pContext.lineTo(-75, 0);
        pContext.lineTo(0, -200);
        pContext.lineTo(75, 0);
        pContext.closePath();
        pContext.fillStyle = "#b3b3b3";
        pContext.fill();
        pContext.stroke();
        pContext.beginPath();
        pContext.moveTo(0, -200);
        pContext.lineTo(37, -100);
        pContext.lineTo(24, -95);
        pContext.lineTo(12, -105);
        pContext.lineTo(0, -95);
        pContext.lineTo(-12, -105);
        pContext.lineTo(-24, -95);
        pContext.lineTo(-37, -100);
        pContext.lineTo(0, -200);
        pContext.closePath();
        pContext.fillStyle = "#ffffff";
        pContext.fill();
        pContext.stroke();
    };
    return Mountain;
}());

var House = (function () {
    function House(pPosition, pScale, pSceneGraph) {
        this.setPosition(pPosition);
        this.setScale(pScale);
        this.setSceneGraph(pSceneGraph);
        this.initialiseSceneGraph();
    }
    House.prototype.getPosition = function () {
        return this.mPosition;
    };
    House.prototype.setPosition = function (pPosition) {
        this.mPosition = pPosition;
    };
    House.prototype.getScale = function () {
        return this.mScale;
    };
    House.prototype.setScale = function (pScale) {
        this.mScale = pScale;
    };
    House.prototype.getSceneGraph = function () {
        return this.mSceneGraph;
    };
    House.prototype.setSceneGraph = function (pSceneGraph) {
        this.mSceneGraph = pSceneGraph;
    };
    House.prototype.initialiseSceneGraph =
        function () {
            var translateSceneNode, scaleSceneNode,
                tempMatrix, windowNodeA, windowNodeB;
            scaleSceneNode = new SceneGraphNode(Matrix.createScale(this.mScale));
            translateSceneNode =
                new SceneGraphNode(Matrix.createTranslation(this.mPosition));
            this.mSceneGraph.addChild(translateSceneNode);
            translateSceneNode.addChild(scaleSceneNode);
            tempMatrix = new Matrix.createTranslation(new Vector(15, 20, 1));
            windowNodeA = new SceneGraphNode(tempMatrix);
            windowNodeA.addChild(new HouseWindow());
            tempMatrix = new Matrix.createTranslation(new Vector(75, 20, 1));
            windowNodeB = new SceneGraphNode(tempMatrix);
            windowNodeB.addChild(new HouseWindow());
            scaleSceneNode.addChild(new HouseBox());
            scaleSceneNode.addChild(new HouseDoor());
            scaleSceneNode.addChild(windowNodeA);
            scaleSceneNode.addChild(windowNodeB);
        };
    House.prototype.draw = function (pContext, pWorldTransformMatrix) {
        this.mSceneGraph.draw(pContext, pWorldTransformMatrix);
    };
    return House;
}());

var HouseBox = (function () {
    function HouseBox() {
    }
    HouseBox.prototype.draw = function (pContext) {
        pContext.beginPath();
        pContext.moveTo(70, -10);
        pContext.lineTo(80, -10);
        pContext.lineTo(80, -30);
        pContext.lineTo(70, -30);
        pContext.lineTo(70, -10);
        pContext.closePath();
        pContext.fillStyle = "#333333";
        pContext.fill();
        pContext.beginPath();
        pContext.moveTo(0, 0);
        pContext.lineTo(50, -25);
        pContext.lineTo(100, 0);
        pContext.lineTo(100, 50);
        pContext.lineTo(0, 50);
        pContext.closePath();
        pContext.fillStyle = "#401500";
        pContext.fill();
        pContext.stroke();
        pContext.beginPath();
        pContext.moveTo(0, 0);
        pContext.lineTo(0, -10);
        pContext.lineTo(50, -35);
        pContext.lineTo(100, -10);
        pContext.lineTo(100, 0);
        pContext.lineTo(50, -25);
        pContext.lineTo(0, 0);
        pContext.closePath();
        pContext.fillStyle = "white";
        pContext.fill();
        pContext.stroke();
        pContext.beginPath();
        pContext.moveTo(10, -5);
        pContext.lineTo(90, -5);
        pContext.moveTo(20, -10);
        pContext.lineTo(80, -10);
        pContext.moveTo(30, -15);
        pContext.lineTo(70, -15);
        pContext.moveTo(40, -20);
        pContext.lineTo(60, -20);
        pContext.moveTo(0, 0);
        pContext.lineTo(100, 0);
        pContext.moveTo(0, 5);
        pContext.lineTo(100, 5);
        pContext.moveTo(0, 10);
        pContext.lineTo(100, 10);
        pContext.moveTo(0, 15);
        pContext.lineTo(100, 15);
        pContext.moveTo(0, 20);
        pContext.lineTo(100, 20);
        pContext.moveTo(0, 25);
        pContext.lineTo(100, 25);
        pContext.moveTo(0, 30);
        pContext.lineTo(100, 30);
        pContext.moveTo(0, 35);
        pContext.lineTo(100, 35);
        pContext.moveTo(0, 40);
        pContext.lineTo(100, 40);
        pContext.moveTo(0, 45);
        pContext.lineTo(100, 45);
        pContext.moveTo(0, 50);
        pContext.lineTo(100, 50);
        pContext.closePath();
        pContext.stroke();
    };
    return HouseBox;
}());

var HouseDoor = (function () {
    function HouseDoor() {
    }
    HouseDoor.prototype.draw = function (pContext) {
        pContext.beginPath();
        pContext.moveTo(40, 50);
        pContext.lineTo(40, 15);
        pContext.lineTo(60, 15);
        pContext.lineTo(60, 50);
        pContext.lineTo(40, 50);
        pContext.closePath();
        pContext.fillStyle = "#4d2600";
        pContext.fill();
        pContext.stroke();
    };
    return HouseDoor;
}());

var HouseWindow = (function () {
    function HouseWindow() {
    }
    HouseWindow.prototype.draw = function (pContext) {
        pContext.beginPath();
        pContext.moveTo(0, 0);
        pContext.lineTo(10, 0);
        pContext.lineTo(10, 15);
        pContext.lineTo(0, 15);
        pContext.lineTo(0, 0);
        pContext.closePath();
        pContext.fillStyle = "yellow";
        pContext.fill();
        pContext.stroke();
    };
    return HouseWindow;
}());

var Trees = (function () {
    function Trees(pPosition, pScale, pSceneGraph) {
        this.setPosition(pPosition);
        this.setScale(pScale);
        this.setSceneGraph(pSceneGraph);
        this.initialiseSceneGraph();
    }
    Trees.prototype.getPosition = function () {
        return this.mPosition;
    };
    Trees.prototype.setPosition = function (pPosition) {
        this.mPosition = pPosition;
    };
    Trees.prototype.getScale = function () {
        return this.mScale;
    };
    Trees.prototype.setScale = function (pScale) {
        this.mScale = pScale;
    };
    Trees.prototype.getSceneGraph = function () {
        return this.mSceneGraph;
    };
    Trees.prototype.setSceneGraph = function (pSceneGraph) {
        this.mSceneGraph = pSceneGraph;
    };
    Trees.prototype.initialiseSceneGraph =
        function () {
            var translateSceneNode, scaleSceneNode, translateSceneNodeA,
                translateSceneNodeB, translateSceneNodeC, translateSceneNodeD,
                translateSceneNodeE, translateSceneNodeF, translateSceneNodeG,
                translateSceneNodeH, translateSceneNodeI, translateSceneNodeJ,
                tempTranslateMatrix;
            scaleSceneNode = new SceneGraphNode(Matrix.createScale(this.mScale));
            translateSceneNode =
                new SceneGraphNode(Matrix.createTranslation(this.mPosition));
            tempTranslateMatrix =
                new Matrix.createTranslation(new Vector(0, 0, 1));
            translateSceneNodeA = new SceneGraphNode(tempTranslateMatrix);
            tempTranslateMatrix =
                new Matrix.createTranslation(new Vector(95, 0, 1));
            translateSceneNodeB = new SceneGraphNode(tempTranslateMatrix);
            tempTranslateMatrix =
                new Matrix.createTranslation(new Vector(180, 0, 1));
            translateSceneNodeC = new SceneGraphNode(tempTranslateMatrix);
            tempTranslateMatrix =
                new Matrix.createTranslation(new Vector(260, 0, 1));
            translateSceneNodeD = new SceneGraphNode(tempTranslateMatrix);
            tempTranslateMatrix =
                new Matrix.createTranslation(new Vector(340, 0, 1));
            translateSceneNodeE = new SceneGraphNode(tempTranslateMatrix);
            tempTranslateMatrix =
                new Matrix.createTranslation(new Vector(600, 0, 1));
            translateSceneNodeF = new SceneGraphNode(tempTranslateMatrix);
            tempTranslateMatrix =
                new Matrix.createTranslation(new Vector(680, 0, 1));
            translateSceneNodeG = new SceneGraphNode(tempTranslateMatrix);
            tempTranslateMatrix =
                new Matrix.createTranslation(new Vector(740, 0, 1));
            translateSceneNodeH = new SceneGraphNode(tempTranslateMatrix);
            tempTranslateMatrix =
                new Matrix.createTranslation(new Vector(800, 0, 1));
            translateSceneNodeI = new SceneGraphNode(tempTranslateMatrix);
            tempTranslateMatrix =
                new Matrix.createTranslation(new Vector(870, 0, 1));
            translateSceneNodeJ = new SceneGraphNode(tempTranslateMatrix);
            this.mSceneGraph.addChild(translateSceneNode);
            translateSceneNode.addChild(scaleSceneNode);
            scaleSceneNode.addChild(translateSceneNodeA);
            scaleSceneNode.addChild(translateSceneNodeB);
            scaleSceneNode.addChild(translateSceneNodeC);
            scaleSceneNode.addChild(translateSceneNodeD);
            scaleSceneNode.addChild(translateSceneNodeE);
            scaleSceneNode.addChild(translateSceneNodeF);
            scaleSceneNode.addChild(translateSceneNodeG);
            scaleSceneNode.addChild(translateSceneNodeH);
            scaleSceneNode.addChild(translateSceneNodeI);
            scaleSceneNode.addChild(translateSceneNodeJ);
            translateSceneNodeA.addChild(new Tree());
            translateSceneNodeB.addChild(new Tree());
            translateSceneNodeC.addChild(new Tree());
            translateSceneNodeD.addChild(new Tree());
            translateSceneNodeE.addChild(new Tree());
            translateSceneNodeF.addChild(new Tree());
            translateSceneNodeG.addChild(new Tree());
            translateSceneNodeH.addChild(new Tree());
            translateSceneNodeI.addChild(new Tree());
            translateSceneNodeJ.addChild(new Tree());
        };
    Trees.prototype.draw = function (pContext, pWorldTransformMatrix) {
        this.mSceneGraph.draw(pContext, pWorldTransformMatrix);
    };
    return Trees;
}());

var Tree = (function () {
    function Tree() {
    }
    Tree.prototype.draw = function (pContext) {
        pContext.beginPath();
        pContext.moveTo(-5, 0);
        pContext.lineTo(-5, -22);
        pContext.lineTo(5, -22);
        pContext.lineTo(5, 0);
        pContext.lineTo(-5, 0);
        pContext.closePath();
        pContext.fillStyle = "#5f3307";
        pContext.fill();
        pContext.beginPath();
        pContext.moveTo(-25, -20);
        pContext.lineTo(25, -20);
        pContext.lineTo(0, -80);
        pContext.lineTo(-25, -20);
        pContext.closePath();
        pContext.fillStyle = "#004d00";
        pContext.fill();
        pContext.stroke();
    };
    return Tree;
}());

var Snow = (function () {
    function Snow(pX, pY) {
        this.setX(pX);
        this.setY(pY);
    }
    Snow.prototype.setX = function (pX) {
        this.mX = pX;
    };
    Snow.prototype.setY = function (pY) {
        this.mY = pY;
    };
    Snow.prototype.draw = function (pContext, snowTransformMatrix) {
        pContext.save();
        snowTransformMatrix.setTransform(pContext);
        pContext.beginPath();
        pContext.arc(this.mX, this.mY, 2, 0, 2 * Math.PI);
        pContext.stroke();
        pContext.fillStyle = "white";
        pContext.fill();
        pContext.restore();
    };
    return Snow;
}());