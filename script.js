
let inputData = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'TypeScript',
    'Python',
    "REACT Native",
    "How to create Website using HTML CSS JavaScript"
]

const inputBox = document.getElementById("input-box")
const resultBox = document.querySelector(".result-box")



// inputBox.onkeyup = function(){
//     let outputData = []  
//     const input = inputBox.value
//     if(input.length){
//         outputData = inputData.filter((word) => {
//             return word.toLowerCase().includes(input.toLowerCase())
//         })
      

//     }
//     display(outputData)

// }
// function display(outputData){
//     const content = outputData.map((list) => {
//         return "<li>" + list + "</li>"
//      })
//      resultBox.innerHTML = "<ul>" + content.join("") + "</ul>"
// }

// function selectWord(list){
//     inputBox.value = list.value
//     resultBox.innerHTML = ""
// }
inputBox.onkeyup = function(){
    let data = []
    const input = inputBox.value
    if(input.length){
        data = inputData.filter((word) => {
            return word.toLowerCase().includes(input.toLowerCase())
        })
        showData(data)
    }
    else{
        showData([])
    }

}
function showData(data){
    const content = data.map((list) => {

        return "<li> "+  list + "</li>"
    })
    resultBox.innerHTML = "<ul>" + content.join("") + "</ul>"
    resultBox.style.overflowY = "auto"
    addEvent(evt)
}

