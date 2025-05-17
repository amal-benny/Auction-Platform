from rest_framework import generics
from .models import AuctionItem, Bid
from .serializers import AuctionItemSerializer, BidSerializer

class AuctionListCreateView(generics.ListCreateAPIView):
    queryset = AuctionItem.objects.all()
    serializer_class = AuctionItemSerializer

class AuctionRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = AuctionItem.objects.all()
    serializer_class = AuctionItemSerializer

class BidListCreateView(generics.ListCreateAPIView):
    queryset = Bid.objects.all()
    serializer_class = BidSerializer
