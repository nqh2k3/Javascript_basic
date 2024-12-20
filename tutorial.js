const { func } = require("prop-types");

console.log("Hellow Wolrd");
console.log("Day la mot chuoi");
console.log(true);
console.log(null);
console.log(undefined);
console.log([1,2,3,4]);
console.log({name:"Alice",age:11});
console.log(20 * 5);
//Bien (Vairiable) va DataTypes

let age = 25;
console.log(age);
age = 26
console.log(age);

const pi = 3.14;
console.log(pi);

var name = "john";
console.log(name);

//Kieu du lieu

let number1 = 10;
let number2 = 3.14;
console.log(number1);
console.log(number2);

//string

let message = "Hello World";
console.log(message);

//Boolean

let isTrue = true;
let isFalse = false;
console.log(isTrue);
console.log(isTrue);

//null

let empty = null;
console.log(empty);

//undifined

let notDefined;
console.log(notDefined);

//Object

let person = {
    name: "alice",
    age:11,
}
console.log(person);

//array
let colors = ["red", "green", "blue"];
console.log(colors);

//Toan Tu (Operators)

//sum

let sum = 5 + 3;
console.log(sum);

//difference

let difference = 10 - 4;
console.log(difference);

//Nhan

let product = 6 * 7;
console.log(product);

// chia 

let chia = 20 / 5;
console.log(chia);

//Chia lay du %

let remainder = 10 % 3;
console.log(remainder);

//  Tang len 1 dv

let x = 5;
x++;
console.log(x);
x++;
console.log(x);

//Giam xuong 1

let y = 10;
y--;
 console.log(y);
y--;
console.log(y);

//Toan tu gan =

let a = 10;
console.log(a);

//Cong va gan

let b = 5;
b +=3;
console.log(b);

//tru va gan
let c = 10;
c -=4;
console.log(c);

//nhan va gan

let d = 2;
d *=5;
console.log(d);

//Chia va gan

let e = 20;

e /= 4;
console.log(e);

//chia du va gan
let f = 10;
f %= 3;
console.log(f);


 //toan tu so sanh == khogn so sanh kieu du lieu
 console.log(5 == "5"); //true

 // === so sanh gia tri va kieu du lieu
 console.log(5 === "5"); //true
 console.log(5 === 3);//false

 //Toan tu != so sanh gia tri khong so sanh kieu du lieu
 console.log(5 != "6"); //true
 //!== so sanh gia tri va kieu du lieu
 console.log(5 !== "5"); //true
 console.log(5 !== 5); //false

 // Toan tu lon hon >
 console.log(10 > 5);//true

//Toan tu be hon < 
console.log(3 < 7);//true
//toan tu lon hon bang >=
console.log(5 >= 5); // true

//toan tu nho hon bang <=
console.log(2 <= 3); //true

//Toan tu logic
//Toan tu && dung khi ca hai dieu kien deu dung

console.log(true && true); //true
console.log(true && false);//false

//Toan tu hoac || mot trong hai dieu kien dung

console.log(true || false); //true

console.log(false || false);//false
 
// ! phu dinh dao nguoc gia tri boolean
console.log(!true); //false
console.log(!false); //true

//Bai tap
//Tính tổng, hiệu, tích, thương của hai số a = 15 và b = 6 và in ra kết quả.

let n1 = 15;
let n2 = 6;

let tong = n1 + n2;
console.log(tong);

let hieu = n1 - n2;
console.log(hieu);

let thuong = n1 * n2;
console.log(thuong);

let tich = n1 * n2;
console.log(tich);

//Tính phần dư của phép chia a cho b và in ra.

let du = n1 % n2;
console.log(du);

//Khai báo hai biến age1 = 20 và age2 = "20". So sánh age1 và age2 bằng == và ===, in ra kết quả.
let age1 = 20;
let age2 = "20";
console.log(age1 == age2); //true
console.log(age1 === age2);//falase

//Khai báo một biến count bằng 10, sau đó tăng count lên 2 đơn vị bằng hai cách khác nhau (sử dụng ++ và +=). In ra giá trị count sau mỗi lần tăng.
let count = 10;

let temp =  count;

temp ++;
console.log(temp);
temp++;
console.log(temp);

let temp2 =count;
temp2 +=2;
console.log(temp2);

//Khai báo một biến isRaining = true và sau đó phủ định giá trị của biến đó và in ra kết quả.
let isRaining = true;
console.log(!isRaining);

//Kiểm tra xem một người có đủ tuổi lái xe (tuổi >= 18) và có bằng lái hay không. (Giả sử bạn có biến age và hasLicense).

let agec = 17;
let hasLicense = true;
console.log(agec >= 18 && hasLicense);

//Kiểm tra xem một số number có nằm trong khoảng từ 10 đến 20 (bao gồm cả 10 và 20) hay không.

let nt =11;
console.log(nt >= 10 && nt<=20);

//Câu điều kiện (Conditional Statements)
//cau lenh if
let agea = 20;
if(age >= 18 ){
    console.log("ban da truong thanh");
}

//cau lenh if else

let numberIf =7;
if(numberIf % 2 == 0){
    console.log("So chan");
}else{
    console.log("so le");
}

//cau len if else if else

let score = 85;

if (score >= 90){
    console.log(" Diem A");
}else if (score >= 80 ){
    console.log(" Diem B");
}else if (score >= 70){
    console.log(" Diem C");
}else{
    console.log(" Diem D");
}

//Bai tap
//Viết chương trình kiểm tra một số có phải là số dương hay không. In ra "Số dương" nếu đúng và "Không phải số dương" nếu sai.
let check = 10;
if(check > 0){
    console.log("So Duong");
}else{
    console.log("So Am");
}

//Viết chương trình kiểm tra một số có chia hết cho 3 và 5 hay không. In ra "Chia hết cho cả 3 và 5" nếu đúng và "Không chia hết" nếu sai.

let check1 = 15;

if(check1 % 3 == 0 && check1 % 5 == 0){
    console.log("Chia het cho 3 va 5");
}else{
    console.log(" Khong chia het");
}

/**Viết chương trình xếp loại học lực của một học sinh dựa vào điểm trung bình:

Nếu điểm >= 9: "Xuất sắc"

Nếu 8 <= điểm < 9: "Giỏi"

Nếu 6.5 <= điểm < 8: "Khá"

Nếu 5 <= điểm < 6.5: "Trung bình"

Nếu điểm < 5: "Yếu */

let hocLuc = 6;

if(hocLuc >= 9){
    console.log("Xuat Sac");
}else if(hocLuc >= 8 && hocLuc < 9){
    console.log(" Gioi");
}else if(hocLuc >=6.5 && hocLuc < 8){
    console.log(" Kha");
}else if (hocLuc >=5 && hocLuc < 6.5){
    console.log("Trung binh");
}else{
    console.log("Yeu");
}
//Viết chương trình so sánh hai số và in ra số lớn hơn. Nếu hai số bằng nhau thì in ra "Hai số bằng nhau".

let ss1 = 10;
let ss2 = 10;

if(ss1 > ss2){
    console.log("So ss1 lon hon ss2");
}else if(ss1 < ss2){
    console.log(" ss2 lon hon ss1");
    
}else if (ss1 == ss2){
    console.log(" 2 so bang nhau");
}else{
    console.log("...");
}

//Vong lap (Loop)

for (let i =0; i < 5; i++){
    console.log(i);
}

//vong lap for duyet qua cac phan tu cua mang
let arr = [1, 2, 3, 4, 5];
for(i =0; i < arr.length; i++){
    console.log(arr[i]);
}

//Vong lap while
//su dung khi khong biet truoc so lan lap

let countWhile = 0;
while (countWhile < 5 ){
    console.log(countWhile);
    countWhile ++;
}

/**Vòng lặp do...while:

Tương tự while, nhưng khối code được thực hiện ít nhất một lần trước khi kiểm tra điều kiện */

let j = 5;
do{
    console.log(j);
    j--;
}while(j > 0);

/**Từ khóa break và continue:

break: Dừng vòng lặp ngay lập tức. */

for ( let i = 0; i < 10; i++){
    if(i == 5){
        break;
    }
    console.log(i);
}

//continue: Bỏ qua lần lặp hiện tại và tiếp tục với lần lặp tiếp theo.

for(i = 0;i < 5; i++){
    if (i == 2){
        continue;
    }
    console.log(i);
}
//Bai tap 

//Sử dụng vòng lặp for để in ra các số từ 1 đến 10.
for(let i = 0; i <= 10; i++){
    console.log(i);
}

let numWhile = 2;
while( numWhile <= 20){
console.log(numWhile);
numWhile +=2
}

//Sử dụng vòng lặp do...while để in ra các số lẻ từ 15 đến 5 (theo thứ tự giảm dần).

let numberDoWhile = 15;
do{
console.log(numberDoWhile);
numberDoWhile -= 2;
}while(numberDoWhile >= 15)


//Tính tổng các số từ 1 đến 100 sử dụng vòng lặp for.

let sum1 =0;
for (i = 0; i <= 100; i++){
    sum1 += 1;
}
console.log(sum1);

//Tính tổng các số từ 1 đến 100 sử dụng vòng lặp for.

let numberArr = [10, 5, 8, 20, 3];

for (let i = 0; i < numberArr.length; i++){
    console.log(numberArr[i]);
}

//Cho một mảng names = ["Alice", "Bob", "Charlie", "David"]. Sử dụng vòng lặp để in ra từng tên kèm theo số thứ tự (ví dụ: 1. Alice, 2. Bob, ...).
let nameArr =  ["Alice", "Bob", "Charlie", "David"];

for(let i = 0; i < nameArr.length; i++){
    console.log( i + 1 +"."+ nameArr[i]);
}

//Viết chương trình in ra bảng cửu chương (từ 1 đến 10).

for ( let i = 1; i <= 10; i ++){
    console.log("Bang cuu chuong");
    for(let j = 1; j <=10; j++){
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log(" ");
}


//Cho một mảng numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Sử dụng vòng lặp và continue để chỉ in ra các số lẻ.

let numbersLe = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i < numbersLe.length; i++){
    if(numbersLe[i] % 2 === 0){
        continue;
    }
    else{
        console.log(numbersLe[i]);
    }
}

//Cho một mảng numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Sử dụng vòng lặp và break để dừng vòng lặp khi gặp số 7.

let numberS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i < numberS.length; i++){
    if(numberS[i] == 7){
        break;
    }
    console.log(numberS[i]);
}

//Ham Function
//Hàm không có tham số và không trả về giá trị:
function sayHellos(){
    console.log("hello");
}
sayHellos();

//Hàm có tham số và không trả về giá trị:
function greetName (name){
   console.log("Xin chao" + " "+ name + "!");
    
}
greetName("Huy")

//Hàm có tham số và trả về giá trị:

function add (a ,b){
    return a + b;

}

let sums = add(5, 4);
console.log( sums);

/**Arrow function (ES6+)

Cú pháp rút gọn để khai báo hàm */

const add1 = (a, b) =>{
    return a + b;
}

let sumS = add1( 5, 19);
console.log(sumS);

const square = a => a * a;
console.log(square(4));

//Khi hàm chỉ có một câu lệnh return, có thể viết ngắn gọn 
const multiply = (a, b) => a * b;
console.log(multiply(4,5));

//Viết một hàm tính diện tích hình chữ nhật (có chiều dài và chiều rộng là tham số). Gọi hàm và in ra kết quả.

function dienTich(chieudai, chieurong){
    return chieudai * chieurong;
}
console.log(dienTich(9,3));
//Viết một hàm kiểm tra một số có phải số nguyên tố hay không. Gọi hàm và in ra kết quả.

function isNguyenTo(n){
 if( n < 1){
    return false;
 }
 for( let i = 2; i <= Math.sqrt(n); i++){
    if(n % i === 0 ){
        return false;
    }
    
 }

 return true;
}

let myN = 7;
let resultN = isNguyenTo(myN);

if(resultN){
    console.log(myN + "La So Nguyen To");

}else{
    console.log(myN + " Khong phai la so nguyyen to");
}

//Viết một hàm tính tổng các số trong một mảng. Gọi hàm và in ra kết quả.

function tinhTongArr( array){
    let sumTam = 0;

    for(let i =0; i < array.length; i++){
        sumTam += array[i];
    }
    return sumTam;
}

let checkArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myResultArray = tinhTongArr(checkArray);

console.log("Tong cua Array la: "+ myResultArray);

//Viết một hàm sử dụng arrow function để tính bình phương của một số.
let binhphuong = a => a * a;
console.log(binhphuong(4));

let isDuong = a => a > 0 ? `${a} la so duong` : `${a} khong phai la so duong`;
console.log(isDuong(-1));
console.log(isDuong(5));
/**Hàm ẩn danh (Anonymous Function):

Đây là hàm không có tên. Chúng thường được sử dụng khi bạn cần một hàm ngắn gọn cho một mục đích cụ thể và không cần gọi lại nó nhiều lần. */

setTimeout(function() {
    console.log("Hello after 1 second");

},1000)


/**Callback Function:

Là một hàm được truyền vào làm tham số của một hàm khác. Hàm này sẽ được gọi lại (callback) sau khi hàm kia thực hiện xong một công việc nào đó.

Thường dùng trong xử lý bất đồng bộ (ví dụ: sự kiện, gọi API,...) */

function processData (data, callback){
    let processData = data.toUpperCase();
    callback(processData);
}

function logData(data){
    console.log("Process Data", data);
}
processData("Hello", logData);

function createMultiple(multiple){
    return function (number){
        return number * multiple
    }

}

const double = createMultiple(2);
const triple = createMultiple(3);

console.log(double(5));
console.log(triple(5));

//Các hàm thao tác với mảng phổ biến trong JavaScript:

//push(): Thêm một hoặc nhiều phần tử vào cuối mảng.

let fruit = ["Apple", "Banana"];
fruit.push('Orange');
console.log(fruit);

fruit.push("Kiwi", "Grape");
console.log(fruit);

//pop(): Xóa phần tử cuối cùng của mảng và trả về phần tử đó.

 fruit.pop();
 console.log(fruit);

 //unshift(): Thêm một hoặc nhiều phần tử vào đầu mảng.

 console.log(fruit);

 fruit.unshift("App");

 //shift(): Xóa phần tử đầu tiên của mảng và trả về phần tử đó.

 fruit.shift();
 console.log(fruit);

//splice(): Xóa, thêm hoặc thay thế các phần tử của mảng tại một vị trí xác định.

let fruitS = ["apple", "banana", "organge", "grape"];

//// Xóa 1 phần tử từ vị trí index 1
fruitS.splice(1,1);
console.log(fruitS);

//Xóa 2 phần tử từ vị trí index 2, và thêm "kiwi", "mango"
fruitS.splice(2,2, "kiwi", "mango")
console.log(fruitS);
//Thêm "lemon" vào vị trí index 1 (không xóa phần tử nào)

fruitS.splice(1, 0, "lemon")
console.log(fruitS);

//slice(): Tạo một bản sao của một phần mảng, không làm thay đổi mảng gốc.
let fruitSS = ["apple", "banana", "organge", "grape"];
let subFruits = fruitSS.slice(1, 3);
console.log(subFruits);
console.log(fruitSS);

//concat(): Nối hai hoặc nhiều mảng lại với nhau.

let ar1 = [1, 2, 3, 4];
let ar2 = [5, 6, 7, 8];

let combineAr = ar1.concat(ar2);
console.table(combineAr);

//indexOf(): Tìm vị trí (index) của một phần tử trong mảng. Trả về -1 nếu không tìm thấy.
let fruitIndex = ["apple", "banana", "organge", "grape"];

let index = fruitIndex.indexOf("banana");
console.log(index);

let noFound = fruitIndex.indexOf("kiwi")
console.log(noFound);

//includes(): Kiểm tra xem một phần tử có tồn tại trong mảng hay không. Trả về true hoặc false.

let fruitsInclude = ["apple", "banana", "orange"];

console.log(fruitsInclude.includes("banana"));
console.log(fruitsInclude.includes("kiwi"));

//join(): Nối các phần tử của mảng thành một chuỗi, sử dụng một ký tự phân tách.
let fruitsJoin = ["apple", "banana", "orange"];

let joinFruit = fruitsJoin.join(" - ");
console.log(joinFruit);

//reverse(): Đảo ngược thứ tự các phần tử trong mảng. (Thay đổi mảng gốc).

let numReve = [1, 2, 3, 4, 5];
numReve.reverse();
console.log(numReve);

//sort(): Sắp xếp các phần tử trong mảng. (Thay đổi mảng gốc).
let numSort = [2, 4, 1, 5, 3];
numSort.sort();
console.log(numSort);

// Sắp xếp theo thứ tự tăng dần của số
let numbSort2 = [3, 4, 5, 6, 1, 2]
numbSort2.sort((a,b) => a - b);
console.log(numbSort2);


// Sắp xếp theo thứ tự giảm dần của số
numbSort2.sort((a, b ) => b -a )
console.log(numbSort2);

//Ham Map(): Tạo ra một mảng mới bằng cách áp dụng một hàm lên từng phần tử của mảng ban đầu.

let numMap = [1, 2, 3, 4, 5, 6];

let x2 = numMap.map(function (num) {
    return num * 2;
})
console.log(x2);

const tripledNum = numMap.map( num => num * 3);
console.log(tripledNum);

//Hàm filter():tạo ra một mảng mới chứa các phần tử thỏa mãn một điều kiện nhất định.

const numberFil = [1, 2, 3, 4, 5, 6, 7, 8, 10];

let filChan = numberFil.filter(function (num) {
    return num % 2 == 0;
})
console.log(filChan);

//Ham Reduce(): Tính toán một giá trị duy nhất từ các phần tử của mảng. (Ví dụ: tính tổng, tích, tìm giá trị lớn nhất, nhỏ nhất,...)

const numberRe = [1, 2, 3, 4, 5];

const tongSo = numberRe.reduce(function (acc, current){
    return acc + current;
},0)
console.log(tongSo);


///Closure (Bao đóng):
/**
 * Định nghĩa: Closure là khả năng của một hàm truy cập và ghi nhớ các biến trong phạm vi (scope) mà nó được tạo ra, ngay cả khi hàm đó đã được thực thi xong ở phạm vi bên ngoài.

Giải thích: Khi một hàm được định nghĩa bên trong một hàm khác (hàm lồng nhau), hàm bên trong có thể truy cập các biến của hàm bên ngoài. Ngay cả khi hàm bên ngoài đã thực thi xong, hàm bên trong vẫn giữ một "tham chiếu" đến các biến đó.
 */

function outerFunction(outerVar){
    function innerFunction (innerVar){
        console.log("Outer Var : ", outerVar);
        console.log("Inner Var: ", innerVar);
    }
    return innerFunction;
}

const myInnerFuntion = outerFunction("Hello");
myInnerFuntion("Wolrd");
const anotherInnerFunction = outerFunction("Javascript");
anotherInnerFunction("Clousre")


//Scope (Pham vi)
/**
 * Định nghĩa: Scope xác định nơi một biến được khai báo và có thể được truy cập. Có hai loại scope chính:

Global scope: Biến được khai báo bên ngoài bất kỳ hàm nào, có thể truy cập ở bất kỳ đâu trong chương trình.

Local scope (Function scope): Biến được khai báo bên trong một hàm, chỉ có thể truy cập bên trong hàm đó.

 */


let globalVar = "I am Global";//global scope

function myFunC(){
    let localVar = "I am Local";//local scope
    console.log(globalVar);// co the truy cap
    console.log(localVar);// co the truy cap
}
myFunC();
console.log(globalVar);// co the truy cap
// console.log(localVar); // khong the truy cap

/**
 * Promises:

Mục đích: Xử lý các tác vụ bất đồng bộ một cách dễ đọc và dễ quản lý hơn.

Định nghĩa: Promise là một đối tượng đại diện cho kết quả (thành công hoặc thất bại) của một tác vụ bất đồng bộ.

Trạng thái: Promise có 3 trạng thái:

pending (đang chờ): Trạng thái khởi đầu.

fulfilled (thành công): Tác vụ đã hoàn thành thành công.

rejected (thất bại): Tác vụ đã hoàn thành không thành công.
 */

function getData () {
    return new Promise ((res , reject) =>{
        setTimeout(function(){
            const data = {message: "Data fectched successfully"};
            res(data);
        })
    })
}

getData()

.then(function(data){
    console.log("Data afrer fecthing: ", data.message);
})

.catch(function (error){
    console.log("Error");
})