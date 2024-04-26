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
    def get(self, request, pk=None):
        username = request.data.get('user')
    def post(self, request):
        try:
            product_name = request.data.get('product_name')
            description = request.data.get('description')
            price = request.data.get('price')
            brand = request.data.get('brand')
            tag = request.data.get('tag')
            
            items = Product(product_name=product_name, description=description, price=price, brand=brand, tag=tag)
            items.save()
            return Response({'error': False, 'message': 'Item saved successfully'}, status.HTTP_201_CREATED)
        except Exception as e:
            print(str(e))
            return Response({'error': True, 'message': str(e)}, status.HTTP_400_BAD_REQUEST)