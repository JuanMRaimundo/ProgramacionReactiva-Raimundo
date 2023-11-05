import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]> | undefined; // Usamos el operador async con un Observable

  constructor(private usersService: UserServiceService) {}

  ngOnInit() {
    this.users$ = this.usersService.getUsers();
  }
}
