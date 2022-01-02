from .models import Group, Event
from rest_framework import viewsets
from .serializers import GroupSerializer, GroupFullSerializer, EventSerializer
from rest_framework.response import Response

class GroupViewset(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    
    # GroupFullSerializer fired only if specific group is retrieved
    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = GroupFullSerializer(instance, many=False, context={ 'request': request })
        return Response(serializer.data)

class EventViewset(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer