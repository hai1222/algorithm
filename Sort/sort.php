<?php

class CArray {

	public $dataStore = [];
	public $pos = 0;
	public $numElements;

	public function __construct($numElements) {
		$this->numElements = $numElements;
	}

	public function setData() {
		for ($i = 0; $i < $this->numElements; ++$i) {
			$this->dataStore[$i] = rand(1, $this->numElements);
		}
	}

	public function clear() {
		for ($i = 0; $i < count($this->dataStore); ++$i) {
			$this->dataStore[$i] = 0;
		}
	}

	public function insert($element) {
		$this->dataStore[$this->pos++] = $element;
	}

	public function toString() {
		$retstr = "";
		for ($i = 0; $i < count($this->dataStore); ++$i) {
			$retstr .= $this->dataStore[$i] . " ";
			if ($i > 0 && $i % 10 == 9) {
				$retstr .= "<br>";
			}
		}
		return $retstr;
	}

	public function swap(&$arr, $index1, $index2) {
		$temp = $arr[$index1];
		$arr[$index1] = $arr[$index2];
		$arr[$index2] = $temp;
	}

	public function bubbleSort() {
		$numElements = count($this->dataStore);
		$temp;
		for ($outer = $numElements; $outer >= 2; --$outer) {
			for ($inner = 0; $inner < $outer - 1; ++ $inner) {
				if ($this->dataStore[$inner] > $this->dataStore[$inner + 1]) {
					$this->swap($this->dataStore, $inner, $inner + 1);
				}
			}
		}
	}

	public function selectionSort() {
		$min;
		for ($outer = 0; $outer <= count($this->dataStore) - 2; ++$outer) {
			$min = $outer;
			for ($inner = $outer + 1; $inner <= count($this->dataStore) - 1; ++$inner) {
				if ($this->dataStore[$inner] < $this->dataStore[$min]) {
					$min = $inner;
				}
			}
			$this->swap($this->dataStore, $outer, $min);
			//echo $this->toString();
		}
	}

	public function insertionSort() {
		$temp;
		$inner;
		$length = count($this->dataStore);
		for ($outer = 1; $outer <= $length - 1; ++$outer) {
			$temp = $this->dataStore[$outer];
			$inner = $outer;
			while ($inner > 0 && ($this->dataStore[$inner - 1] >= $temp)) {
				$this->dataStore[$inner] = $this->dataStore[$inner - 1];
				--$inner;
			}
			$this->dataStore[$inner] = $temp;
		}
	}
}

$numElements = 10000;
$myNums = new CArray($numElements);
/* $myNums->setData();
$start = time();
$myNums->bubbleSort();
$stop = time();
$elapsed = $stop - $start;
echo "对" . $numElements . "个元素执行冒泡排序消耗的时间为：" . $elapsed . '秒<br>'; */
/* $myNums->setData();
$start = time();
$myNums->selectionSort();
$stop = time();
$elapsed = $stop - $start;
echo "对" . $numElements . "个元素执行选择排序消耗的时间为：" . $elapsed . '秒<br>'; */
$myNums->setData();
$start = time();
$myNums->insertionSort();
$stop = time();
$elapsed = $stop - $start;
echo "对" . $numElements . "个元素执行插入排序消耗的时间为：" . $elapsed . '秒<br>';