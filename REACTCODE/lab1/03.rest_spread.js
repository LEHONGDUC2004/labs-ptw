// REST param

function sum(a,b,c) {
    return a + b + c
}

console.log(sum(1,2,3))  // output: 6
// Dùng kỹ thuật REST param để gộp các tham số còn lại thành một mảng
function sumRest(...numbers) {
    return numbers.reduce((total, num) => total + num, 0) // numbers.reduce((total, num) => total + num, 0) sẽ tính tổng tất cả các phần tử trong mảng numbers, bắt đầu với giá trị khởi tạo là 0
}

console.log(sumRest(1,2,3))  // output: 6
console.log(sumRest(1,2,3,4,5))  // output: 15

function greet(greeting, ...names) {
    return `${greeting} ${names.join(", ")}`
}       
console.log(greet("Hello", "Alice", "Bob", "Charlie"))  // output: "Hello Alice, Bob, Charlie"

// Spread operator
const arr1 = [1,2,3]
const arr2 = [...arr1, 4,5]  // dùng spread operator để sao chép các phần tử của arr1 vào arr2 và thêm các phần tử mới vào arr2
console.log(arr2)  // output: [1,2,3,4,5]

const obj1 = { a: 1, b: 2 }
const obj2 = { ...obj1, c: 3 }  // dùng spread operator để sao chép các thuộc tính của obj1 vào obj2 và thêm thuộc tính mới vào obj2
console.log(obj2)  // output: { a: 1, b: 2, c: 3 }

const obj3 = { ...obj1, b: 3 }  // dùng spread operator để sao chép các thuộc tính của obj1 vào obj3 và ghi đè thuộc tính b của obj1 bằng giá trị mới
console.log(obj3)  // output: { a: 1, b: 3 }

const arr3 = [...arr1, ...arr2]  // dùng spread operator để sao chép các phần tử của arr1 và arr2 vào arr3
console.log(arr3)  // output: [1,2,3,1,2,3,4,5]

const obj4 = { ...obj1, ...obj2 }  // dùng spread operator để sao chép các thuộc tính của obj1 và obj2 vào obj4, nếu có thuộc tính trùng tên thì sẽ lấy giá trị của thuộc tính đó từ obj2
console.log(obj4)  // output: { a: 1, b: 2, c: 3 }

// Truyền đối số: mảng -> các phần tử của mảng
console.log(Math.max(...[1,2,3,4,5]))  // output: 5, dùng spread operator để truyền các phần tử của mảng vào hàm Math.max() như các đối số riêng biệt

const numbers = [1,2,3,4,5]
console.log(Math.max(...numbers))  // output: 5, dùng spread operator để truyền các phần tử của mảng numbers vào hàm Math.max() như các đối số riêng biệt   


// Spread object có thể được sử dụng để sao chép các thuộc tính của một đối tượng vào một đối tượng mới, tạo ra một bản sao nông (shallow copy) của đối tượng đó. Tuy nhiên, nếu đối tượng đó chứa các thuộc tính có giá trị là một đối tượng khác (nested object), thì khi sao chép bằng spread object, các thuộc tính đó sẽ không được sao chép mà chỉ được tham chiếu đến cùng một đối tượng trong bộ nhớ. Do đó, nếu bạn thay đổi giá trị của thuộc tính đó trong đối tượng mới, thì giá trị của thuộc tính đó trong đối tượng gốc cũng sẽ bị thay đổi vì chúng cùng tham chiếu đến một đối tượng trong bộ nhớ.

const obj5 = { a: 1, b: { c: 2 } }
const obj6 = { ...obj5 }  // dùng spread operator để sao chép các thuộc tính của obj5 vào obj6, nhưng thuộc tính b là một đối tượng khác nên sẽ được tham chiếu đến cùng một đối tượng trong bộ nhớ
console.log(obj6)  // output: { a: 1, b: { c: 2 } }

obj6.b.c = 3  // thay đổi giá trị của thuộc tính c trong đối tượng b của obj6
console.log(obj5)  // output: { a: 1, b: { c: 3 } }, giá trị của thuộc tính c trong đối tượng b của obj5 cũng bị thay đổi vì chúng cùng tham chiếu đến một đối tượng trong bộ nhớ   

const settings = { ...obj5, ...obj6 }  // dùng spread operator để sao chép các thuộc tính của obj5 và obj6 vào settings, nhưng vì obj5 và obj6 có cùng thuộc tính b nên giá trị của thuộc tính b trong settings sẽ là giá trị của thuộc tính b trong obj6, tức là { c: 3 
console.log(settings)  // output: { a: 1, b: { c: 3 } }, giá trị của thuộc tính b trong settings là giá trị của thuộc tính b trong obj6, tức là { c: 3 } vì obj6 được sao chép sau obj5 nên sẽ ghi đè giá trị của thuộc tính b trong obj5 vào settings

// copy object nông (shallow copy) bằng spread operator + ghi đè vài fields

const u1 = { id: 1, name: "Alice", age: 30 }
const u2 = { ...u1, name: "Bob" }  // dùng spread operator để sao chép các thuộc tính của u1 vào u2 và ghi đè thuộc tính name của u1 bằng giá trị mới
console.log(u2)  // output: { id: 1, name: "Bob", age: 30 }, giá trị của thuộc tính name trong u2 là giá trị mới "Bob" vì nó được ghi đè sau khi sao chép các thuộc tính của u1 vào u2, còn các thuộc tính id và age vẫn giữ nguyên giá trị từ u1 vì chúng không bị ghi đè trong quá trình sao chép.
console.log(u1)  // output: { id: 1, name: "Alice", age: 30 }, giá trị của thuộc tính name trong u1 vẫn giữ nguyên giá trị "Alice" vì nó không bị ghi đè trong quá trình sao chép các thuộc tính của u1 vào u2, còn các thuộc tính id và age cũng giữ nguyên giá trị từ u1 vì chúng không bị ghi đè trong quá trình sao chép.