from django.db import models
from django.contrib.auth.models import User

class Opus(models.Model):
  title = models.CharField(max_length=100)
  content = models.TextField()
  publication_date = models.DateTimeField("date published", auto_now_add=True)
  author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="works")

  # declare month names to access with publication date that returns the index(number of the month)
  months = ["January", "February", "March", "April", "May", "June", 
          "July", "August", "September", "October", "November", "December"]
  
  def __str__(self):
    return self.title
