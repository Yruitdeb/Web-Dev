import math;


def calculate_hypotenuses(a, b):
	sum_of_squares = a**2 + b**2
	hypotenuse = math.sqrt(sum_of_squares)
	return hypotenuse


def next_previous_number(n):
    next_num = n + 1
    prev_num = n - 1
    print("The next number for the number", n, "is", next_num, sep=" ", end=".\n")
    print("The previous number for the number", n, "is", prev_num, sep=" ", end=".\n")


def apples_division_1(n, k):
    return k // n


def apples_division_2(n, k):
    return k % n


def mkad(v, t):
    return (v * t) % 109


if __name__ == "__main__":
	a = float(input())
	b = float(input())
	calculate_hypotenuses(a, b)

    n = int(input())
    next_previous_number(n)

    n = int(input())
    k = int(input())
    print(apples_division_1(n, k))

    n = int(input())
    k = int(input())
    print(apples_division_2(n, k))

    v = int(input())
    t = int(input())
    print(mkad(v, t))


