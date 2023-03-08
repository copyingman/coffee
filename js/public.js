// 點擊產品導航跳到相應位置
const items = document.querySelectorAll('.anniu')
const neirongs = document.querySelectorAll('.neirong')
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function () {
        // document.querySelector('#btn1 .action').classList.remove('action')
        // this.classList.add('action')
        document.documentElement.scrollTop = neirongs[i].offsetTop
    })
}

// backtop
const backtop = document.querySelector('.backtop')
window.addEventListener('scroll', function () {
    let num = document.documentElement.scrollTop
    if (num >= 200) {
        backtop.style.display = 'block'
    } else {
        backtop.style.display = 'none'
    }
})
backtop.addEventListener('click', function () {
    document.documentElement.scrollTop = 0
})


// const lis = document.querySelectorAll('.rexiao li')
// for (let i = 0; i < lis.length; i++) {
//     lis[i].addEventListener('mouseenter', function () {
//         for (let j = 0; j < lis.length; j++) {
//             lis[j].style.width = '106.66px'
//         }
//         this.style.width = '853.33px'
//     })
//     lis[i].addEventListener('mouseleave', function () {
//         for (let j = 0; j < lis.length; j++) {
//             lis[j].style.width = '256px'
//         }
//     })
// }