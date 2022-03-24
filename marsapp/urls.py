from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('colony/', views.colony, name='colony'),
    path('livingroom/', views.livingroom, name='livingroom'),
    path('bedroom/', views.bedroom, name='bedroom'),
    path('bathroom/', views.bathroom, name='bathroom'),
    path('kitchen/', views.kitchen, name='kitchen'),
    path('stats/', views.stats, name='stats'),
]
