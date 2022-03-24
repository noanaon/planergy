from django.shortcuts import render
from django.http import HttpResponse 
import requests

def switch(switch):
    url = "http://192.168.234.129:8081/zeroconf/switch"

    payload = "{ \r\n    \"deviceid\": \"\", \r\n    \"data\": {\r\n        \"switch\": \""+switch+"\" \r\n    } \r\n }\r\n\r\n"
    headers = {
        'Content-Type': 'application/json'
    }

    response = requests.request("POST", url, headers=headers, data=payload)

def home(request):
    return render(request, 'marsapp/home.html')

def colony(request):
    return render(request, 'marsapp/colony.html')

def livingroom(request, name):
    if name == 'l':
        # switch('on')
        return render(request, 'marsapp/livingroom_on.html')
    else:
        # switch('off')
        return render(request, 'marsapp/livingroom.html')

def bedroom(request):
    return render(request, 'marsapp/bedroom.html')

def bathroom(request):
    return render(request, 'marsapp/bathroom.html')

def kitchen(request):
    return render(request, 'marsapp/kitchen.html')


def stats(request):
    return render(request, 'marsapp/stats.html')

