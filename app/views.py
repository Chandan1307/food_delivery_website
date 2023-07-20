from django.shortcuts import render, redirect
from .models import MenuItem

def home(request):
    return render(request, 'home.html')

def menu(request):
    menu_items = MenuItem.objects.all()
    return render(request, 'menu.html', {'menu_items': menu_items})

def order(request):
    if request.method == 'POST':
        # Handle form submission and order processing
        # ...
        return redirect('order_confirmation')
    return render(request, 'order.html')

def order_confirmation(request):
    return render(request, 'order_confirmation.html')
