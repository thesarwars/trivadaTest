from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
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