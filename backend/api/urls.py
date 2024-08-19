from django.urls import path
from . import views

urlpatterns = [
  path("opus/", views.OpusListCreate.as_view(), name="opus-list"),
  path("opus/delete/<int:pk>/", views.OpusDelete.as_view(), name="delete-opus")
]