from django.db import models

# Create your models here.


class Service(models.Model):
    title = models.CharField(max_length=255)
    description_1 = models.TextField()
    description_2 = models.TextField()
    description_3 = models.TextField()
    challenge = models.TextField()
    image_url = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.title