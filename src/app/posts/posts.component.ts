import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public mr: NgbModalRef;
  public mr2: NgbModalRef;
  addPostForm: FormGroup;
  image: string;
  user: any;
  allPosts: any;
  userPosts: any;
  isLike: boolean;
  likes: number;
  likers: any;

  constructor(private modalService: NgbModal, public service: UserService) {
    this.allPosts = [];
  }

  public openModal(content: string) {
    this.mr = this.modalService.open(content);
  }

  public openFullPost(content: string) {
    this.mr2 = this.modalService.open(content);
  }

  public closeModal() {
    this.mr.close();
  }

  // public closeModal() {
  //   this.mr2.close();
  // }
  private initForm() {
    const title = '';
    const postText = '';
    const category = '';
    const upload = null;

    this.addPostForm = new FormGroup({
      'title': new FormControl(title, Validators.required),
      'postText': new FormControl(postText, Validators.required),
      'upload': new FormControl(upload),
      'edited': new FormControl(false),
      'date': new FormControl(this.formatDate(new Date())),
      'author': new FormControl(this.user.username),
      'category': new FormControl(category, Validators.required),
      'likes': new FormControl([]),
      'favorites': new FormControl([]),
      'isLiked': new FormControl(false)
    });
  }

  uploadFile(event) {
    this.image = event.target.value;
  }

  onAddLike(post, i) {
    this.isLike = post.isLiked;
    post.likes += (this.isLike) ? -1 : 1;
    this.isLike = !this.isLike;
    post.isLiked = this.isLike;
    this.user.posts.forEach(like => {
      like.isLiked = this.isLike;
    });

      this.service.updateUserPosts(this.user).subscribe(user => user);
  }
  onAddPostLike(post, i) {
    this.isLike = post.isLiked;
    this.likes += (this.isLike) ? -1 : 1;
    this.isLike = !this.isLike;
    post.likes.count = this.likes;
    post.isLiked = this.isLike;
    if (this.isLike) {
      this.likers.push(this.user.username);
    } else {
      this.likers.find(user => {
        this.user.username = user;
        this.likers.splice(this.likers.indexOf(post));
      });
    }
    post.likes.likers = this.likers;
    // post.likers.push(storedUsername);
    // this.allPosts.forEach(p => {
    //   p.isLiked = this.isLike;
    // });
    console.log(post);
      // this.service.updatePost(post._id, post).subscribe(p => p);
  }
  formatDate(date) {
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yy = date.getFullYear() + 1;
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
    this.user.posts.push(this.addPostForm.value);
    this.service.updateUserPosts(this.user).subscribe(user => user);
    this.service.postPost(this.addPostForm.value);
    this.addPostForm.reset();
    this.closeModal();
  }

  ngOnInit() {
    this.service.getUsers().subscribe((users) => {
      users.forEach((user) => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername === user.username) {
          this.user = user;
          this.userPosts = this.user.posts;
          this.user.posts.forEach(post =>  {
            this.isLike = post.isLiked;
          });
          this.initForm();
        }
      });
    });
    this.service.getPosts().subscribe((posts) => {
     this.allPosts = posts;
     this.allPosts.forEach(post => {
       if (post.likes = []) {
         this.likes = 0;
         this.likers = [];
       } else {
         this.likes = post.likes.count;
         this.likers = post.likes.likers;
       }
     });
    });
  }

}
