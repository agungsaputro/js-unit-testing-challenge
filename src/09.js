function symmetrical(text) {
    text = text.toString()
    text = text.replace(/\W/ig,"")
    const symm = text.split(" ").reverse().join("")

    if(text === symm){
        return true
    }else{
        return false
    }
}

console.log(symmetrical("malam"))

module.exports = symmetrical