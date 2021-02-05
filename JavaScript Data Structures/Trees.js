// Data like tree relationship e.g. The Browser DOM or a decision tree, consists of:
// 1-Node/Vertex (contains value) 2-Edge (connection between nodes) 3-Root Node (top-most node) 4-Sub Tree (nested tree) 5-Leaf (a node without any child) 6-Path (a sequence of nodes and edges that connects 2 nodes) 7-Distance (number of edges between two nodes) 8-Parent/Child/Sibling/Ansector/Descendant 9-Degree (number of child nodes) 10-Level (distance between node and root) 11-Depth (maximum level in tree) 12-Breath (number of leaves) 13-Size (total number of nodes)
// Time Complexities: element access/search O(n) - Insert element O(n) - Remove elements O(n)

class Node {
  constructor(value, parentNode = null) {
    this.children = [];
    this.value = value;
    this.parent = parentNode;
  }

  addNode(value) {
    const segments = value.split("/");

    if (segments.length === 0) {
      return;
    }
    if (segments.length === 1) {
      const node = new Node(segments[0], this);
      this.children.push(node);
      return { node: node, index: this.children.length - 1 };
    }
    const existingChildNode = this.children.find(
      (child) => child.value === segments[0]
    );

    if (existingChildNode) {
      existingChildNode.addNode(segments.slice(1).join("/"));
    } else {
      const node = new Node(segments[0], this);
      node.addNode(segments.slice(1).join("/"));
      this.children.push(node);
      return { node: node, index: this.children.length - 1 };
    }
  }

  removeNode(value) {
    const segments = value.split("/");

    if (segments.length === 0) {
      return;
    }
    if (segments.length === 1) {
      const existingNodeIndex = this.children.findIndex(
        (child) => child.value === segments[0]
      );
      if (existingNodeIndex < 0) {
        throw new Error("Could not find matching value!");
      }
      this.children.splice(existingNodeIndex, 1);
    }
    if (segments.length > 1) {
      const existingChildNode = this.children.find(
        (child) => child.value === segments[0]
      );

      if (!existingChildNode) {
        throw new Error(
          "Could not find matching path! Path segment: " + segments[0]
        );
      }

      existingChildNode.removeNode(segments.slice(1).join("/"));
    }
  }

  // Depth-first
  find(value) {
    console.log(this);
    for (const child of this.children) {
      if (child.value === value) {
        return child;
      }
      const nestedChildNode = child.find(value);
      if (nestedChildNode) {
        return nestedChildNode;
      }
    }
  }

  // Breadth-firs t
  findBreathFirst(value) {
    console.log(this);
    for (const child of this.children) {
      if (child.value === value) {
        return child;
      }
    }
    for (const child of this.children) {
      const nestedChildNode = child.find(value);
      if (nestedChildNode) {
        return nestedChildNode;
      }
    }
  }
}

class Tree {
  constructor(rootValue) {
    this.root = new Node(rootValue);
  }

  add(path) {
    this.root.addNode(path);
  }

  remove(path) {
    this.root.removeNode(path);
  }

  find(value) {
    if (this.root.value === value) {
      return this.root;
    }
    return this.root.find(value);
  }
}

const filesystem = new Tree("/");
filesystem.add("documents");
filesystem.add("documents/myData/tax.docx");
filesystem.add("personal");
filesystem.add("games/cod.exe");
filesystem.add("games/cod2.exe");
filesystem.remove("games/cod.exe");
console.log(filesystem);

// Traversing Tree : 1-Depth-First 2-Breath-First
// Which one is better depends on the tree, e.g. If values is deeply inside the tree, choose BFS
console.log(filesystem.find("personal"));
