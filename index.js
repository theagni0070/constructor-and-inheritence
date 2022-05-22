const auto = {
    name: "Thar",
    type: "4 Wheeler",
     X4 : true,
    automatic: false,
}
const thar = Object.create(auto)
thar.name = "Thar 4X4"

const o1 = Object.create(thar,{offroader:{value:true}})
// console.log(o1.automatic)


function Happy(n,t,p,b) {
    this.name = n
    this.type = t
    this.price = p
    this.brand = b
}

let p1 = new Happy("thar","4 Wheeler",17+" lakh","Mahindra")
let p2 = new Happy("4X4","4 Wheeler",20+" lakh","Mahindra")
console.log(p1)
console.log(p2)
