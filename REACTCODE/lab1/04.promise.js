// Promise
// Promise là một đối tượng đại diện cho một giá trị có thể chưa được biết tại thời điểm tạo ra nó, nhưng sẽ được xác định trong tương lai. Nó cho phép bạn xử lý các tác vụ bất đồng bộ một cách dễ dàng hơn bằng cách cung cấp một cách để đăng ký các hàm callback để xử lý kết quả khi nó có sẵn.

// Một Promise có ba trạng thái: pending (đang chờ), fulfilled (đã hoàn thành) và rejected (đã bị từ chối). Khi một Promise được tạo ra, nó sẽ ở trạng thái pending. Khi tác vụ bất đồng bộ hoàn thành thành công, Promise sẽ chuyển sang trạng thái fulfilled và trả về kết quả. Nếu tác vụ bất đồng bộ gặp lỗi, Promise sẽ chuyển sang trạng thái rejected và trả về lỗi.

// Cách sử dụng Promise:

// Tạo một Promise mới
const myPromise = new Promise((resolve, reject) => {
    // Thực hiện một tác vụ bất đồng bộ, ví dụ: gọi API
    setTimeout(() => {
        const success = true; // Giả sử tác vụ thành công
        if (success) {
            resolve("Tác vụ hoàn thành thành công!"); // Trả về kết quả khi tác vụ hoàn thành
        } else {
            reject("Tác vụ thất bại!"); // Trả về lỗi khi tác vụ thất bại
        }
    }, 1000);
});

// Sử dụng Promise
myPromise
    .then(result => {
        console.log(result); // Xử lý kết quả khi Promise được fulfilled
    })
    .catch(error => {
        console.error(error); // Xử lý lỗi khi Promise bị rejected
    });

// Ngoài ra, bạn cũng có thể sử dụng async/await để làm việc với Promise một cách dễ dàng hơn:

async function asyncFunction() {
    try {
        const result = await myPromise; // Chờ Promise hoàn thành và lấy kết quả
        console.log(result); // Xử lý kết quả
    } catch (error) {
        console.error(error); // Xử lý lỗi
    }
}

asyncFunction();    

async function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        console.log("Fetching user data ${id}..."); 
        setTimeout(() => {
            const userData = { id: userId, name: "Alice" }; // Giả sử dữ liệu người dùng được trả về
            if (id > 0)
                resolve({userId, name: "Nguyen Doan", email: "nguyendoan@example.com"}); // Trả về dữ liệu người dùng khi tác vụ hoàn thành
            else
                reject("Invalid user ID!"); // Trả về lỗi khi tác vụ thất bại
        }, 1000);
    });
}

const user = fetchUserData(1)
console.log(user)  // output: Promise { <pending> }, vì fetchUserData trả về một Promise đang ở trạng thái pending khi được gọi

// hoặc
fetchUserData(1)
    .then(userData => {
        console.log(userData); // Xử lý dữ liệu người dùng khi Promise được fulfilled
    })
    .then(() => {
        console.log("Fetch user data operation completed."); // Thực hiện một hành động nào đó sau khi Promise đã được fulfilled, ví dụ: ẩn loading spinner
    })
    .catch(error => {
        console.error(error); // Xử lý lỗi khi Promise bị rejected
    })
    .finally(() => {
        console.log("Fetch user data operation completed."); // Thực hiện một hành động nào đó sau khi Promise đã được fulfilled hoặc rejected, ví dụ: ẩn loading spinner
    });

    
fetch ("https://jsonplaceholder.typicode.com/users")  // gọi API để lấy dữ liệu người dùng
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok"); // Nếu phản hồi không thành công, ném ra lỗi
        }
        return response.json(); // Chuyển đổi phản hồi thành JSON   
    })
    .then((data) => {
        console.log("Danh sách Users: ",data); // Xử lý dữ liệu người dùng khi Promise được fulfilled
        return data; // Trả về dữ liệu người dùng để có thể sử dụng ở nơi khác nếu cần
    })
    .catch((error) => {
        console.error("There was a problem with the fetch operation:", error); // Xử lý lỗi khi Promise bị rejected
    });


    async function loadUserData() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const users = await response.json(); // Chuyển đổi phản hồi thành JSON, nếu phản hồi không thành công sẽ ném ra lỗi và được catch ở khối catch bên dưới
            console.log("Danh sách Users: ", users); // Xử lý dữ liệu người dùng khi Promise được fulfilled
        } catch (error) {
            console.error("There was a problem with the fetch operation:", error);
        }
    }

    loadUserData();