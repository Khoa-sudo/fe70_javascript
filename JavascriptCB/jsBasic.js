/**
 * Asynchronous - Bất đồng bộ
 * 1. Mặc định Browser xử lý Js theo hướng đồng bộ, xư lý từng dòng từ trên xuống dưới, từ trái -> phải
 * Tuy nhiên, 1 số tác vụ tốn nhiều thời gian, nếu xử lý đồng bộ sẽ là ứng dụng bị đứng
 */

console.log("a");
const showMessage = () => {
  console.log("b");
};
setTimeout(showMessage, 3000);
console.log("c");
