import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-first-level-step',
  templateUrl: './first-level-step.component.html',
  styleUrls: ['./first-level-step.component.scss']
})
export class FirstLevelStepComponent implements OnInit {
  @Input() goal: any;
  @Input () index: number;
  @Output () editChanged: EventEmitter<any> = new EventEmitter();
  editedFls = true;

  constructor( public userService: UserService) {
  }

  editFirstStep() {
    this.editedFls = !this.editedFls;
    this.editChanged.emit(this.editedFls);
  }
  ngOnInit() {
  }

}
