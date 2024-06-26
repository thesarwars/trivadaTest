"""trivadaTest URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from trivadatestApp import views

urlpatterns = [
    path("admin/", admin.site.urls),
    path('login/', views.UserLogin.as_view(), name="user_login"),
    path('add-product/', views.AddProduct.as_view(), name="add_product"),
    path('get-product/<str:username>/', views.AddProduct.as_view(), name="get_product"),
    path('delete-product/<str:username>/', views.AddProduct.as_view(), name="delete_product"),
]
