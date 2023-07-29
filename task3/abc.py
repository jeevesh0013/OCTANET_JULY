# n=7
# c=0
# while(n):
#    if(n>5):
#      c=c+n-1
#      n=n-1
#    else:
#      break
# print(n)
# print(c)
# str1="hello"
# c=0
# for x in str1:
#    if(x!="l"):
#      c=c+1
#    else:
#       pass

# print(c)
# for i in range(0,2,-1):
#     print("Hello",i)
# rows = 4
# num = 1

# for i in range(1, rows+1):
#     for j in range(rows, i, -1):
#         print(" ", end=" ")
    
#     for k in range(1, i+1):
#         print(num, end=" ")
#         num += 1
    
#     print()
# def add(x, y):
#     """
#     Function to add two numbers.

#     Parameters:
#     x (int): The first number.
#     y (int): The second number.

#     Returns:
#     int: The sum of x and y.
#     """
#     return x + y
# print(help(add))  # Prints the docstring of the add function

# print(add.__doc__)  # Prints the docstring of the add function
# my_list = [1, 2, 3]
# print(dir(my_list))  # prints the attributes and methods of the my_list object
# a = 3
# b = 1
# print(a, b)
# a, b = b, a
# print(a, b)
# def solve(a, b):
#     return b if a == 0 else solve(b % a, a)
# print(solve(20, 50))
# def func():
#  global value
# value = "Local"
# value = "Global"
# func()
# print(value)
# def check(a):
#   print("Even" if a % 2 == 0 else "Odd")
# check(1)
# example = ["Sunday", "Monday", "Tuesday", "Wednesday"];
# del example[2]
# print(example)
# numbers = (4, 7, 19, 2, 89, 45, 72, 22)
# sorted_numbers = sorted(numbers)
# odd_numbers = [x for x in sorted_numbers if x % 2 != 0]
# print(odd_numbers)
# word = "Python Programming"
# n = len(word)
# word1 = word.upper()
# word2 = word.lower()
# converted_word = ""
# for i in range(n):
#  if i % 2 == 0:
#   converted_word += word2[i]
# else:
#  converted_word += word1[i]
# print(converted_word)
fruits = ['apple', 'banana', 'orange']

# Using a for loop to iterate over the list
for fruit in fruits:
    print(fruit)

# Using a while loop with index to iterate over the list
# index = 0
# while index < len(fruits):
#     print(fruits[index])
#     index += 1
class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

    def display(self):
        print("Name:", self.name)
        print("Marks:", self.marks)


students = []

# Adding students
students.append(Student("John", [80, 75, 90]))
students.append(Student("Alice", [85, 90, 95]))
students.append(Student("Bob", [70, 80, 75]))

# Displaying student details
for student in students:
    student.display()
    print()

