#-*- coding:utf-8 -*-
import random, time

class CArray():
	def __init__(self, numElements):
		self.dataStore = [x for x in range(0, numElements)]
		self.pos = 0
		self.numElements = numElements
		self.gaps = [5, 3, 1]

	def setData(self):
		for i in range(0, self.numElements):
			self.dataStore[i] = random.randint(1, self.numElements)

	def clear(self):
		self.dataStore = [0 for x in range(0, numElements)]

	def toString(self):
		retstr = ""
		for i in range(0, self.numElements):
			retstr += str(self.dataStore[i]) + " "
			if (i > 0 and i % 10 == 9):
				print retstr
				retstr = ""

	def swap(self, arr, index1, index2):
		temp = arr[index1]
		arr[index1] = arr[index2]
		arr[index2] = temp

	def insert(self, ele):
		self.pos += 1
		self.dataStore[self.pos] = ele

	def bubbleSort(self):
		numElements = len(self.dataStore)
		outer = numElements
		while outer >= 2:
			inner = 0
			while inner <= outer - 1 and inner < numElements - 1:
				if (self.dataStore[inner] > self.dataStore[inner + 1]):
					self.swap(self.dataStore, inner, inner + 1)
				inner += 1
			outer -= 1

	def selectionSort(self):
		outer = 0
		while outer <= len(self.dataStore) - 2:
			minv = outer
			inner = outer + 1
			while inner <= len(self.dataStore) - 1:
				if (self.dataStore[inner] < self.dataStore[minv]):
					minv = inner;
				inner += 1
			self.swap(self.dataStore, outer, minv)
			outer += 1

	def insertionSort(self):
		outer = 1
		while outer <= len(self.dataStore) - 1:
			temp = self.dataStore[outer]
			inner = outer
			while inner > 0 and self.dataStore[inner - 1] >= temp:
				self.dataStore[inner] = self.dataStore[inner - 1]
				inner -= 1
			self.dataStore[inner] = temp
			outer += 1

	def shellsort(self):
		for g in range(0, len(self.gaps)):
			for i in range(self.gaps[g], len(self.dataStore)):
				temp = self.dataStore[i]
				j = i
				while j >= self.gaps[g] and self.dataStore[j - self.gaps[g]] > temp:
					self.dataStore[j] = self.dataStore[j - self.gaps[g]]
					j -= self.gaps[g]
				self.dataStore[j] = temp

	def setGaps(self, arr):
		self.gaps = arr

numElements = 1000
myNums = CArray(numElements)
myNums.setData()
start = time.time() * 1000
myNums.bubbleSort()
stop = time.time() * 1000
elapsed = stop - start
print "对" + str(numElements) + "个元素执行冒泡排序消耗的时间为：" + str(elapsed) + "毫秒"
