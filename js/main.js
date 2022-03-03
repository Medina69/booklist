let label = document.getElementsByTagName('label')[0]
// let input = document.getElementsByClassName('input')[0]
let inp1 = document.getElementById('inp1')
let inp2 = document.getElementById('inp2')
let inp3 = document.getElementById('inp3')
let btn0 = document.getElementsByTagName('button')[0]
let reverse = document.getElementById('btn')
let ol1 = document.getElementById('ol1')
let ol2 = document.getElementById('ol2')
let ol3 = document.getElementById('ol3')



let arr = [];
const refresh = () => {
    inp1.value = '';
    inp2.value = '';
    inp3.value = '';

}
btn0.onclick = () => {
    let textAdd1 = inp1.value
    let textAdd2 = inp2.value
    let textAdd3 = inp3.value

    if(textAdd1 && textAdd2 && textAdd3 !== ''){
        arr.push(textAdd1);
        arr.push(textAdd2);
        arr.push(textAdd3);

        ol1.innerHTML += `<li> ${textAdd1}</li>`
        ol2.innerHTML += `<li> ${textAdd2}</li>`
        ol3.innerHTML += `<li> ${textAdd3}</li>`

        // label.innerText = ''
        // label.innerText = `Book list(${arr.length})`
    } else{
        alert('напишете текст что нибудь')  
    }
    refresh()
}
// reverse.onclick = () => {
//     ol1.innerHTML = ''
//     ol2.innerHTML = ''
//     ol3.innerHTML = ''
//     arr.reverse().map(v => {
//     ol1.innerHTML += `<li> ${v}</li>`
//     ol2.innerHTML += `<li> ${v}</li>`
//     ol3.innerHTML += `<li> ${v}</li>`
//     });
// }  