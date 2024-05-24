from django.db import models

# Create your models here.

class BlogPost(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    content = models.TextField()
    image_url = models.URLField(blank=True, null=True)
    day = models.CharField(max_length=255)
    month = models.CharField(max_length=255)
    year = models.CharField(max_length=255)
    date_published = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title



class Comment(models.Model):
    author = models.CharField(max_length=255)
    content = models.TextField()
    date_posted = models.DateTimeField(auto_now_add=True)
    post = models.ForeignKey(BlogPost, on_delete=models.CASCADE, related_name='comments')

    def __str__(self):
        return self.author