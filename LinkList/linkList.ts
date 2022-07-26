// A linked list is a collection of objects called nodes. Each node is linked to a successor

// node in the list using an object reference.

class Nodes {
    constructor(public elemet: any, next: any = null) { }
}


class LinkList {
    constructor(public find: any, public insert: any, public remove: any, public display: any, public head: any = new Nodes('head', null),) {
    }


    Find(item: any) {
        let currentNode = this.head
        while (currentNode.elemet != item) { 
            
        }
    }
}
const nodeObject = new Nodes('head', null)
console.log(nodeObject);
