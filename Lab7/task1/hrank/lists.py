if __name__ == '__main__':
    N = int(input())
    lst = []

    for _ in range(N):
        cmd = input().split()
        operation = cmd[0]

        if operation == "insert":
            index = int(cmd[1])
            element = int(cmd[2])
            lst.insert(index, element)
        elif operation == "print":
            print(lst)
        elif operation == "remove":
            element = int(cmd[1])
            lst.remove(element)
        elif operation == "append":
            element = int(cmd[1])
            lst.append(element)
        elif operation == "sort":
            lst.sort()
        elif operation == "pop":
            lst.pop()
        elif operation == "reverse":
            lst.reverse()
