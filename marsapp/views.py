from django.shortcuts import render
from django.http import HttpResponse 
import requests



def home(request):
    return render(request, 'marsapp/home.html')

def colony(request):
    return render(request, 'marsapp/colony.html')

def livingroom(request):
    # switch('on')
    return render(request, 'marsapp/livingroom.html')

def bedroom(request):
    return render(request, 'marsapp/bedroom.html')

def bathroom(request):
    return render(request, 'marsapp/bathroom.html')

def kitchen(request):
    return render(request, 'marsapp/kitchen.html')


def stats(request):
    return render(request, 'marsapp/stats.html')