
class Animal:

    def __init__(self, name: str, age: int, species: str):
        self.name = name
        self.age = age
        self.species = species

    def speak(self) -> str:
        return "Some generic animal sound"

    def info(self) -> str:
        return f"{self.name} is a {self.age}-year-old {self.species}."

    def __str__(self) -> str:
        return self.info()


class Dog(Animal):

    def __init__(self, name: str, age: int, breed: str):
        super().__init__(name, age, "Dog")
        self.breed = breed

    def speak(self) -> str:
        return "Woof! Woof!"

    def fetch(self, item: str) -> str:
        return f"{self.name} is fetching the {item}."

    def info(self) -> str:
        return f"{self.name} is a {self.age}-year-old {self.breed} dog."


class Cat(Animal):

    def __init__(self, name: str, age: int, color: str):
        super().__init__(name, age, "Cat")
        self.color = color

    def speak(self) -> str:
        return "Meow!"

    def scratch(self) -> str:
        return f"{self.name} is scratching the furniture."

    def info(self) -> str:
        return f"{self.name} is a {self.age}-year-old {self.color} cat."
