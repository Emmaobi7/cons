from django.urls import path
from . import views

urlpatterns = [
    path('api/posts/', views.blog_list, name='blog_list'),
    path('api/posts/<int:pk>/', views.blog_detail,  name='blog_detail'),
    path('api/posts/<int:pk>/comments/', views.comment, name='comment'),
]
