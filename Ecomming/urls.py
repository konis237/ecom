# Ecomming/urls.py
from django.urls import path
from django.contrib.auth.views import LoginView

from . import views

urlpatterns = [
    path('', views.index, name='index'),
     path('produit/<int:id>/', views.produit_detail, name='produit_detail'),
    path('catalogue/', views.catalogue, name='catalogue'),
    path('crud/', views.crud, name='crud'),
     path('connexion/', views.connexion, name='connexion'),
      path('accounts/login/', LoginView.as_view(template_name='connexion.html'), name='login'),
   
]