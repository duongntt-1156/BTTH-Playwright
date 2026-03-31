// Khai báo các biến
// dùng const cho những giá trị không thay đổi
const age: number = 40;
const isActive: boolean = true;
// mảng string bằng cú pháp string[]
const roles: string[] = ["admin", "user", "editor"];
// object với kiểu cụ thể { key: type }
const user: { name: string; email: string; isAdmin: boolean } = {
  name: "Duong B",
  email: "duongb@example.com",
  isAdmin: true,
};

// dùng let nếu giá trị có thể thay đổi
let username: string = "Duong B";
username = "New Name"; // minh họa thay đổi

// In ra thông tin user
console.log(
  `User: ${user.name} (email: ${user.email}), Roles: ${roles.join(", ")}, Active: ${isActive}`
);

// Function check age
function checkAge(userAge: number): void {
  if (userAge >= 18) {
    console.log("Adult");
  } else {
    console.log("Under 18");
  }
}

// Kiểm tra age
checkAge(age);
