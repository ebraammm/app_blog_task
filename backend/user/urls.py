from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PostViewSet,CommentViewSet
from .views import RegisterView
from . import views
from .views import UserProfileViewSet


router = DefaultRouter()
router.register(r'posts', PostViewSet)
router.register(r'comments', CommentViewSet)
router.register(r'user-profile', UserProfileViewSet, basename='user-profile')


urlpatterns = [
    path('', include(router.urls)),
    path('register/', RegisterView.as_view(), name='register'),
    path('profile/<str:username>/', views.profile_view, name='profile_view'), 
]
