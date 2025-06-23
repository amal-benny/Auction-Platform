from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from .models import Auction
from .serializers import AuctionSerializer

class CreateAuctionView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        serializer = AuctionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)  # ✅ Set the user field directly
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
