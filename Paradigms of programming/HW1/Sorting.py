# Implement the sorting algorithm in imperative and declarative approach
# imperative approach

def myQuickSort(arr, left, right):
    if left < right:
        pivot = partition(arr, left, right)
        myQuickSort(arr, left, pivot - 1)
        myQuickSort(arr, pivot + 1, right)  

def partition(arr, left, right):
    pivot = arr[right]
    i = left - 1
    for j in range(left, right):
        if arr[j] < pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[right] = arr[right], arr[i + 1]
    return i + 1

# declarative approach
def mySort(arr):
    return sorted(arr)

# imperative approach
arr = [15, 16, 17, 18, 1, 9, 10, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14, 19, 20]
print("The array before sorting:", arr)
myQuickSort(arr, 0, len(arr) - 1)
print("The array after sorting (imperative approach):", arr)

# declarative approach
arr2 = [15, 16, 17, 18, 1, 9, 10, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14, 19, 20]
print("The array before sorting:", arr2)
sorted_arr2 = mySort(arr2)
print("The array after sorting (declarative approach):", sorted_arr2)