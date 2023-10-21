function findElementBySubClass(tagName, classSubStirng, last=false) {
	const elementArr = Array.from( document.querySelectorAll(tagName) )
	if (last) {
		return elementArr.findLast(el=>el.classList.value.includes(classSubStirng))
	}
	return elementArr.find(el=>el.classList.value.includes(classSubStirng))
}

function getTimeNum() {
	return +(findElementBySubClass('div','DivSeekBarTimeContainer')||{textContent:'0'}).textContent.split('/')[0].replace(':','')
}

function nextVideo() {
	findElementBySubClass('button', 'ButtonBasicButtonContainer', true)
	.click()
}

function hideComentBlock() {
	findElementBySubClass('div', 'DivBrowserModeContainer').childNodes[1].style.display = 'none'
	
}

hideComentBlock()

function isAll(oldTimeNum=0, isAllFunction=undefined) {

	if (isAllFunction===undefined) {
		isAllFunction = nextVideo
	}

	var timeNum = getTimeNum()

	var timeout = 300
	
	if (oldTimeNum>timeNum) {
		isAllFunction()
	}
	setTimeout(isAll,timeout,timeNum,isAllFunction)
}

isAll()
