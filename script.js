let str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, cum."
let arr = str.split("")
for (let i = 0; i < arr.length; i++) {
    if (arr[i]=="a") {
        arr.splice(i,1)
    }
    if (arr[i]=="o") {
        arr.splice(i,1)
    }
    if (arr[i]=="e") {
        arr.splice(i,1)
    }
    if (arr[i]=="u") {
        arr.splice(i,1)
    }
    if (arr[i]=="i") {
        arr.splice(i,1)
    }
}
let string =arr.join("")
console.log(string);