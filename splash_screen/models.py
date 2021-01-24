from django.db import models

def upload_path(instance, filename):
    return '/'.join(['covers', str(instance.title), filename])

# Create your models here.
class Splash(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField(blank=True, null=True)
    likes = models.IntegerField(blank=True, null=True)
    cover = models.ImageField(blank=True, null=True, upload_to=upload_path)

    