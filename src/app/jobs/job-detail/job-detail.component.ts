import {Component, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {JobService} from "../../core/services/job/job.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit{
  closeResult = '';
  public id: string;

  public job : any;

  constructor(private modalService: NgbModal,
              private jobService:JobService,
              private route:ActivatedRoute) {

    this.id = this.route.snapshot.paramMap.get('id');


  }
  form = new FormGroup( {
    email : new FormControl ( '', [Validators.required, Validators.email] ) ,
    nom: new FormControl ( '', [Validators.required] ),
    prenom: new FormControl ( '', [Validators.required] ),
    links: new FormControl ( '', [Validators.required] ),
    mobile: new FormControl ( '', [Validators.required] ),
    phone: new FormControl ( '', [Validators.required] ),
    file: new FormControl ( null, [Validators.required] ),

  });

  selectedFile: any = null;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;

  }

  getErrorMessage() {
    if (this.form.controls["email"].hasError('required')) {
      return 'You must enter a value';
    }
    if (this.form.controls["nom"].hasError('required')) {
      return 'You must enter a value';
    } if (this.form.controls["prenom"].hasError('required')) {
      return 'You must enter a value';
    } if (this.form.controls["links"].hasError('required')) {
      return 'You must enter a value';
    } if (this.form.controls["mobile"].hasError('required')) {
      return 'You must enter a value';
    } if (this.form.controls["phone"].hasError('required')) {
      return 'You must enter a value';
    }

    return this.form.controls["email"].hasError('email') ? 'Not a valid email' : '';
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
    this.jobService.getById(this.id).subscribe((e :any) => this.job = e.data.attributes);
  }
}
