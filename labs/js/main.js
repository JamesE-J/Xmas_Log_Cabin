/*global window, document, alert, Vector, Matrix, SceneGraphNode*/
/*global Background, Mountains, House, Trees, Snow*/
function onLoad() {
    var mainCanvas, context, worldTransformMatrix,
        rootSceneNode, pSceneGraph, snowArray, i, pX, pY,
        snowTransformMatrix, tempTranslationMatrix,
        thisTime, deltaTime, lastTime;
    function initialiseCanvasContext() {
        mainCanvas = document.getElementById('canvas');
        if (!mainCanvas) {
            alert('Error: I cannot find the canvas element!');
            return;
        }
        context = mainCanvas.getContext('2d');
        if (!context) {
            alert('Error: failed to get context!');
            return;
        }
        tempTranslationMatrix = Matrix.createTranslation(new Vector(0, 0));
        worldTransformMatrix = new Matrix.createIdentity();
        snowTransformMatrix = new Matrix.createIdentity();
        snowTransformMatrix =
            snowTransformMatrix.multiply(tempTranslationMatrix);
        lastTime = Date.now();
    }
    function initialiseSceneGraph() {
        pSceneGraph = new SceneGraphNode(Matrix.createIdentity());
        rootSceneNode =
            new SceneGraphNode(Matrix.createIdentity());
        rootSceneNode.addChild(new Background());
        rootSceneNode.addChild(new Mountains(new Vector(500, 249, 1),
            new Vector(1, 1, 1), pSceneGraph));
        rootSceneNode.addChild(new House(new Vector(460, 220, 1),
            new Vector(1.5, 1.5, 1), pSceneGraph));
        rootSceneNode.addChild(new Trees(new Vector(55, 280, 1),
            new Vector(1, 1, 1), pSceneGraph));
        rootSceneNode.addChild(new Trees(new Vector(75, 310, 1),
            new Vector(1, 1, 1), pSceneGraph));
        rootSceneNode.addChild(new Trees(new Vector(85, 350, 1),
            new Vector(1, 1, 1), pSceneGraph));
        rootSceneNode.addChild(new Trees(new Vector(65, 390, 1),
            new Vector(1, 1, 1), pSceneGraph));
        rootSceneNode.addChild(new Trees(new Vector(85, 430, 1),
            new Vector(1, 1, 1), pSceneGraph));
        rootSceneNode.addChild(new Trees(new Vector(45, 470, 1),
            new Vector(1, 1, 1), pSceneGraph));
        rootSceneNode.addChild(new Trees(new Vector(85, 500, 1),
            new Vector(1, 1, 1), pSceneGraph));
        snowArray = [];
        for (i = 0; i < 1250; i += 1) {
            pX = Math.random() * 1000;
            pY = Math.random() * -5000;
            snowArray.push(new Snow(pX, pY));
        }
    }
    function draw() {
        rootSceneNode.draw(context, worldTransformMatrix);
        for (i = 0; i < snowArray.length; i += 1) {
            snowArray[i].draw(context, snowTransformMatrix);
        }
    }
    function update() {
        var x, y, translationMatrix;
        x = 0;
        y = 0.07 * deltaTime;
        translationMatrix = Matrix.createTranslation(new Vector(x, y, 1));
        snowTransformMatrix =
            snowTransformMatrix.multiply(translationMatrix);
    }
    function gameLoop() {
        thisTime = Date.now();
        deltaTime = thisTime - lastTime;
        update();
        draw();
        lastTime = thisTime;
        window.requestAnimationFrame(gameLoop);
    }
    initialiseCanvasContext();
    initialiseSceneGraph();
    draw();
    gameLoop();
}
window.addEventListener('load', onLoad, false);