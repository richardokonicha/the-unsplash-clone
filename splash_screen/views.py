from django.shortcuts import render
from rest_framework import viewsets
from .serializers import SplashSerializer
from .models import Splash

# Create your views here.
class SplashView(viewsets.ModelViewSet):
    serializer_class = SplashSerializer
    queryset = Splash.objects.all()
