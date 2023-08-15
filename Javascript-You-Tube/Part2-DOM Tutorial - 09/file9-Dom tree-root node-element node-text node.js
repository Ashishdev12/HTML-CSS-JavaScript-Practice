// // Deeply understand dom tree, root node , element nodes, text nodes = 111

// const rootNode = document.getRootNode();
// // console.log(rootNode.childNodes);

// const htmlElementNode = rootNode.childNodes[1];
// // console.log(htmlElementNode.childNodes); output = NodeList(3) [head, text, body]

// const headElementNode = htmlElementNode.childNodes[0];
// const textNode1 = htmlElementNode.childNodes[1];
// const bodyElementNode = htmlElementNode.childNodes[2];
// // console.log(headElement,textElement,bodyElement);
// // console.log(headElementNode.parentNode);

// // sibling node
// // console.log(headElementNode.nextSibling);
// // console.log(headElementNode.nextElementSibling);
// console.log(headElementNode.childNodes);

// const h1 = document.querySelector("h1");
// const div = h1.parentNode;
// div.style.backgroundColor = "green";
// div.style.color = "white";

// const body = h1.parentNode.parentNode;
// body.style.backgroundColor = "green";

// const body = document.body
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333"

// const head = document.querySelector("head");
// // console.log(head);
// const title = head.querySelector("title");
// console.log(title);

const container = document.querySelector(".container");
console.log(container.children);