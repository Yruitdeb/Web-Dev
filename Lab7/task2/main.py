from models import Animal, Dog, Cat

def main():
    animals = [
        Dog(name="Rex", age=5, breed="Golden Retriever"),
        Cat(name="Whiskers", age=3, color="Gray"),
        Animal(name="Mystery", age=7, species="Unknown")
    ]

    for animal in animals:
        print(animal)  # Calls __str__ which calls info()
        print("Sound:", animal.speak())

        if isinstance(animal, Dog):
            print(animal.fetch("ball"))
        elif isinstance(animal, Cat):
            print(animal.scratch())

        print("-" * 40)


if __name__ == "__main__":
    main()
