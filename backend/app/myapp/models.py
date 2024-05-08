from django.db import models


class UserRole(models.TextChoices):
    ADMIN = "Admin", "Admin"
    USER = "User", "User"


class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=50, choices=UserRole.choices)

    def __str__(self):
        return f"{self.name} ({self.email})"
