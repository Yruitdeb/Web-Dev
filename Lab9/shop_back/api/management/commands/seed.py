from django.core.management.base import BaseCommand
from api.models import Category, Product


class Command(BaseCommand):
    help = "Seed database with categories and products"

    def handle(self, *args, **kwargs):
        Product.objects.all().delete()
        Category.objects.all().delete()

        roses = Category.objects.create(name="Roses")
        tulips = Category.objects.create(name="Tulips")
        sunflowers = Category.objects.create(name="Sunflowers")
        mixed = Category.objects.create(name="Mixed Bouquets")

        def add(name, price, desc, count, cat):
            Product.objects.create(
                name=name,
                price=price,
                description=desc,
                count=count,
                is_active=True,
                category=cat
            )

        # 🌹 Roses (5)
        add("Red Roses", 25, "Classic roses", 10, roses)
        add("White Roses", 22, "Elegant roses", 8, roses)
        add("Pink Roses", 24, "Soft roses", 12, roses)
        add("Luxury Roses Box", 40, "Premium box", 5, roses)
        add("Mini Roses", 15, "Small bouquet", 20, roses)

        # 🌷 Tulips (5)
        add("Pink Tulips", 15, "Fresh tulips", 15, tulips)
        add("Yellow Tulips", 14, "Bright tulips", 10, tulips)
        add("White Tulips", 16, "White tulips", 12, tulips)
        add("Spring Tulips", 18, "Mixed tulips", 9, tulips)
        add("Deluxe Tulips", 20, "Premium tulips", 7, tulips)

        # 🌻 Sunflowers (5)
        add("Sunflower Basket", 18, "Bright flowers", 6, sunflowers)
        add("Sunflower Bouquet", 20, "Big bouquet", 5, sunflowers)
        add("Mini Sunflowers", 12, "Small version", 15, sunflowers)
        add("Summer Sunflowers", 22, "Summer style", 8, sunflowers)
        add("Golden Sunflowers", 25, "Premium sunflowers", 4, sunflowers)

        # 🌸 Mixed (5)
        add("Spring Mix", 30, "Mixed bouquet", 10, mixed)
        add("Luxury Mix", 45, "Premium flowers", 3, mixed)
        add("Romantic Mix", 35, "Romantic bouquet", 7, mixed)
        add("Color Mix", 28, "Colorful flowers", 9, mixed)
        add("Festival Bouquet", 50, "Special bouquet", 2, mixed)

        self.stdout.write(self.style.SUCCESS("Database seeded successfully!"))
