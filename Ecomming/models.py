from django.db import models
from django.utils.translation import gettext_lazy as _
from cloudinary.models import CloudinaryField

class Categorie(models.Model):
    """Catégorie"""
    name = models.CharField(_("Nom de la catégorie"), max_length=100)

    def __str__(self):
        return self.name

class ImageProduit(models.Model):
    """Modèle pour stocker les images supplémentaires des produits"""
    image = CloudinaryField('image', folder="mon-projet/photos/produits/")
    titre = models.CharField(_("Titre de l'image"), max_length=100, blank=True)
    ordre = models.IntegerField(_("Ordre d'affichage"), default=0)
    date_ajout = models.DateTimeField(_("Date d'ajout"), auto_now_add=True)

    def __str__(self):
        return f"Image {self.id} - {self.titre}"

class Produit(models.Model):
    id = models.AutoField(_("ID"), primary_key=True)
    name = models.CharField(_("Nom du produit"), max_length=100)
    description = models.TextField(_("Description du produit"))
    prix = models.DecimalField(_("Prix du produit"), max_digits=10, decimal_places=2)
    categorie = models.ForeignKey(Categorie, on_delete=models.CASCADE, related_name="produits")
    quantite = models.IntegerField(_("Quantite"))
    image_couverture = CloudinaryField('image_couverture', folder="mon-projet/photos/couvertures/")
    image_1 = CloudinaryField('image_1', folder="mon-projet/photos/couvertures/",  null=True)
    image_2 = CloudinaryField('image_2', folder="mon-projet/photos/couvertures/",  null=True)
    image_3 = CloudinaryField('image_3', folder="mon-projet/photos/couvertures/",  null=True)
   
    def __str__(self):
        return self.name



class Site(models.Model):
    nom_entreprise = models.CharField(max_length=255)
    description_entreprise = models.TextField()