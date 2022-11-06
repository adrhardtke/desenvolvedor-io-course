import { Node } from "./Node";

export class Traverse {
    constructor(readonly indent: any, readonly node: Node){
        console.log(Array(indent++).join("--") + node.name)
        
        for(let i = 0, len = node.children.length; i < len; i++){
            new Traverse(indent, node.getChild(i))
        }
    }
}

