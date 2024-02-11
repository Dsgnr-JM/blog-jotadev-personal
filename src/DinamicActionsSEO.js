function changeTitle (title) {
  return (document.title = title ?? document.title)
}

function urlReplaceToLines ( url, toLines ) {
  const type = toLines ? [' ','-'] : ['-', ' ']
  return url.replaceAll(...type)
}

export { changeTitle, urlReplaceToLines }
