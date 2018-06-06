/*global Vector, Matrix*/
var SceneGraphNode = (function () {
    function SceneGraphNode(pLocalTransformMatrix) {
        this.setLocalTransformMatrix(pLocalTransformMatrix);
        this.mArrayOfChildren = [];
    }

    SceneGraphNode.prototype.getLocalTransformMatrix = function () {
        return this.mLocalTransformMatrix;
    };
    SceneGraphNode.prototype.setLocalTransformMatrix = function (pLocalTransformMatrix) {
        this.mLocalTransformMatrix = pLocalTransformMatrix;
    };
    SceneGraphNode.prototype.getArrayOfChildren = function () {
        return this.mArrayOfChildren;
    };
    SceneGraphNode.prototype.setArrayOfChildren = function (pArrayOfChildren) {
        this.mArrayOfChildren = pArrayOfChildren;
    };

    SceneGraphNode.prototype.addChild = function (childToAdd) {
        this.mArrayOfChildren.push(childToAdd);
    };
    SceneGraphNode.prototype.getNumberOfChildren = function () {
        return this.mArrayOfChildren.length;
    };
    SceneGraphNode.prototype.getChildAt = function (arrayIndex) {
        if (arrayIndex < this.mArrayOfChildren.length) {
            return this.mArrayOfChildren[arrayIndex];
        }
        return -1;
    };

    SceneGraphNode.prototype.draw = function (pContext, pWorldTransformMatrix) {
        var multipliedMatrix, i, numberOfChildren;
        numberOfChildren = this.getNumberOfChildren();
        multipliedMatrix = pWorldTransformMatrix.multiply(this.getLocalTransformMatrix());
        multipliedMatrix.setTransform(pContext);
        for (i = 0; i < numberOfChildren; i += 1) {
            this.getChildAt(i).draw(pContext, multipliedMatrix);
        }
    };

    return SceneGraphNode;
}());