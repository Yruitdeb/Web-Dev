def max_of_two(a, b):
    return max(a, b)


def is_leap_year(year):
    if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
        return "YES"
    else:
        return "NO"


def testing_system(correct, student):
    if correct == 1:
        if student == 1:
            return "YES"
        else:
            return "NO"
    else:
        if student != 1:
            return "YES"
        else:
            return "NO"


def sign(x):
    if x > 0:
        return 1
    elif x < 0:
        return -1
    else:
        return 0


def which_is_bigger(a, b):
    if a > b:
        return 1
    elif b > a:
        return 2
    else:
        return 0


if __name__ == "__main__":
    a = int(input())
    b = int(input())
    print(max_of_two(a, b))

    year = int(input())
    print(is_leap_year(year))

    correct = int(input())
    student = int(input())
    print(testing_system(correct, student))

    x = int(input())
    print(sign(x))

    a = int(input())
    b = int(input())
    print(which_is_bigger(a, b))
