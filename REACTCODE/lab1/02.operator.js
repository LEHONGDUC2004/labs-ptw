// Nullish coalescing operator (??) returns the right-hand side operand when the left-hand side operand is null or undefined, otherwise it returns the left-hand side operand.
// Ý nghĩa: lấy vế phải nếu vế trái là null hoặc undefined, ngược lại lấy vế trái
// Dùng khi muốn gán giá trị mặc định cho biến khi biến đó có giá trị null hoặc undefined, tránh việc gán giá trị mặc định khi biến đó có giá trị falsy như 0, "", false, NaN
const a = null ?? "default value"
console.log(a)  // output: "default value"

const b = undefined ?? "default value"
console.log(b)  // output: "default value"

const c = 0 ?? "default value"
console.log(c)  // output: 0, vì 0 không phải là null hoặc undefined nên sẽ trả về vế trái

const d = "" ?? "default value"
console.log(d)  // output: "", vì "" không phải là null hoặc undefined nên sẽ trả về vế trái

const e = false ?? "default value"
console.log(e)  // output: false, vì false không phải là null hoặc undefined nên sẽ trả về vế trái

const f = NaN ?? "default value"
console.log(f)  // output: NaN, vì NaN không phải là null hoặc undefined nên sẽ trả về vế trái

const g = null ?? undefined ?? "default value"
console.log(g)  // output: "default value", vì cả null và undefined đều là nullish nên sẽ trả về vế phải là "default value"

const h = undefined ?? null ?? "default value"
console.log(h)  // output: "default value", vì cả undefined và null đều là nullish nên sẽ trả về vế phải là "default value"

const i = null ?? "default value" ?? undefined
console.log(i)  // output: "default value", vì null là nullish nên sẽ trả về vế phải là "default value", còn undefined sẽ không được xét đến vì đã có giá trị trả về từ vế phải trước đó

const j = undefined ?? "default value" ?? null
console.log(j)  // output: "default value", vì undefined là nullish nên sẽ trả về vế phải là "default value", còn null sẽ không được xét đến vì đã có giá trị trả về từ vế phải trước đó

const k = null ?? undefined ?? null ?? "default value"
console.log(k)  // output: "default value", vì cả null và undefined đều là nullish nên sẽ trả về vế phải là "default value"

const l = undefined ?? null ?? undefined ?? "default value"
console.log(l)  // output: "default value", vì cả undefined và null đều là nullish nên sẽ trả về vế phải là "default value"

const m = null ?? undefined ?? null ?? undefined
console.log(m)  // output: undefined, vì cả null và undefined đều là nullish nên sẽ trả về vế phải là undefined, còn "default value" sẽ không được xét đến vì đã có giá trị trả về từ vế phải trước đó

const n = undefined ?? null ?? undefined ?? null
console.log(n)  // output: null, vì cả undefined và null đều là nullish nên sẽ trả về vế phải là null, còn "default value" sẽ không được xét đến vì đã có giá trị trả về từ vế phải trước đó

const o = null ?? undefined ?? null ?? undefined ?? "default value"
console.log(o)  // output: "default value", vì cả null và undefined đều là nullish nên sẽ trả về vế phải là "default value", còn các giá trị null và undefined trước đó sẽ không được xét đến vì đã có giá trị trả về từ vế phải trước đó

const p = undefined ?? null ?? undefined ?? null ?? "default value"
console.log(p)  // output: "default value", vì cả undefined và null đều là nullish nên sẽ trả về vế phải là "default value", còn các giá trị undefined và null trước đó sẽ không được xét đến vì đã có giá trị trả về từ vế phải trước đó

const q = null ?? undefined ?? null ?? undefined ?? null
console.log(q)  // output: null, vì cả null và undefined đều là nullish nên sẽ trả về vế phải là null, còn "default value" sẽ không được xét đến vì đã có giá trị trả về từ vế phải trước đó

const r = undefined ?? null ?? undefined ?? null ?? undefined
console.log(r)  // output: undefined, vì cả undefined và null đều là nullish nên sẽ trả về vế phải là undefined, còn "default value" sẽ không được xét đến vì đã có giá trị trả về từ vế phải trước đó

const s = null ?? undefined ?? null ?? undefined ?? null ?? "default value"
console.log(s)  // output: "default value", vì cả null và undefined đều là nullish nên sẽ trả về vế phải là "default value", còn các giá trị null và undefined trước đó sẽ không được xét đến vì đã có giá trị trả về từ vế phải trước đó                       


// NNullish coalescing operator (??) có thể kết hợp với optional chaining operator (?.) để truy cập vào thuộc tính của đối tượng mà không gây ra lỗi khi đối tượng đó là null hoặc undefined
// Ý nghĩa: lấy vế phải nếu vế trái là null hoặc undefined, falsy, ngược lại lấy vế trái
const a1 = null || "default value"
console.log(a1)  // output: "default value", vì null là falsy nên sẽ trả về vế phải là "default value"

const b1 = undefined || "default value"
console.log(b1)  // output: "default value", vì undefined là falsy nên sẽ trả về vế phải là "default value"

const c1 = 0 || "default value"
console.log(c1)  // output: "default value", vì 0 là falsy nên sẽ trả về vế phải là "default value"

const d1 = "" || "default value"
console.log(d1)  // output: "default value", vì "" là falsy nên sẽ trả về vế phải là "default value"

const e1 = false || "default value"
console.log(e1)  // output: "default value", vì false là falsy nên sẽ trả về vế phải là "default value"

const f1 = NaN || "default value"
console.log(f1)  // output: "default value", vì NaN là falsy nên sẽ trả về vế phải là "default value"

const g1 = null || "default value" || undefined
console.log(g1)  // output: "default value", vì null là falsy nên sẽ trả về vế phải là "default value", còn undefined sẽ không được xét đến vì đã có giá trị trả về từ vế phải trước đó

const h1 = undefined || null || "default value"
console.log(h1)  // output: "default value", vì undefined là falsy nên sẽ trả về vế phải là "default value", còn null sẽ không được xét đến vì đã có giá trị trả về từ vế phải trước đó

const i1 = null || "default value" || undefined
console.log(i1)  // output: "default value", vì null là falsy nên sẽ trả về vế phải là "default value", còn undefined sẽ không được xét đến vì đã có giá trị trả về từ vế phải trước đó

const j1 = undefined || "default value" || null
console.log(j1)  // output: "default value", vì undefined là falsy nên sẽ trả về vế phải là "default value", còn null sẽ không được xét đến vì đã có giá trị trả về từ vế phải trước đó

const k1 = null || undefined || null || "default value"
console.log(k1)  // output: "default value", vì cả null và undefined đều là falsy nên sẽ trả về vế phải là "default value"

const l1 = undefined || null || undefined || "default value"
console.log(l1)  // output: "default value", vì cả undefined và null đều là falsy nên sẽ trả về vế phải    

// OPTIONAL CHAINING OPERATOR (?.) cho phép truy cập vào thuộc tính của đối tượng mà không gây ra lỗi khi đối tượng đó là null hoặc undefined
// Ý nghĩa: nếu vế trái là null hoặc undefined thì trả về undefined, ngược lại trả về thuộc tính của đối tượng
const user = {
    name: "Doan",
    address: {
        city: "Quang Ngai",
        country: "Vietnam"
    }
}
console.log(user.address.city)  // output: "Quang Ngai", vì user.address không phải là null hoặc undefined nên sẽ trả về thuộc tính city của đối tượng address

console.log(user.contact?.email)  // output: undefined, vì user.contact là undefined nên sẽ trả về undefined mà không gây ra lỗi khi truy cập vào thuộc tính email của đối tượng contact

console.log(user.address?.street)  // output: undefined, vì user.address không phải là null hoặc undefined nên sẽ trả về undefined khi truy cập vào thuộc tính street của đối tượng address, vì street không tồn tại trong đối tượng address

console.log(user.address?.city)  // output: "Quang Ngai", vì user.address không phải là null hoặc undefined nên sẽ trả về thuộc tính city của đối tượng address

console.log(user.contact?.phone)  // output: undefined, vì user.contact là undefined nên sẽ trả về undefined mà không gây ra lỗi khi truy cập vào thuộc tính phone của đối tượng contact

console.log(user.address?.country)  // output: "Vietnam", vì user.address không phải là null hoặc undefined nên sẽ trả về thuộc tính country của đối tượng address

console.log(user.contact?.email?.length)  // output: undefined, vì user.contact là undefined nên sẽ trả về undefined mà không gây ra lỗi khi truy cập vào thuộc tính email của đối tượng contact, nên khi tiếp tục truy cập vào thuộc tính length của undefined sẽ trả về undefined mà không gây ra lỗi

console.log(user.address?.street?.length)  // output: undefined, vì user.address không phải là null hoặc undefined nên sẽ trả về undefined khi truy cập vào thuộc tính street của đối tượng address, nên khi tiếp tục truy cập vào thuộc tính length của undefined sẽ trả về undefined mà không gây ra lỗi

console.log(user?.address?.city)  // output: "Quang Ngai", vì user không phải là null hoặc undefined nên sẽ trả về thuộc tính city của đối tượng address

console.log(user?.contact?.email)  // output: undefined, vì user.contact là undefined nên sẽ trả về undefined mà không gây ra lỗi khi truy cập vào thuộc tính email của đối tượng contact

console.log(user?.address?.country)  // output: "Vietnam", vì user không phải là null hoặc undefined nên sẽ trả về thuộc tính country của đối tượng address

console.log(user?.contact?.phone)  // output: undefined, vì user.contact là undefined nên sẽ trả về undefined mà không gây ra lỗi khi truy cập vào thuộc tính phone của đối tượng contact

console.log(user?.address?.street)  // output: undefined, vì user.address không phải là null hoặc undefined nên sẽ trả về undefined khi truy cập vào thuộc tính street của đối tượng address, vì street không tồn tại trong đối tượng address           
