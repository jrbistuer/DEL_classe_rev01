import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user_model';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.sass']
})
export class ListadoComponent implements OnInit {

  testForm: FormGroup = null;
  users: User[] = [] as User[]; 

  constructor(
    private router: Router,
    private location: Location,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.users = this.userService.getUsers();
  }

  goBack() {
    this.location.back();
  }

  createForm() {
    this.testForm = new FormGroup({
      nom: new FormControl({value: '', disabled: false}, []),
      cognom: new FormControl({value: '', disabled: false}, [])
    })
  }

  addUser() {
    const user: User = {} as User;
    user.nom = this.testForm.get('nom').value;
    user.cognom = this.testForm.get('cognom').value;
    this.userService.addUser(user);
    this.resetForm();
  }

  resetForm() {
    this.testForm.get('nom').setValue('');
    this.testForm.get('cognom').setValue('');
  }

}
