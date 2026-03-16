def even_index_elements(arr):
    res = []
    for i in range(0, len(arr), 2):
        res.append(arr[i])
    return res


def even_elements(arr):
    res = []
    for x in arr:
        if x % 2 == 0:
            res.append(x)
    return res


def count_positive(arr):
    count = 0
    for x in arr:
        if x > 0:
            count += 1
    return count


def count_greater_than_previous(arr):
    count = 0
    for i in range(1, len(arr)):
        if arr[i] > arr[i - 1]:
            count += 1
    return count


def same_sign_neighbors(arr):
    for i in range(1, len(arr)):
        if arr[i] * arr[i - 1] > 0:
            return "YES"
    return "NO"


def count_greater_than_neighbors(arr):
    count = 0
    for i in range(1, len(arr) - 1):
        if arr[i] > arr[i - 1] and arr[i] > arr[i + 1]:
            count += 1
    return count


def reverse_array(arr):
    n = len(arr)
    for i in range(n // 2):
        arr[i], arr[n - 1 - i] = arr[n - 1 - i], arr[i]
    return arr


if __name__ == "__main__":
    n = int(input())
    arr = list(map(int, input().split()))
    print(*even_index_elements(arr))

    n = int(input())
    arr = list(map(int, input().split()))
    print(*even_elements(arr))

    n = int(input())
    arr = list(map(int, input().split()))
    print(count_positive(arr))

    n = int(input())
    arr = list(map(int, input().split()))
    print(count_greater_than_previous(arr))

    n = int(input())
    arr = list(map(int, input().split()))
    print(same_sign_neighbors(arr))

    n = int(input())
    arr = list(map(int, input().split()))
    print(count_greater_than_neighbors(arr))

    n = int(input())
    arr = list(map(int, input().split()))
    print(*reverse_array(arr))
