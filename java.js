const list = document.querySelectorAll('span')
var index = 0

setInterval ((e) => {
    list.forEach((e) => {
        e.classList.remove('change')
    })
    list[index].classList.add('change')
    index++
    if (index == list.length) {
        index = 0
    }
}, 200)

const list1 = document.querySelectorAll('div div')
var index = 0

setInterval ((e) => {
    list1.forEach((e) => {
        e.classList.remove('change2')
    })
    list1[index].classList.add('change2')
    index++
    if (index == list1.length) {
        index = 0
    }
}, 200)