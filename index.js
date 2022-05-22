// const auto = {
//     name: "Thar",
//     type: "4 Wheeler",
//      X4 : true,
//     automatic: false,
// }
// const thar = Object.create(auto)
// thar.name = "Thar 4X4"

// const o1 = Object.create(thar,{offroader:{value:true}})
// // console.log(o1.automatic)


// function Happy(n,t,p,b) {
//     this.name = n
//     this.type = t
//     this.price = p
//     this.brand = b
// }

// Happy.prototype.discount = function () {
//     console.log("50%")
// }

// let p1 = new Happy("thar","4 Wheeler",17+" lakh","Mahindra")
// let p2 = new Happy("4X4","4 Wheeler",20+" lakh","Mahindra")
// console.log(p1)
// console.log(p2)


// let arr = [1,2,3,4]
// // console.log(arr);

// let arr2 = new Array(1,2,3,4)
// // console.log(arr2);

function myArray() {
    Object.defineProperty(this,"length", {
        value:0,
        Writable:true,
        enumerable:false
    })

    this.length = arguments.length

    for (let i=0;i<arguments.length;i++)
    {
        this[i] = arguments[i]
    }
    
}

let arr3 = new myArray(1,2,3,4,5,6)

// console.log(Object.values(arr3))

myArray.prototype.पुश = function (value) {
    this[this.length] = value
    this.length++
}

arr3.पुश(7)
// console.log(Object.values(arr3))

let arr = new myArray(1,2,3,4)

myArray.prototype.pop = function () {
    delete this[this.length-1]
    this.length--
}
arr.pop()

myArray.prototype.टोप = function () {
    console.log (this[this.length])
}

arr.टोप()
myArray.prototype.छापो = function() {
    console.log(Object.values(arr))
}
arr.छापो()

myArray.prototype.उल्टा = function() {
    let a = [];
    for (let i=this.length;i>=0;i--)
    {
          a.push(this[i])
    }
    console.log(a)
}
arr.उल्टा()
myArray.prototype.आकार = function () {
    console.log(this.length)
}
arr.आकार()
// console.log(Object.values(arr))
