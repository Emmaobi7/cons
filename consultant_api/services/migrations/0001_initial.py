# Generated by Django 4.2.7 on 2024-05-23 12:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Service',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description_1', models.TextField()),
                ('description_2', models.TextField()),
                ('description_3', models.TextField()),
                ('challenge', models.TextField()),
            ],
        ),
    ]
