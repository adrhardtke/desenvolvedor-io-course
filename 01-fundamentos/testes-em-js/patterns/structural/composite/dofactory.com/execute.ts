import { Node } from "./Node";
import { Traverse } from "./Traverse";

const run = () => {
    let tree = new Node("root");
    let left = new Node("left")
    let right = new Node("right");
    let leftleft = new Node("leftleft");
    let leftright = new Node("leftright");
    let rightleft = new Node("rightleft");
    let rightright = new Node("rightright");

    tree.add(left);
    tree.add(right);
    tree.remove(right);  // note: remove
    tree.add(right);

    left.add(leftleft);
    left.add(leftright);

    right.add(rightleft);
    right.add(rightright);

    new Traverse(1, tree);
}

run()