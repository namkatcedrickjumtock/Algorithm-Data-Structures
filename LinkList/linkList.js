// A linked list is a collection of objects called nodes. Each node is linked to a successor
// node in the list using an object reference.
var Nodes = /** @class */ (function () {
    function Nodes(elemet, next) {
        if (next === void 0) { next = null; }
        this.elemet = elemet;
    }
    return Nodes;
}());
var LinkList = /** @class */ (function () {
    function LinkList(find, insert, remove, display, head) {
        if (head === void 0) { head = new Nodes('head', null); }
        this.find = find;
        this.insert = insert;
        this.remove = remove;
        this.display = display;
        this.head = head;
    }
    LinkList.prototype.Find = function (item) {
        var currentNode = this.head;
        while (currentNode.elemet != item) {
        }
    };
    return LinkList;
}());
var nodeObject = new Nodes('head', null);
console.log(nodeObject);
