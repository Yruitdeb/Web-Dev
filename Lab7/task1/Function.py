def min_of_four(a, b, c, d):
    m = a
    if b < m:
        m = b
    if c < m:
        m = c
    if d < m:
        m = d
    return m


def power(a, n):
    result = 1
    for _ in range(n):
        result *= a
    return result


def xor(x, y):
    return (x and not y) or (y and not x)


if __name__ == "__main__":
    a, b, c, d = map(int, input().split())
    print(min_of_four(a, b, c, d))

    a, n = input().split()
    a = float(a)
    n = int(n)
    print(power(a, n))

    x, y = map(int, input().split())
    print(int(xor(bool(x), bool(y))))
