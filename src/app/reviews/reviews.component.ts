import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Review} from '../models/review';
import {ReviewService} from '../services/review.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  public mr: NgbModalRef;
  addReviewForm: FormGroup;
  reviews: Review[];
  revObj: Review;
  username = localStorage.getItem('username');

  constructor(private modalService: NgbModal,
              private reviewService: ReviewService) {
    this.reviews = [];
  }

  ngOnInit() {
    this.initForm();
    this.reviewService.getReviews().subscribe(reviews => {
      this.reviews = reviews;
    });
  }

  public openModal(content: string) {
    this.mr = this.modalService.open(content);
  }
  public closeModal() {
    this.mr.close();
  }

  private initForm() {
    const title = '';
    const text = '';
    const username = this.username;

    this.addReviewForm = new FormGroup({
      'title': new FormControl(title, Validators.required),
      'text': new FormControl(text, Validators.required),
      'username': new FormControl(username)
    });
  }
  addReview(review) {
    this.revObj = {
      title: review.title,
      text: review.text,
      username: this.username
    };
    this.reviews.push(this.revObj);
    this.reviewService.postReviews(this.revObj);
    this.addReviewForm.reset();
    this.closeModal();
  }
}
