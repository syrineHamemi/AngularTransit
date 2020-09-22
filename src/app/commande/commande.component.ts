import { Component, OnInit } from '@angular/core';
import{ commande } from 'src/app/commande/commande';
import {NgbModal, NgbModalRef ,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {CommandeService} from 'src/app/commande/commande.service'
@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  commande:commande[];
  datacommande:any;
  modalRef :  NgbModalRef ;
  closeResult:string;
  detailcommande:any;

  constructor(private commabdeService :CommandeService) { }

  ngOnInit(): void {
    this.reloadData();
     }
   
     reloadData(){
        this.commabdeService.findAll().subscribe(data=>{
         this.commande=data;
       });
   
     }


}
