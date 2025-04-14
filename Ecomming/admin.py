from django.contrib import admin
from Ecomming.models import  Site, Produit, Categorie
# Register your models here.

admin.site.register(Produit)
admin.site.register(Categorie)
admin.site.register(Site)
