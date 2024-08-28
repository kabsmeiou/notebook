from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Opus

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ["id", "username", "password"]
    extra_kwargs = {"password": {"write_only": True}}

  def create(self, validated_data):
    user = User.objects.create_user(**validated_data)
    return user
  
class OpusSerializer(serializers.ModelSerializer):
  class Meta:
    model = Opus
    fields = ["id", "title", "content", "get_time_and_date", "author"]
    extra_kwargs = {"author": {"read_only": True}}

