from django.db import models

# Create your models here.


class Team(models.Model):
    name = models.CharField(max_length=255)
    role = models.CharField(max_length=255)
    description = models.TextField()
    qualification = models.CharField(max_length=255)
    email = models.EmailField(max_length=400)
    nationality = models.CharField(max_length=255)
    image_url = models.URLField(blank=True, null=True)
    job_exp = models.TextField()
    gender = models.CharField(max_length=255)
    educational_exp = models.TextField()
    first_skill = models.CharField(max_length=255)
    second_skill = models.CharField(max_length=255)
    third_skill = models.CharField(max_length=255)
    date_joined = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.name