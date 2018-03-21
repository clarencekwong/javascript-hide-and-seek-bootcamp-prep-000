function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var i = document.getElementById('app').querySelectorAll('ul.ranked-list')
  for (let y = 0; y < i.length; y++) {
    i[y].innerHTML = parseInt(i[y].innerHTML) + n
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}