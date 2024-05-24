from django.urls import path
from . import views

urlpatterns = [
    path('api/contact_us/', views.contact, name='contact'),
    path('api/get_update/', views. getUpdate, name='getupdate')
]
