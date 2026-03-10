import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {
  userAddress={
    name:'',
    street:'',
    city :'',
    state:'',
    pincode:'',
    phone:''
  };
    constructor(private router: Router, private toastr: ToastrService) {}

  saveAddress(): void {
    if (!this.userAddress.name || !this.userAddress.street || !this.userAddress.city) {
      this.toastr.warning('Please fill all required fields!');
      return;
    }

    
    localStorage.setItem('userAddress', JSON.stringify(this.userAddress));
    this.toastr.success('Address saved successfully!');
    this.router.navigate(['/cart/checkout']);
  }

}
