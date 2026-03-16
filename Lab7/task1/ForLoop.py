def even_numbers(a, b):
    res = []
    for i in range(a, b + 1):
        if i % 2 == 0:
            res.append(i)
    return res


def remainder_numbers(a, b, c, d):
    res = []
    for i in range(a, b + 1):
        if i % d == c:
            res.append(i)
    return res


def squares_in_range(a, b):
    res = []
    i = 1
    while i * i <= b:
        sq = i * i
        if sq >= a:
            res.append(sq)
        i += 1
    return res


def smallest_divisor(x):
    for i in range(2, x + 1):
        if x % i == 0:
            return i


def divisors(x):
    res = []
    for i in range(1, x + 1):
        if x % i == 0:
            res.append(i)
    return res


def count_divisors(x):
    count = 0
    i = 1
    while i * i <= x:
        if x % i == 0:
            if i * i == x:
                count += 1
            else:
                count += 2
        i += 1
    return count


def sum_hundred(nums):
    return sum(nums)


def sum_n_numbers(nums):
    return sum(nums)


def count_zeros(nums):
    count = 0
    for i in nums:
        if i == 0:
            count += 1
    return count


if __name__ == "__main__":
    a = int(input())
    b = int(input())
    print(*even_numbers(a, b))

    a = int(input())
    b = int(input())
    c = int(input())
    d = int(input())
    print(*remainder_numbers(a, b, c, d))

    a = int(input())
    b = int(input())
    print(*squares_in_range(a, b))

    x = int(input())
    print(smallest_divisor(x))

    x = int(input())
    print(*divisors(x))

    x = int(input())
    print(count_divisors(x))

    nums = [int(input()) for _ in range(100)]
    print(sum_hundred(nums))

    n = int(input())
    nums = [int(input()) for _ in range(n)]
    print(sum_n_numbers(nums))

    n = int(input())
    nums = [int(input()) for _ in range(n)]
    print(count_zeros(nums))
