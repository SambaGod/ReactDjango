from django.urls import re_path, include
from api import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'groups', views.GroupViewset)

urlpatterns = [
    re_path(r'^', include(router.urls)),
]