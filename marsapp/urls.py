from django.urls import path
from . import views

urlpatterns = [
    path('home/', views.home, name='home'),
    path('colony/', views.colony, name='colony'),
    path('livingroom/', views.livingroom, name='livingroom'),
]
