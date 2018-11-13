import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public mr: NgbModalRef;
  public mr2: NgbModalRef;
  public edit: NgbModalRef;

  addPostForm: FormGroup;
  editPostForm: FormGroup;

  image: string;
  user: any;
  allPosts: any;
  userPosts: any;
  postAuthor: any;
  isLike: boolean;
  likes: any;
  likers: any;
  count: number;
  noPosts: boolean;
  storedUsername = localStorage.getItem('username');

  constructor(private modalService: NgbModal, public service: UserService, public postService: PostService) {
    this.allPosts = [];
    this.likes = [];
  }

  public openModal(content: any) {
    this.mr = this.modalService.open(content);
  }

  public editPost(content: any) {
    if (content) {
      this.editPostForm = new FormGroup({
        'title': new FormControl(content._parentView.context.$implicit.title),
        'postText': new FormControl(content._parentView.context.$implicit.postText),
        'upload': new FormControl(content._parentView.context.$implicit.upload),
        'category': new FormControl(content._parentView.context.$implicit.category),
      });
    }
    this.edit = this.modalService.open(content);
  }

  public openFullPost(content: any) {
    if (content._parentView.context.$implicit.likes[0].likers.length < 1) {
      this.isLike = false;
      this.mr2 = this.modalService.open(content);
    } else {
      const userLiker = content._parentView.context.$implicit.likes[0].likers.find(liker => liker.username === this.storedUsername);
      if (userLiker) {
        this.isLike = true;
      } else {
        this.isLike = false;
      }
      this.mr2 = this.modalService.open(content);
    }
  }

  public closeModal() {
    this.mr.close();
  }

  private initForm() {
    const title = '';
    const postText = '';
    const category = '';
    const upload = null;
    const count = 0;

    const likes = new FormGroup({
      'count': new FormControl(count),
      'isLike': new FormControl(false),
      'likers': new FormControl([]),
    });

    this.addPostForm = new FormGroup({
      'title': new FormControl(title, Validators.required),
      'postText': new FormControl(postText, Validators.required),
      'upload': new FormControl(upload),
      'edited': new FormControl(false),
      'date': new FormControl(this.formatDate(new Date())),
      'author': new FormControl(this.user.username),
      'category': new FormControl(category, Validators.required),
      'likes': new FormControl([likes.value])
    });
  }

  uploadFile(event) {
    this.image = event.target.value;
  }

  onAddPostLike(post) {
    let like, isLiked, postLike;
    post.likes[0].count += (this.isLike) ? -1 : 1;
    this.isLike = !this.isLike;
    isLiked = this.isLike;
    like = post.likes[0].count;
    if (this.isLike) {
      const liker = {
        username: this.user.username,
        isLike: this.isLike
      };
      postLike = liker;
      post.likes[0].likers.push(liker);
    } else {
      post.likes[0].likers.find(user => {
        if (this.user.username = user) {
          post.likes[0].likers.splice(post.likes[0].likers.indexOf(post));
          this.isLike = false;
        }
      });
    }
    this.service.getUsers().subscribe(users => {
      users.forEach(user => {
        if (post.author === user.username) {
          this.postAuthor = user;
          this.postAuthor.posts.forEach(p => {
            if (post.title === p.title) {
              p.likes[0].likers = post.likes[0].likers;
              p.likes[0].count = post.likes[0].count;
            }
          });
          this.service.updateUserPosts(this.postAuthor).subscribe(postAuthor => postAuthor);
        }
      });
    });
    this.postService.updatePost(post).subscribe(pos => pos);
  }

  formatDate(date) {
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    const yy = date.getFullYear() + 1;
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    date = dd + '-' + mm + '-' + yy;
    return date;
  }

  addPost() {
    this.allPosts.push(this.addPostForm.value);
    this.userPosts.push(this.addPostForm.value);
    this.user.posts = this.userPosts;
    this.service.updateUserPosts(this.user).subscribe(user => user);
    this.postService.postPost(this.addPostForm.value);
    this.addPostForm.reset();
    this.closeModal();
    this.noPosts = false;
  }

  onEditPost(post) {
    post.title = this.editPostForm.value.title;
    post.postText = this.editPostForm.value.postText;
    post.upload = this.editPostForm.value.upload;
    post.category = this.editPostForm.value.category;
    this.service.updateUserPosts(this.user).subscribe(postAuthor => postAuthor);
    this.postService.updatePost(post).subscribe(pos => pos);
    this.edit.close();
  }

  onGetUserPosts() {
    this.service.getUsers().subscribe((users) => {
      users.forEach((user) => {
        if (this.storedUsername === user.username) {
          this.user = user;
          this.userPosts = this.user.posts;
          this.userPosts.forEach(post => {
            if (!post.likes) {
              post.likes[0].count = 0;
            }
            post.likes[0].likers.forEach(liker => {
              if (liker.username === this.storedUsername) {
                liker.isLike = true;
              } else {
                liker.isLike = false;
              }
            });
          });
          if (this.userPosts.length > 0) {
            this.noPosts = false;
          } else {
            this.noPosts = true;
          }
          this.initForm();
        }
      });
    });
  }

  onGetAllPosts() {
    this.postService.getPosts().subscribe((posts) => {
      this.allPosts = posts;
      this.allPosts.forEach(post => {
        if (!post.likes) {
          post.likes[0].count = 0;
        }
      });
    });
  }

  ngOnInit() {
    this.onGetUserPosts();
    this.onGetAllPosts();
  }

}
