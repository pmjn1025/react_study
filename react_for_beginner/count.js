const spanCount = document.querySelector('.count span')
const countBtn = document.querySelector('.count button')

let cnt = 0

console.log(spanCount)

countBtn.addEventListener('click', countHandler)

function countHandler(event) {
  //   event.preventDefault()
  cnt++
  spanCount.innerText = `Total Click : ${cnt}`
}
