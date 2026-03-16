def print_full_name(first, last):
    # Format the full message
    return f"Hello {first} {last}! You just delved into python."

if __name__ == '__main__':
    first_name = input()
    last_name = input()
    print(print_full_name(first_name, last_name))
