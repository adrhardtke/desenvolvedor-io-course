export class Node {
    children: any[]
    name: string
    constructor(name: string){
        this.children = []    
        this.name = name
    }

    add(child: any){
        this.children.push(child)
    }

    remove(child: any){
        this.children = this.children.filter(c => c !== child)
    }

    getChild(i: any){
        return this.children[i]
    }

    hasChildren(){
        return this.children.length > 0
    }
}