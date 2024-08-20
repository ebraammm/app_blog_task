from rest_framework import serializers
from .models import Post, Comment  
from django.contrib.auth.models import User
from .models import UserProfile



class PostSerializer(serializers.ModelSerializer):
    author = serializers.CharField(source='author.username', read_only=True)  # Display username instead of ID

    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'author', 'created_at']  # Add other fields as necessary

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'post', 'author', 'content', 'created_at']
        read_only_fields = ['author']  # Ensure 'author' is read-only


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password')

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password']
        )
        return user
    


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['user', 'last_seen_post_time']  # Include only the fields you want to show
