let row = 5;
let column = 5;
let caro = [];
let i, j;
let board; // sẽ hiện caro trên html
// let changeBtn = document.getElementById(changeBtn);
//
for (i = 0; i < row; i++) {
	caro[i] = [];
	// Mỗi lần tạo 1 row thêm 5 array rỗng
	for (j = 0; j < column; j++) {
		//  Mỗi lần có array rỗng thêm 5 số 0
		caro[i][j] = "(.)";
	}
	// Xong mỗi dòng thì join và xuống dòng và lặp dòng tiếp theo
	board = `${caro[i].join(" ")} <br>`;
	document.write(board);
}
//
function change() {
	let x = +prompt("Nhập vị trí hàng");
	let y = +prompt("Nhập vị trí cột");
	if (x > 5 || y > 5) {
		alert("Vui lòng nhập lại");
		return;
	}
	// Toạ độ x y sẽ thay số 0 ở vị trí tương ứng trong caro là "*"
	caro[x][y] = "*";
	// Reset lại board
	board = "";
	// Load lại board
	for (i = 0; i < row; i++) {
		board += `${caro[i].join(" ")} <br>`;
	}
	document.write(board);
}
