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
  postAuthor: any;
  isLike: boolean;
  likes: number;
  likers: any;
  addedPost: any;
  storedUsername = localStorage.getItem('username');

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
      'favorites': new FormControl([])
    });
  }

  uploadFile(event) {
    this.image = event.target.value;
  }

  onAddLike(post, i) {
    post.likes[0].count += (this.isLike) ? -1 : 1;
    this.isLike = !this.isLike;
    // post.likes[0].count = this.likes;
    if (this.isLike) {
      let liker = {
        username: this.user.username,
        isLike: this.isLike
      };
      this.likers.push(liker);
    } else {
      this.likers.find(user => {
        this.user.username = user;
        this.likers.splice(this.likers.indexOf(post));
        this.isLike = false;
      });
    }
    post.likes.likers = this.likers;
console.log(this.user);
    this.service.updateUserPosts(this.user).subscribe(user => user);
  }

  onAddPostLike(post, i) {
    // this.isLike = post.likes.likers.isLike;
    this.likes += (this.isLike) ? -1 : 1;
    this.isLike = !this.isLike;
    post.likes.count = this.likes;
    if (this.isLike) {
      let liker = {
        username: this.user.username,
        isLike: this.isLike
      };
      this.likers.push(liker);
    } else {
      this.likers.find(user => {
        this.user.username = user;
        this.likers.splice(this.likers.indexOf(post));
        this.isLike = false;
      });
    }
    post.likes.likers = this.likers;
    this.addedPost = post;
    this.addedPost.likes = post.likes;
    // this.service.updatePost(this.addedPost).subscribe(p => p);

    this.service.getUsers().subscribe(users => {
      users.forEach(user => {
        if (post.author === user.username) {
          this.postAuthor = user;
          this.postAuthor.posts.forEach(p => {
            if (post.title === p.title) {
              p.likes.likers = this.likers;
              p.likes.count = this.likes;
            }
          });
          this.service.updateUserPosts(this.postAuthor);
        }
      });
    });
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
    this.userPosts.push(this.addPostForm.value);
    this.user.posts = this.userPosts;
    // this.service.postUserPost(this.addPostForm.value, this.user._id);
    this.service.updateUserPosts(this.user).subscribe(user => user);
    // this.service.postPost(this.addPostForm.value);
    this.addPostForm.reset();
    this.closeModal();
  }

  ngOnInit() {
    this.service.getUsers().subscribe((users) => {
      users.forEach((user) => {
        if (this.storedUsername === user.username) {
          this.user = user;
          this.userPosts = this.user.posts;
          // this.userPosts.forEach(post => {
          //   if (post.likes = []) {
          //     .likes = 0;
          //     // this.likers = [];
          //     console.log(this.likes);
          //   } else {
          //     this.likes = post.likes.count;
          //     console.log(this.likes);
          //   }
          // });
          this.initForm();
        }
      });
    });
    // this.service.getPosts().subscribe((posts) => {
    //   this.allPosts = posts;
    //   this.allPosts.forEach(post => {
    //     if (post.likes = []) {
    //       this.likes = post.likes.count = 0;
    //       this.likers = [];
    //     } else {
    //       this.likes = post.likes.count;
    //       this.likers = post.likes.likers;
    //     }
    //
    //     this.likers.forEach(liker => {
    //       if (liker.username === this.storedUsername) {
    //         this.isLike = true;
    //       } else {
    //         this.isLike = false;
    //       }
    //     });
    //   });
    // });
  }

}
