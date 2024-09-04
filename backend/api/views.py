from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, OpusSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Opus


class OpusListCreate(generics.ListCreateAPIView):
  serializer_class = OpusSerializer
  permission_classes = [IsAuthenticated]

  def get_queryset(self):
    user = self.request.user
    return Opus.objects.filter(author=user, is_draft=False).order_by('-publication_date')
  
  def perform_create(self, serializer):
    if serializer.is_valid():
      serializer.save(author=self.request.user)
    else:
      print(serializer.errors)

class DraftListCreate(generics.ListCreateAPIView):
  serializer_class = OpusSerializer
  permission_classes = [IsAuthenticated]

  def get_queryset(self):
    user = self.request.user
    return Opus.objects.filter(author=user, is_draft=True).order_by('-publication_date')
  
  def perform_create(self, serializer):
    if serializer.is_valid():
      serializer.save(author=self.request.user)
    else:
      print(serializer.errors)


class OpusDelete(generics.DestroyAPIView):
  queryset = Opus.objects.all()
  serializer_class = OpusSerializer
  permission_classes = [IsAuthenticated]

  def get_queryset(self):
    user = self.request.user
    return Opus.objects.filter(author=user)
  


class OpusUpdate(generics.UpdateAPIView):
  queryset = Opus.objects.all()
  serializer_class = OpusSerializer
  permission_classes = [IsAuthenticated]

  def get_queryset(self):
    user = self.request.user
    return Opus.objects.filter(author=user)
  
  def perform_update(self, serializer):
    if serializer.is_valid():
        serializer.save(author=self.request.user)
    else:
        print(serializer.errors)


class CreateUserView(generics.CreateAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer
  permission_classes = [AllowAny]