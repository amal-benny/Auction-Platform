from django.urls import path
from .views import AuctionListCreateView, AuctionRetrieveUpdateDestroyView, BidListCreateView

urlpatterns = [
    path('auctions/', AuctionListCreateView.as_view(), name='auction-list-create'),
    path('auctions/<int:pk>/', AuctionRetrieveUpdateDestroyView.as_view(), name='auction-detail'),
    path('bids/', BidListCreateView.as_view(), name='bid-list-create'),
]
