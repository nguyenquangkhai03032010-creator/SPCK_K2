/*
let winner = 2;
let name = "Duke";
let isEligible = false;
let email = "john.smith@example.com";
let createDay = "2021-02-20T07:20:01";
let updateDay = "2021-02-20T07:20:01";
let firstName = "John";
let lastName = "Smith";

console.log(firstName, lastName, email, createDay, updateDay);

let str1 = "Hello";
let str2 = "skibidi";
let result = str1 + str2;
console.log('số ký tư chuỗi là:', result.length);




let str = "Giáo, sư, chuối";
let banana = str.split(",");
console.log(banana);


let str3 = "skibidi";
let str4 = "toilet";
let superstr = str3 + str4;
console.log(superstr);

/*
let num1 = 10 (số nguyên)
let num2 = -10 (số nguyên âm)
let num3 = 10.36 (số thực)
let num4 = -10.36 (số thực âm)
let num5 = 0xfff (số thập lục)
let num6 = 236e-5 (số mũ)
let num7 = 0b00100001 (số nhị phân)
*/


/*
let onno1 = 1 / 0;
console.log(onno1)

let onno2 = -1 / 0;
console.log(onno2)

let onno3 = 0 / 0;
console.log(onno3)

let onno4 = 'HELLO' / 0;
console.log(onno4);


let a = 30;
a += 6;
console.log(a)


let b = 40;
b -= 4;
console.log(b)



let x = 3;
let y = 6;
console.log(x > y)
console.log(x == y)
console.log(x != y)


let k = true;
let v = false;
console.log(k && v)
console.log(v && true)

let z = true;
let t = false;
console.log(z || t)
console.log(t || false)

let ski = true;
let bidi = false;
console.log(!ski)
console.log(!bidi)
*/
/*
let nhietdo = 36;
if (nhietdo <= 36) {
    console.log('ăn cơm nhó :)))')
}
else {
    console.log('vẫn ăn cơm hoy đòi hỏi giề :))))')
}



let tien = 500
if (tien == 500) {
    console.log('hôm nay ấm rồi')
}
else if (tien > 500) {
    console.log('tha hồ ăn')
}
else if (tien >= 50) {
    console.log('hôm nay đói rồi')
}
else {
    console.log('đói há mồm')
}

for(let i = 1; i <= 50; i+= 3) {
    console.log(i)
}


let i = 36
while (i <= 100) {
    console.log(i);
    i+=3;
}





let n = 6
if (n > 0){
    console.log('ok')
}
else{
    console.log('re-enter')
}

let go = ["skibidi", "toilet", "onno"];
console.log(go)


let no = [1, "hello", true, null, undefined];
console.log(no)

let mix = [1,2,3,4,5];
console.log(mix)

let ko = [];
console.log(ko)

let brr = [1,2,36,44,55,67]
console.log(brr[0])
console.log(brr[1])
console.log(brr[2])
console.log(brr[3])
console.log(brr[4])
console.log(brr[5])
console.log(brr[6]) //undefind


brr.push(367);
console.log(brr)

    //**thay thế**//*brr.splice(2, 1, 63)//splice (start, deleteCount, item)
   /* console.log(brr)


    //**thêm**//*brr.splice(2, 0, 63)//splice (start, deleteCount, item)
    /*console.log(brr)

/**thay thế nhiều số**//*brr.splice(2, 3, 63, 98, 100)*///splice (start, deleteCount, item)
    /*console.log(brr)
/*
brr[0] = 36
console.log(brr)
/*
let fruit = ["nak", "bright", "dolia"]
console.log(fruit.indexOf("nak"))
console.log(fruit.indexOf("max"))

//xóa các phần tử ở vị trí bất kỳ 
brr.splice(0, 3)
console.log(brr)

let person = {
    name: "khải dz",
    age: 15,
    adress: "hà nội",
};
console.log(person.name)
console.log(person["name"])
/*
//duyệt tất cả các key trong person
for(let key in person) {
    console.log(key)
}


person.job = "teacher"
//  person["job"] = "hater"
console.log(person.job)


//tìm key trong person
if("age" in person) {
    console.log("yep")
} else {
    console.log("no")
}
//xóa key
delete person.age;
console.log(person)

//DOM
const elementh1 = document.getElementById("title");
alert(elementh1.innerHTML);

const elementh1s = document.getElementsByTagName("h1");
console.log(elementh1s);

const elementskibidih1s = document.getElementsByClassName("title1");
console.log(elementskibidih1s);

const elementhhhh1s = document.querySelector(".title1");
console.log(elementhhhh1s);

const newH1 = document.createElement("h1")//tạo phần tử mới
newH1.innerHTML = "hello ae 4"
document.body.appendChild(newH1); //thêm phần tử vào thẻ bất kỳ
*/



function tinh_tong(n) {
    for( let i = n; n >= 0; i +=1) {
        n = n + i;
        return n;
    }
}
let bai1 = tinh_tong(3)
console.log(bai1)



function la_so_nguyen_to(num) {
    if (num < 2) return false; 

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true; 
}


let x = 5
let y = "5"
let z = x == y
let w = x === y
/*
if (!first) {
          first = card;
        } else {
          second = card;
          lock = true;

          if (first.innerText === second.innerText) {
            reset();
          } else {
            setTimeout(() => {
              first.innerText = '?';
              second.innerText = '?';
              first.classList.remove('open');
              second.classList.remove('open');
              reset();
            }, 1000);
          }
        }


          card.classList.add('open');
        card.innerText = value;

         card.onclick = () => {
        if (lock || card.classList.contains('open')) return;
        
      };


          function reset() {
      first = null;
      second = null;
      lock = false;
    }
          const game = document.getElementById('game');
    let first = null;
    let second = null;
    let lock = false;





























