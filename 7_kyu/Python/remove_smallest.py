from setuptools import setup
from Cython.Build import cythonize

setup(
    name='remove_smallest app',
    ext_modules=cythonize("remove_smallest.py"),
    zip_safe=False,
    )

def remove_smallest(numbers):
    if numbers == []:
        return []

    new = []
    for number in numbers:
        new.append(number)
    
    new.remove(min(new))

    return new


print(remove_smallest([1, 2, 3, 4, 5])) # [2, 3, 4, 5] 
print(remove_smallest([5, 3, 2, 1, 4])) # [5, 3, 2, 4] 
print(remove_smallest([1, 2, 3, 1, 1])) # [2, 3, 1, 1] 
print(remove_smallest([])) # []