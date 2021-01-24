from rest_framework import serializers
from .models import Splash

class SplashSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Splash
        fields = ( 'id', 'title', 'description', 'likes', 'cover')