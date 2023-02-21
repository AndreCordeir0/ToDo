import { UserService } from './../../shared/services/user-service.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/shared/models/User';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  password:string = '';
  form:FormGroup;

  constructor(private userService:UserService,private messageService: MessageService){
    this.form = new FormGroup({
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })

  }
  toasterUsuarioInvalido() {
    this.messageService.add({severity:'error', summary:'Erro', detail:'Email ou Senha Inválidos'});
  }


  submitLogin(){
    if(!this.form.valid){
      this.form.markAllAsTouched();
      return;
    }
    let formGroup = this.form;

    let user:User = new User();
    user.username = formGroup.get('username')?.value;
    user.email = formGroup.get('email')?.value;
    user.password = formGroup.get('password')?.value;
    console.log(user);
    this.userService.logarUsuario(user).subscribe(res=>{
      if(res){
        localStorage.setItem('user_token', res.jwtToken);
      }
    },
    error=>{
      if(error.status === 400){
        console.log('errro');
        this.toasterUsuarioInvalido()
      }
    })
  }
}
