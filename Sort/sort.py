import random

class CArray():
	def __init__(self, numElements):
		self.dataStore = [x for x in range(0, numElements)]
		self.pos = 0
		self.numElements = numElements
		self.gaps = [5, 3, 1]

	def setData(self):
		for i in range(0, self.numElements):
			self.dataStore[i] = random.randint(1, self.numElements)

numElements = 10
myNums = CArray(numElements)
myNums.setData()
print myNums