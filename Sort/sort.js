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
    this.shellsort1 = shellsort1;
    this.gaps = [5, 3, 1];
    this.setGaps = setGaps;
    this.mergeSort = mergeSort;
    this.mergeArrays = mergeArrays;
    this.qSort = qSort;

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

function shellsort1() {
    var N = this.dataStore.length;
    var h = 1;
    while (h < N/3) {
        h = 3 * h + 1;
    }
    while (h >= 1) {
        for (var i = h; i < N; i++) {
            for (var j = i; j >= h && this.dataStore[j] < this.dataStore[j-h]; j -= h) {
                this.swap(this.dataStore, j, j-h);
            }
        }
        h = (h-1)/3;
    }
}

function setGaps(arr) {
    this.gaps = arr;
}

function mergeSort(arr) {
    debugger;
    if (arr.length < 2) {
        return;
    }
    var step = 1;
    var left, right;
    while (step < arr.length) {
        left = 0;
        right = step;
        while (right + step <= arr.length) {
            this.mergeArrays(arr, left, left+step, right, right+step);
            left = right + step;
            right = left + step;
        }
        if (right < arr.length) {
            this.mergeArrays(arr, left, left+step, right, arr.length);
        }
        step *= 2;
    }
}

function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
    var rightArr = new Array(stopRight - startRight + 1);
    var leftArr = new Array(stopLeft - startLeft + 1);
    k = startRight;
    for (var i = 0; i < (rightArr.length - 1); ++i) {
        rightArr[i] = arr[k];
        ++k;
    }
    k = startLeft;
    for (var i = 0; i < (leftArr.length - 1); ++i) {
        leftArr[i] = arr[k];
        ++k;
    }
    rightArr[rightArr.length-1] = Infinity;
    leftArr[leftArr.length-1] = Infinity;
    var m = 0;
    var n = 0;
    for (var k = startLeft; k < stopRight; ++k) {
        if (leftArr[m] <= rightArr[n]) {
            arr[k] = leftArr[m];
            m++;
        } else {
            arr[k] = rightArr[n];
            n++;
        }
    }
    console.log("left array - " + leftArr);
    console.log("right array - " + rightArr);
}

function qSort(list) {
    if (list.length == 0) {
        return [];
    }
    var lesser = [];
    var greater = [];
    var pivot = list[0];
    for (var i = 1; i < list.length; i++) {
        if (list[i] < pivot) {
            lesser.push(list[i]);
        } else {
            greater.push(list[i]);
        }
    }
    return qSort(lesser).concat(pivot, qSort(greater));
}

var a = [];
for (var i = 0; i < 10; ++i) {
    a[i] = Math.floor((Math.random()*100)+1);
}
console.log(a);
console.log(qSort(a));
