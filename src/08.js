function arrayMirroring(arr) {
    return arr = [...arr, ...arr.reverse()]
}

console.log(arrayMirroring([1,2,3]));

module.exports = arrayMirroring