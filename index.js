function inOrder(currentNode){
  if(currentNode.left){
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)
  if(currentNode.right){
    inOrder(currentNode.right)
  }
}

function findOrAdd(root, node) {
  if(root.data === node.data) {
    return true;
  }
  if(node.data < root.data) {
    if(root.left) {
      return findOrAdd(root.left, node)
    }
    else {
      return root.left = node
    }
  }
  if(node.data > root.data) {
    if(root.right) {
      return findOrAdd(root.right, node)
    }
    else {
      return root.right = node
    }
  }
}

function max(root) {
  if(root.right) {
    return max(root.right)
  }
  else {
    return root
  }
}

function min(root) {
  if(root.left) {
    return min(root.left)
  }
  else {
    return root
  }
}
