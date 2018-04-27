function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;
    this.bubbleSort = bubbleSort;
    this.selectionSort = selectionSort;
    this.insertionSort = insertionSort;
    this.shellsort = shellsort;
    this.gaps = [5, 3, 1];
    this.setGaps = setGaps;

    for (var i = 0; i < numElements; ++i) {
        this.dataStore[i] = i;
    }
}

function setData() {
    for (var i = 0; i < this.numElements; ++i) {
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
    }
}

function clear() {
    for (var i = 0; i < this.dataStore.length; ++i) {
        this.dataStore[i] = 0;
    }
}

function insert(element) {
    this.dataStore[this.pos++] = element;
}

function toString() {
    var retstr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retstr += this.dataStore[i] + " ";
        if (i > 0 && i % 10 == 9) {
            retstr += "\n";
        }
    }
    return retstr;
}

function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2]
    arr[index2] = temp;
}

function bubbleSort() {
    var numElements = this.dataStore.length;
    var temp;
    for (var outer = numElements; outer >= 2; --outer) {
        for (var inner = 0; inner <= outer - 1; ++inner) {
            if (this.dataStore[inner] > this.dataStore[inner + 1]) {
                this.swap(this.dataStore, inner, inner + 1);
            }
        }
        //console.log(this.toString());
    }
}

function selectionSort() {
    var min, temp;
    for (var outer = 0; outer <= this.dataStore.length - 2; ++outer) {
        min = outer;
        for (var inner = outer + 1; inner <= this.dataStore.length - 1; ++inner) {
            if (this.dataStore[inner] < this.dataStore[min]) {
                min = inner;
            }
        }
        this.swap(this.dataStore, outer, min);
        //console.log(this.toString());
    }
}

function insertionSort() {
    var temp, inner;
    for (var outer = 1; outer <= this.dataStore.length - 1; ++outer) {
        temp = this.dataStore[outer];
        inner = outer;
        while (inner > 0 && (this.dataStore[inner - 1] >= temp)) {
            this.dataStore[inner] = this.dataStore[inner - 1];
            --inner;
        }
        this.dataStore[inner] = temp;
    }
}

function shellsort() {
    debugger;
    for (var g = 0; g < this.gaps.length; ++g) {
        for (var i = this.gaps[g]; i < this.dataStore.length; ++i) {
            var temp = this.dataStore[i];
            for (var j = i; j >= this.gaps[g] && this.dataStore[j-this.gaps[g]] > temp; j -= this.gaps[g]) {
                this.dataStore[j] = this.dataStore[j - this.gaps[g]];
            }
            this.dataStore[j] = temp;
        }
    }
}

function setGaps(arr) {
    this.gaps = arr;
}

var numElements = 10;
var myNums = new CArray(numElements);
/* myNums.setData();
var start = new Date().getTime();
myNums.bubbleSort();
var stop = new Date().getTime();
var elapsed = stop - start;
console.log("对" + numElements + "个元素执行冒泡排序消耗的时间为：" + elapsed + "毫秒");
myNums.setData();
start = new Date().getTime();
myNums.selectionSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log("对" + numElements + "个元素执行选择排序消耗的时间为：" + elapsed + "毫秒");
myNums.setData();
start = new Date().getTime();
myNums.insertionSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log("对" + numElements + "个元素执行插入排序消耗的时间为：" + elapsed + "毫秒"); */
myNums.setData();
start = new Date().getTime();
myNums.shellsort();
stop = new Date().getTime();
elapsed = stop - start;
console.log("对" + numElements + "个元素执行插入排序消耗的时间为：" + elapsed + "毫秒");