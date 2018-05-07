function seqSearch(arr, data) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] == data) {
            return i;
        }
    }
    return -1;
}

function dispArr(arr) {
    var m = '';
    for (var i = 0; i < arr.length; ++i) {
        m += arr[i] + ' ';
        if (i % 10 == 9) {
            console.log(m);
            m = ' ';
        }
    }
}

function findMin(arr) {
    var min = arr[0];
    for (var i = 1; i< arr.length; ++i) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function findMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function swap(arr, index, index1) {
    temp = arr[index];
    arr[index] = arr[index1];
    arr[index1] = temp;
}

function binSearch(arr, data) {
    var upperBound = arr.length - 1;
    var lowerBound = 0;
    while (lowerBound <= upperBound) {
        var mid = Math.floor((upperBound + lowerBound) / 2);
        if (arr[mid] < data) {
            lowerBound = mid + 1;
        } else if (arr[mid] > data) {
            upperBound = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

function insertionSort(arr) {
    var temp, inner;
    for (var outer = 1; outer <= arr.length - 1; ++outer) {
        temp = arr[outer];
        inner = outer;
        while (inner > 0 && (arr[inner - 1] >= temp)) {
            arr[inner] = arr[inner - 1];
            --inner;
        }
        arr[inner] = temp;
    }
}

function count(arr, data) {
    var count = 0;
    var position = binSearch(arr, data);
    if (position > -1) {
        ++count;
        for (var i = position - 1; i > 0; --i) {
            if (arr[i] == data) {
                ++count;
            } else {
                break;
            }
        }
        for (var i = position + 1; i < arr.length; ++i) {
            if (arr[i] == data) {
                ++count;
            } else {
                break;
            }
        }
    }
    return count;
}

function read(file) {
    var rawFile = new XMLHttpRequest();
    var allText = "";
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status === 0) {
                allText = rawFile.responseText;
                console.log(allText);
            }
        }
    };
    rawFile.send(null);
    return allText;
}

/* var words = read("big.txt").split(" ");
var word = "rhetoric";
var start = new Date().getTime();
var position = seqSearch(words, word);
var stop = new Date().getTime();
var elapsed = stop - start;
if (position >= 0) {
    console.log("单词 " + word + " 被找的位置在： " + position + "。 ");
    console.log("顺序查找消耗了 " + elapsed + " 毫秒。");
} else {
    console.log(word + " 这个单词没有出现在这个文件内容中。");
} */

var words = read("big.txt").split(" ");
insertionSort(words);
var word = "rhetoric";
var start = new Date().getTime();
var position = binSearch(words, word);
var stop = new Date().getTime();
var elapsed = stop - start;
if (position >= 0) {
    console.log("单词 " + word + " 被找的位置在： " + position + "。 ");
    console.log("二分查找消耗了 " + elapsed + " 毫秒。");
} else {
    console.log(word + " 这个单词没有出现在这个文件内容中。");
}