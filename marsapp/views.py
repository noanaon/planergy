from django.shortcuts import render
from django.http import HttpResponse 

# Create your views here.

def home(request):
    return render(request, 'marsapp/home.html')

def colony(request):
    return render(request, 'marsapp/colony.html')

def livingroom(request):
    return render(request, 'marsapp/livingroom.html')