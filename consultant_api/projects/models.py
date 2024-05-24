from django.db import models

# Create your models here.


class Projects(models.Model):
    title = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    content = models.TextField()
    client = models.CharField(max_length=255)
    image_url = models.URLField(blank=True, null=True)
    year = models.CharField(max_length=255)
    challenge = models.TextField()
    address = models.CharField(max_length=255)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title