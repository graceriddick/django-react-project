from django.shortcuts import render
from .serializers import InventorySerializer 
from rest_framework import viewsets      
from .models import Inventory          

from django.contrib.auth.models import User, Group
from rest_framework import permissions
from project.serializers import UserSerializer, GroupSerializer       

class InventoryView(viewsets.ModelViewSet):  
    serializer_class = InventorySerializer   
    queryset = Inventory.objects.all()  


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]

