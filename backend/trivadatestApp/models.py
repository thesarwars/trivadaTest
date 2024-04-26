from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Product(models.Model):
    product_name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.FloatField()
    brand = models.CharField(max_length=50)
    tag = models.CharField(max_length=50)
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
    
    
    def __str__(self) -> str:
        return self.product_name