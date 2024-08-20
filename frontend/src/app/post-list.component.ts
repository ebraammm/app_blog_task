import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts: any[] = [];
  comments: any[] = [];
  currentPost = { id: null as number | null, title: '', content: '', author: '' };
  currentComment = { id: null as number | null, post: null as number | null, content: '', author: '' };
  loggedInUser: string | null = localStorage.getItem('username');
  username: string | null = null;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.username = localStorage.getItem('username');
    this.fetchPosts();
    this.fetchComments();
  }

  fetchPosts() {
    this.postService.getPosts().subscribe(
      (data) => (this.posts = data.results),
      (error) => console.error('Error fetching posts:', error)
    );
  }

  fetchComments() {
    this.postService.getComments().subscribe(
      (data) => (this.comments = data.results),
      (error) => console.error('Error fetching comments:', error)
    );
  }

  savePost() {
    if (this.loggedInUser) {
      this.currentPost.author = this.loggedInUser;
    }
  
    const currentTime = new Date().toISOString();  // Get the current time
  
    if (this.currentPost.id !== null) {
      this.postService.updatePost(this.currentPost.id, this.currentPost).subscribe(
        () => {
          this.fetchPosts();
          this.currentPost = { id: null, title: '', content: '', author: '' };
          localStorage.setItem('lastSeenTime', currentTime);  // Update last seen time
          setTimeout(() => {
            this.scrollToLastPost();
          }, 100);
        },
        (error) => console.error('Error updating post:', error)
      );
    } else {
      this.postService.createPost(this.currentPost).subscribe(
        () => {
          this.fetchPosts();
          this.currentPost = { id: null, title: '', content: '', author: '' };
          localStorage.setItem('lastSeenTime', currentTime);  // Update last seen time
          setTimeout(() => {
            this.scrollToLastPost();
          }, 100);
        },
        (error) => console.error('Error creating post:', error)
      );
    }
  }
  
  scrollToLastPost() {
    const lastPost = document.querySelector('.post-item:last-child');
    if (lastPost) {
      lastPost.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  
  

  editPost(post: any) {
    this.currentPost = { ...post };
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top
  }

  deletePost(id: number) {
    this.postService.deletePost(id).subscribe(
      () => this.fetchPosts(),
      (error) => console.error('Error deleting post:', error)
    );
  }

  saveComment(postId: number) {
    if (!postId || !this.currentComment.content) {
      console.error('Post ID and content are required');
      return;
    }
  
    this.currentComment.post = postId;
    if (this.loggedInUser) {
      this.currentComment.author = this.loggedInUser;
    }
  
    if (this.currentComment.id !== null) {
      this.postService.updateComment(this.currentComment.id, this.currentComment).subscribe(
        () => {
          this.fetchComments();
          this.currentComment = { id: null, post: null, content: '', author: '' };
        },
        (error) => console.error('Error updating comment:', error)
      );
    } else {
      this.postService.createComment(this.currentComment).subscribe(
        () => {
          this.fetchComments();
          this.currentComment = { id: null, post: null, content: '', author: '' };
        },
        (error) => console.error('Error creating comment:', error)
      );
    }
  }
  
  editComment(comment: any) {
    this.currentComment = { ...comment };
  }

  deleteComment(id: number) {
    this.postService.deleteComment(id).subscribe(
      () => this.fetchComments(),
      (error) => console.error('Error deleting comment:', error)
    );
  }

  getCommentsForPost(postId: number) {
    return this.comments.filter((comment) => comment.post === postId);
  }



  
}
