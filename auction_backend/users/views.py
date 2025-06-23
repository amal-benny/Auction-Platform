from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken

class RegisterView(APIView):
    def post(self, request):
        data = request.data
        if User.objects.filter(email=data["email"]).exists():
            return Response({"error": "Email already exists"}, status=400)

        user = User.objects.create_user(
            username=data["email"],
            email=data["email"],
            password=data["password"],
            first_name=data.get("name", "")
        )
        return Response({"message": "User registered successfully"}, status=201)

class LoginView(APIView):
    def post(self, request):
        data = request.data
        user = authenticate(username=data["email"], password=data["password"])
        if user is None:
            return Response({"error": "Invalid credentials"}, status=401)

        refresh = RefreshToken.for_user(user)
        return Response({
            "refresh": str(refresh),
            "access": str(refresh.access_token),
            "user": {
                "id": user.id,
                "name": user.first_name,
                "email": user.email
            }
        })
