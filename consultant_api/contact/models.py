from django.db import models

# Create your models here.


class Contact(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(max_length=400)
    message = models.TextField()
    subject = models.CharField(max_length=400)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class GetUpdates(models.Model):
    email = models.EmailField(max_length=400)

    def __str__(self):
        return self.email