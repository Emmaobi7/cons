from django.urls import path
from . import views

urlpatterns = [
    path('api/team/', views.team_list, name='team_list'),
    path('api/team/<int:pk>/', views.team_detail,  name='team_detail'),
]
