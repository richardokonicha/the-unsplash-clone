from django.shortcuts import render
from rest_framework import viewsets
from .serializers import SplashSerializer
from .models import Splash

from django.shortcuts import render
from rest_framework import viewsets
from django.views import View
from django.http import HttpResponse, HttpResponseNotFound
import os

# Create your views here.
class SplashView(viewsets.ModelViewSet):
    queryset = Splash.objects.all()
    serializer_class = SplashSerializer

    def post(self, request, *args, **kwargs):
        title = request.data['title']
        description = request.data['description']
        # likes = request.data['likes']
        cover = request.data['cover']
        Splash.objects.create(title, description, cover)
        return HttpResponse({'message': 'Splash created'}, status=200)


class Assets(View):
    def get(self, _request, filename):
        path = os.path.join(os.path.dirname(__file__), 'static', filename)

        if os.path.isfile(path):
            with open(path, 'rb') as file:
                return HttpResponse(file.read(), content_type='application/javascript')
        else:
            return HttpResponseNotFound()
