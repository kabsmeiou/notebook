from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

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
  
  @property
  def get_time_and_date(self):
    # return in [Time, Month Day, Year] format
    local_time = timezone.localtime(self.publication_date)  
    time_and_date = f"{local_time.strftime('%I:%M %p')}, {self.publication_date.strftime('%B')} {self.publication_date.day}, {self.publication_date.year}"
    return time_and_date
