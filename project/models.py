from django.db import models
from django.db.models.lookups import LessThan

# class uploadInventory(models.Model):
#     quantity =
#     price =
#     type =
#     description =
#     name =


# class Counter(models.Model):
#     quantity = model.PositiveIntegerField(default=0)


class User(models.Model):
    name = models.CharField(max_length=100)


class item(models.Model):
    name =models.CharField(max_length=40)
    quantity = models.FloatField()


class inventory(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    item = models.ForeignKey(item, on_delete=models.DO_NOTHING)
   

    