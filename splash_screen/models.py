from django.db import models

# Create your models here.
class Splash(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    likes = models.IntegerField()

    