class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// function treeTraversalInorder(root, result = []) {
// 	if (root === null) {
// 		return [];
// 	}

// 	treeTraversalInorder(root.left, result);
// 	result.push(root.value);
// 	treeTraversalInorder(root.right, result);
// 	return result;
// }

function treeTraversalInorder(root) {
	const result = [];
	const pending = root? [root] : [];

	while (pending.length > 0) {
		const node = pending[0];

		if (node.left && !node.done) {
			pending.unshift(node.left);
			node.done = true;
			continue;
		}

		delete node.done;
		result.push(node.value);
		pending.shift();

		if (node.right) {
			pending.unshift(node.right);
		}
	}

	return result;
}

if (require.main === module) {
  // add your own tests in here
  let root = new Node(2, new Node(-10), new Node(20));

  console.log("Expecting: [-10, 2, 20]");
  console.log(treeTraversalInorder(root));

  console.log("");

  root = new Node(10, new Node(0, null, new Node(5)), new Node(20, null, new Node(30)));
  console.log("Expecting: [0, 5, 10, 20, 30] ");
  console.log(treeTraversalInorder(root));
}

module.exports = {
  Node,
  treeTraversalInorder
};

// Please add your pseudocode to this file
// And a written explanation of your solution
/**
 * 
 * 
 * 
 * 
 */
