# Generated by Django 4.2.7 on 2024-05-25 13:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0003_projects_image_url'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Projects',
            new_name='Project',
        ),
    ]