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

function hideComentBlockIfPortrait() {
	if(window.screen.availHeight > window.screen.availWidth) {
		findElementBySubClass('div', 'DivBrowserModeContainer').childNodes[1].style.display = 'none'
	}
}

hideComentBlockIfPortrait()

function isAll(oldTimeNum=0, isAllFunction=undefined) {

	if (isAllFunction===undefined) {
		isAllFunction = nextVideo
	}

	const timeNum = getTimeNum()
	
	if (oldTimeNum>timeNum) {
		isAllFunction()
	}
	setTimeout(isAll, 300, timeNum, isAllFunction)
}

isAll()
