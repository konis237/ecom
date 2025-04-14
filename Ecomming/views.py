import cloudinary
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login

from django.shortcuts import get_object_or_404, render, redirect
from Ecomming.models import Categorie, Produit, Site
from Ecomming.models import Produit
# Create your views here.
# la home page

 

def index(request):
    context = {
        'title': 'Home',
        'NomEntreprise':Site.objects.get(id=1).nom_entreprise,
        'DescriptionEntreprise':Site.objects.get(id=1).description_entreprise,
    }
    return render(request, 'index.html', context=context)

def catalogue(request):
    produits = Produit.objects.all()
    context = {
        'title': 'catalogue',
        'produits': produits,
        'NomEntreprise':Site.objects.get(id=1).nom_entreprise,
        'categories': Categorie.objects.all(),
    }
    return render(request, 'catalogue.html', context=context)




def produit_detail(request, id):
    produit = get_object_or_404(Produit, id=id)
    context = {
        'title': produit.name,
       'produit': produit,
        'NomEntreprise':Site.objects.get(id=1).nom_entreprise,
        'categories': Categorie.objects.all(),
    }
    return render(request, 'produit_detail.html',  context=context)





@login_required
def crud(request):
    if request.method == 'POST':
        if 'create_categorie' in request.POST:
            name = request.POST.get('name_categorie')
            categorie = Categorie(name=name)
            categorie.save()
            return redirect('crud')
        elif 'create_produit' in request.POST:
                name = request.POST.get('name_produit')
                description = request.POST.get('description_produit')
                image = request.FILES.get('Image_produit')
                image1 = request.FILES.get('image_1')
                image2 = request.FILES.get('image_2')
                image3= request.FILES.get('image_3')
                prix = request.POST.get('prix_produit')
                categorie_id = request.POST.get('categorie_produit')
                categorie = Categorie.objects.get(id=categorie_id)
                quantite = request.POST.get('quantite_produit')

                # Vérifiez que l'image est bien envoyée
                if image:
                    print(image)  # L'image devrait être imprimée ici
                    # Enregistrez l'image dans votre modèle de données
                    produit = Produit(
                        name=name,
                        description=description,
                        prix=prix,
                        categorie=categorie,
                            quantite=quantite,
                            image_couverture=image,
                            image_1=image1,
                            image_2=image2,
                            image_3=image3,
                        )
                        
                    
                    # Enregistrez le produit dans la base de données
                    produit.save()
                    return redirect('crud')
                    
                else:
                    print("Aucune image n'a été envoyée")
                    return redirect('crud')
        elif 'update_categorie' in request.POST:
            categorie_id = request.POST.get('id_categorie')
            categorie = Categorie.objects.get(id=categorie_id)
            name = request.POST.get('name_categorie')
            categorie.name = name
            categorie.save()
            return redirect('crud')
        elif 'update_produit' in request.POST:
            produit_id = request.POST.get('id_produit')
            produit = Produit.objects.get(id=produit_id)
            name = request.POST.get('name_produit')
            description = request.POST.get('description_produit')
            # image = request.FILES.get('urlImage_produit')
            prix = request.POST.get('prix_produit')
            categorie_id = request.POST.get('categorie_produit')
            categorie = Categorie.objects.get(id=categorie_id)
     
            quantite = request.POST.get('quantite_produit')
            produit.name = name
            produit.description = description
            produit.prix = prix
            produit.categorie = categorie
       
            produit.quantite = quantite
            produit.save()
            return redirect('crud')
        elif 'delete_categorie' in request.POST:
            categorie_id = request.POST.get('id_categorie')
            categorie = Categorie.objects.get(id=categorie_id)
            categorie.delete()
            return redirect('crud')
        elif 'delete_produit' in request.POST:
            produit_id = request.POST.get('id_produit')
            produit = Produit.objects.get(id=produit_id)
            produit.delete()
            return redirect('crud')
        elif 'update_site' in request.POST:
            nom_entreprise = request.POST.get('nom_entreprise')
            description_entreprise = request.POST.get('description_entreprise')

            # Enregistrez les modifications dans la base de données
            site = Site.objects.get(id=1)  # Supposons que le site a un ID fixe
            site.nom_entreprise = nom_entreprise
            site.description_entreprise = description_entreprise
            site.save()

            return redirect('crud')

    categories = Categorie.objects.all()
    produits = Produit.objects.all()
    context = {
        'title': 'Inventaire',
        'categories': categories,
        'produits': produits,
        'nom_entreprise': Site.objects.get(id=1).nom_entreprise,
        'description_entreprise': Site.objects.get(id=1).description_entreprise,
    }
    return render(request, 'crud.html', context=context)


def connexion(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('crud')
    return render(request, 'connexion.html')