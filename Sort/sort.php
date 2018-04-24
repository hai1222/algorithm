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
			echo $this->toString();
		}
	}

	public function insertionSort() {
		$temp;
		$inner;
		for ($outer = 1; $outer <= count($this->dataStore) - 1; ++$outer) {
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

$numElements = 10;
$myNums = new CArray($numElements);
$myNums->setData();
echo $myNums->toString();
$myNums->insertionSort();
echo $myNums->toString();