from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Product
# Create your views here.

class UserLogin(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        
        if username and password:
            user = User.objects.filter(username=username).first()
            if username is not None and user.check_password(password):
                return Response({'error': False, 'message': 'Login Success', 'username': username}, status.HTTP_202_ACCEPTED)
            else:
                return Response({'error': True, 'message': 'username or password wrong'}, status.HTTP_401_UNAUTHORIZED)
        else:
            return Response({'error': True, 'message': 'username or password not provided'}, status.HTTP_404_NOT_FOUND)
        
        
class AddProduct(APIView):
    def get(self, request, *args, **kwargs):
        try:
            username = kwargs.get('username')
            username = User.objects.filter(username=username).first()
            print(username)
            if username:
                product = Product.objects.filter(user=username).values()
            return Response({'error': False, 'data': product}, status.HTTP_200_OK)
        except Exception as e:
            print(str(e))
            return Response({'error': True, 'message': str(e)}, status.HTTP_400_BAD_REQUEST)
        
        
        
    def post(self, request):
        try:
            product_name = request.data.get('product_name')
            description = request.data.get('description')
            price = request.data.get('price')
            brand = request.data.get('brand')
            tag = request.data.get('tag')
            username = request.data.get('username')
            
            print(product_name, description, price, brand, tag, username)
            
            items = Product.objects.create(product_name=product_name, description=description, price=price, brand=brand, tag=tag)
            
            user = User.objects.filter(username=username).first()
            items.user = user
            items.save()
            return Response({'error': False, 'message': 'Item saved successfully'}, status.HTTP_201_CREATED)
        except Exception as e:
            print(str(e))
            return Response({'error': True, 'message': str(e)}, status.HTTP_400_BAD_REQUEST)
        
        
    def delete(self, request, *args, **kwargs):
        try:
            kwrd = kwargs.get('username').split(',')
            username = kwrd[0]
            pid = int(kwrd[1])
            user = User.objects.filter(username=username).first()
            if user:
                product = Product.objects.filter(id=pid).first()
                if product:
                    product.delete()
            
            return Response({'error': False, 'message': 'Product deleted successfully'}, status.HTTP_200_OK)
        except Exception as e:
            print(str(e))
            return Response({'error': True, 'message': str(e)}, status.HTTP_400_BAD_REQUEST)
        