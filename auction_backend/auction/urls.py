from django.urls import path
from .views import CreateAuctionView

urlpatterns = [
    path('create/', CreateAuctionView.as_view(), name='create-auction'),
]
