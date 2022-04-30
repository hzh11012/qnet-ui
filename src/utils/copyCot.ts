function createNode(text: string) {
  const node = document.createElement('div');

  node.innerText = text;
  node.style.cssText =
    'position:absolute; top: 0; left: 0; height:0; width:0; pointer-events: none;';

  document.body.appendChild(node);

  return node;
}

export default function copyCot(text: string) {
  const targetNode = createNode(text);
  const range = document.createRange();

  const selection = window.getSelection()!;
  const selected = selection.rangeCount > 0 ? selection.getRangeAt(0) : false;

  targetNode.focus(); // focus 我们需要的文本
  range.selectNodeContents(targetNode);

  if (selected) {
    selection.removeAllRanges();
    selection.addRange(range);
  }

  let result;

  try {
    result = document.execCommand('copy');
  } catch (e) {
    result = false;
  }

  document.body.removeChild(targetNode);

  return result;
}
