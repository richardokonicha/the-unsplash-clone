# Generated by Django 3.1.3 on 2021-01-24 21:39

from django.db import migrations
import s3direct.fields


class Migration(migrations.Migration):

    dependencies = [
        ('splash_screen', '0003_auto_20210123_1519'),
    ]

    operations = [
        migrations.AlterField(
            model_name='splash',
            name='cover',
            field=s3direct.fields.S3DirectField(blank=True, null=True),
        ),
    ]