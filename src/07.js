function repeatLetter(text, times){
    if(times >0){
        return text.trim().split("").map((x, i) =>  x == " " ? " " : x.repeat(times)).join("")
    }else{
        return ""
    }
}
console.log(repeatLetter("agung dwi", 3));
module.exports = repeatLetter