from django.db import models
from django.contrib.auth.models import User 

# class User(models.Model):
#     name = models.CharField(max_length=100)


class Item(models.Model):
    name =models.CharField(max_length=40)
    quantity = models.FloatField()



class Inventory(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.DO_NOTHING)
    quantity = models.FloatField()


# class Footer(models.Model):
#     name =models.CharField(max_length=40)


