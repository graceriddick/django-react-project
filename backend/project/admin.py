from django.contrib import admin
from .models import Inventory, Item 

# Register your models here.


# class InventoryAdmin(admin.ModelAdmin):
#   list = ('user', 'item', 'quantity')

admin.site.register(Inventory)

# admin.site.register(User)

admin.site.register(Item)













