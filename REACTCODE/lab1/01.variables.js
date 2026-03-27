// khai báo biến: var, let, const

// let count = 0
// count = 1    
// console.log(count)  // let cho phép gán lại giá trị

// // const name = "Doan"
// // name = "Doan Nguyen"  // const không cho phép gán lại giá trị
// // console.log(name)


// const user = { id :1 }
// user.id = 2  // const không cho phép gán lại giá trị nhưng có thể thay đổi thuộc tính của đối tượng
// console.log(user);

console.log(name)  
var name = "Doan"  // var cho phép sử dụng biến trước khi khai báo (hoisting)
console.log(name) // hoisting: var name; được đưa lên đầu scope, nhưng chưa được gán giá trị nên sẽ trả về undefined khi gọi trước khi khai báo.

if (true) {
    var insideIf = "inside if"
    let insideIfLet = "inside if let"
    console.log(insideIfLet)  // let có phạm vi block scope, nên biến insideIfLet chỉ có thể truy cập được bên trong block if
}
console.log(insideIf)  // var có phạm vi function scope, nên biến insideIf vẫn có thể truy cập được bên ngoài block if
// console.log(insideIfLet)  // ReferenceError: insideIfLet is not defined, vì biến insideIfLet chỉ có phạm vi block scope nên không thể truy cập được bên ngoài block if