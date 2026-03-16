def squares_up_to_n(n):
    i = 1
    res = []
    while i * i <= n:
        res.append(i * i)
        i += 1
    return res


def smallest_divisor(n):
    i = 2
    while i <= n:
        if n % i == 0:
            return i
        i += 1


def powers_of_two(n):
    res = []
    value = 1
    while value <= n:
        res.append(value)
        value *= 2
    return res


def is_power_of_two(n):
    value = 1
    while value < n:
        value *= 2
    if value == n:
        return "YES"
    return "NO"


def binary_logarithm(n):
    k = 0
    value = 1
    while value < n:
        value *= 2
        k += 1
    return k


if __name__ == "__main__":
    n = int(input())
    print(*squares_up_to_n(n), sep="\n")

    n = int(input())
    print(smallest_divisor(n))

    n = int(input())
    print(*powers_of_two(n))

    n = int(input())
    print(is_power_of_two(n))

    n = int(input())
    print(binary_logarithm(n))
