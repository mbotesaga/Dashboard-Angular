import { Component, OnInit } from '@angular/core';
import { faTachometerAlt, 
        faMapMarkerAlt, 
        faStore, 
        faBox, 
        faMoneyBillWave, 
        faChartBar, 
        faAddressBook, 
        faHand, 
        } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  standalone: false,
  
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  faDashboard = faTachometerAlt;
  faLocation = faMapMarkerAlt;
  faShop = faStore;
  faBox = faBox;
  faMoneyBill = faMoneyBillWave;
  faChartBar = faChartBar;
  faContactBook = faAddressBook;
  faHand = faHand;
}
