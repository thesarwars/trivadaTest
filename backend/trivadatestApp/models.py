from django.db import models

# Create your models here.

class Product(models.Model):
    product_name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.FloatField()
    brand = models.CharField(max_length=50)
    tag = models.CharField(max_length=50)
    
    
    def __str__(self) -> str:
        return self.product_name