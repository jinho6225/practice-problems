function removeClassFromElement(ele, cls){
  var a = $(ele)
  a.removeClass(cls)
}

function toggleClassOnElement(ele, cls){
  var b = $(ele)
  b.toggleClass(cls)
}

function hideElements(target, type){
  var a = $(target)
  if (type === 'hide') {
    $(a).hide()
  }
  if (type === 'removeChildren') {
    var b = $(a).children()
    $(b).remove()
  }
  if (type === 'removeSelf') {
    $(a).remove()
  }
}

function addAttributeToElement(target, atrbt, targetEl){
  var a = $(target)
  $(a).attr(atrbt, targetEl)
}

function putPosInElement(ele){
  let obj = {}
  var a = $(ele).offset()
  obj['x'] = a.top;
  obj['y'] = a.left;
  $(ele).html('x: 220px<br>y: 220px')
  return obj;
}
