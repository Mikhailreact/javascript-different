/*bubble sort js method*/

//const arrBab = Array(100).fill(null).map(() => Math.floor(Math.random() * 2000) - 1000);// делаю массив

/*const arrBab = [-594, 675, 778, 55, 508, 669, -331, -104, -421, 51, -329, -377, 236, 51, 894, 584, 632, -960, -304,
    -287, -317, -411, 791, 926, 62, -573, -498, -937, 229, -237, 368, 232, 222, 82, -728, -285, 343, -688, 474, -4, 473,
    -528, -588, -993, -847, -851, -45, -310, -469, 182, -621, 317, 15, 43, 486, 834, -830, -619, -348, 557, -459, -359,
    -809, 477, 637, -249, -6, 31, 659, 511, 728, -84, 181, -179, -292, -982, 354, -851, 837, 697, -45, -289, -653, 154,
    -442, -90, -662, 494, 54, 777, -332, -768, 699, -19, -736, -611, 676, 859, 285, -314];

arrayBabbleSort(arrBab);

function arrayBabbleSort() {
    for (let n = 0; n < arrBab.length; n++) {
        for (let i = 0; i < arrBab.length - 1 - n; i++) {
            if (arrBab[i] > arrBab[i + 1]) {
                buff = arrBab[i]
                arrBab[i] = arrBab[i + 1]
                arrBab[i + 1] = buff
            }
        }
    }
    console.log(arrBab);
}*/

// Метод map позволяет применить заданную функцию для каждого элемента массива.
// При этом метод не изменяет исходный массив, а возвращает измененный.
// Метод в параметре получает функцию, которая выполнится для каждого элемента массива.
// То, что вернет эта функция через return для элемента массива,
// станет новым значением этого элемента (см. примеры).
// В функцию можно передавать 3 параметра.
// Если эти параметры есть (они не обязательны), то в первый автоматически попадет элемент массива,
// во второй попадет его номер в массиве (индекс), а в третий - сам массив.

// Метод map()

/*let новый массив = массив.map(function(элемент, индекс, массив) {
    код
    return измененный элемент;
})*/

/*let arr = [1, 2, 3, 4, 5];

let result = arr.map((elem, index) => {return elem * index;})
console.log(result)
//[0, 2, 6, 12, 20,];

let result = arr.map((elem) => {return elem * 2})
console.log(result);
//[2, 4, 5, 8, 10];*/

// Копирование Массива

/*let age = 18;
let age2 = age;*/

/*const a = {
    name: 'it-kamasutra.com',
    protocol: "https",
    maxStudentCount: 10,
    isOnline: true,
    students: ['ivan', 'andrey', 'farid'],
    classroom: {
        teacher: {
            name: 'wew',
            age: 18
        }
    }
}

/!*let b = {...a};
b.classroom.teacher.name = 'Dmitry';
console.log(a)*!/
let b = {...a};// поверхностное копирование // shallow copy
b.classroom = {...a.classroom};// deep copy // глубокое копирование
b.classroom.teacher = {...a.classroom.teacher};// deep copy // глубокое копирование
b.students = [...a.students];// deep copy // глубокое копирование

b.classroom.teacher.name = 'Dmitry';*/

/*

function sumStr1(a, b) { // Такой синтаксес
    return String((Number(a) + Number(b)));
}
function sumStr2(a, b) { // Такой синтаксес
    return (+a + +b).toString();
}
const dumStr3 = (a, b) => (+a + +b).toString(); // Стрелочная функция Такой синтаксис

function sumStr4(a,b) {
    const num1 = Number(a);
    const num2 = Number(b);
    return String(num1 + num2)
}

function sumStr5(a,b) {
    return ""+(a- -b)
}

function sumStr6(a,b) {
    return (+a+ +b)+''
}

*/

function findMissing(arr1, arr2) {
    let index;
    for(let i = 0; i < arr1.length; i++){
        index = arr2.indexOf(arr1[i]);
        if (index > -1){
            arr2.splice(index, 1);
            console.log(arr2);
        } else {
            return arr1[i];
        }
    }
}

function typeOfSum(a, b){
    return typeof(a + b);//  Возвращает определение строки // typeofОператор возвращает строку , указывающую тип невычисленного операнда.

}
