from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token
from user.views import redirect_root  # Import the redirect view
from user.views import RegisterView

urlpatterns = [
    path('', redirect_root),  # Redirect the root URL to the API
    path('api/register/', RegisterView.as_view(), name='register'),
    path('admin/', admin.site.urls),
    path('api/', include('user.urls')),
    path('api-token-auth/', obtain_auth_token, name='api_token_auth'),
]
