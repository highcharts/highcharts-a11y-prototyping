var parsePreferences = (str) => {
  const lines = str.trim().split('\n');
  const stack = [];
  let root = [];
  console.log("lines",lines)

  lines.forEach(line => {
    console.log("root",root)
    const indentLevel = (line.match(/-/g) || []).length;
    console.log("indentLevel",indentLevel)
    if (!indentLevel) {console.log("FAILURE")}

    const cleanLine = line.replaceAll('- ',''); // Remove '- ' from the start
    console.log("cleanline",cleanLine)

    const [name, optionsStr] = cleanLine.split(' (');
    console.log("options are...",optionsStr)

    const options = optionsStr ? optionsStr.slice(0, -1).split(', ') : [];
    console.log(options,"options")

    const newItem = {
      name: name.trim(),
      options: options,
      children: []
    };

    if (indentLevel === 1) {
        root.push(newItem);
    } else {
        const parent = root[root.length - 1];
        console.log("parent",parent)
        // if (!parent.children) parent.children = [];
        let target = parent;
        if (indentLevel === 3) {
            target = parent.children[parent.children.length - 1];

            console.log("new target",target)
        }
        target.children.push(newItem)
    }

    // if (stack.length === 0) {
    //   root.push(newItem);
    //   stack.push(root[root.length - 1]);
    // } else {
    //   const parent = stack[stack.length - 1];
    //   if (!parent.children) parent.children = [];
    //   parent.children.push(newItem);
    //   stack.push(parent.children[parent.children.length - 1]);
    // }
  });

  // Clean up empty children arrays
//   const cleanTree = (node) => {
//     if (node.children.length === 0) delete node.children;
//     else node.children.forEach(cleanTree);
//   };
//   root.forEach(cleanTree);

  return root;
}