import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from "../services/api/api.service";

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent{

  data: any
  diabeticData: any
  sendmail_response: any
  isSubmit: boolean = false
  event: any

  isDiabeticPatient: boolean = false
  isSuccuss : boolean = false

  patientForm = new FormGroup({
    pId : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.email])
  })


  constructor(private apiService: ApiService) {}

  get patientId(){
    return this.patientForm.get('pId');
  }

  get email(){
    return this.patientForm.get('email');
  }



  View(){
    let formData = {
      patient_id: this.patientForm.value.pId?.trim()

    }

    if (formData.patient_id != ""){
      this.apiService.view(formData).subscribe(
        response => {
          this.isSubmit = true
          this.isSuccuss = response
          if (response.status == 200) {
            this.isSuccuss = true
          }
        },
      );
    }
  }

  Download(){
    let formData = {
      patient_id: this.patientForm.value.pId?.trim()
    }

    if (formData.patient_id != ""){
      this.apiService.download(formData).subscribe(
        response => {
          this.isSubmit = true
          this.isSuccuss = response
          if (response.code() == 200) {
            this.isSuccuss = true
          }
        },
        error => {
          alert("Something went wrong");
        }
      );
    }
  }

  Send_Mail(){
    let formData = {
      patient_id: this.patientForm.value.pId?.trim(),
      email: this.patientForm.value.email?.trim()
    }

    if (formData.patient_id != ""){
      this.apiService.send_mail(formData).subscribe(
        response => {
          this.isSubmit = true
          this.sendmail_response = response
          if (response.code() == 200) {
            this.isSuccuss = true
          }
        },
        error => {
          alert("Something went wrong");
        }
      );
    }
  }




  isValidFormData(formData: {patient_id: string | undefined, email: string | undefined}) : boolean {
    if (formData.patient_id != "" && formData.email != ""){
      return true;
    }else if ((formData.email)){
      alert("Email is invalid!. Please try again")
      //return false;
      return true;

    }else{
      return false;
    }
  }

  reset() {
    this.patientForm.reset()
    this.data = ''
    this.diabeticData = ''
    this.isSubmit = false
  }
}
