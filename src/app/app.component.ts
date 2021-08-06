import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from './core/service/feedback.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'UI Absolute';

  isModalOpen: boolean;
  feedbackForm: FormGroup;
  feedBackMessage: string;
  errorMessage: string;

  constructor(
    fb: FormBuilder,
    private feedBackService: FeedbackService) {
    this.feedbackForm = fb.group({
      rating: ['', Validators.required],
      email: ['', Validators.required],
      feedback: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.isModalOpen = false;
  }

  openModal() {
    this.isModalOpen = !this.isModalOpen;
    this.feedBackMessage = null;
    this.feedbackForm.reset();
    this.errorMessage = null;
  }

  submitFeedback() {
    if (this.feedbackForm.value && this.feedbackForm.value.rating) {
      this.feedbackForm.value.rating = parseInt(this.feedbackForm.value.rating, 10);
    }
    this.feedBackService.submitFeedback(this.feedbackForm.value)
      .subscribe(resp => {
        if (resp.status) {
          this.feedBackMessage = resp.response;
          this.feedbackForm.reset();
          this.errorMessage = null;
        }
      }, err => {
        this.errorMessage = err.error.message;
      });
  }
}
