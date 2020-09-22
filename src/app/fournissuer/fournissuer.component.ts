import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {FournisseurServiceService} from 'src/app/fournissuer/fournisseur-service.service'
import {NgbModal, NgbModalRef ,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import{fournisseur}from 'src/app/fournissuer/fournissuer'

@Component({
  selector: 'app-fournissuer',
  templateUrl: './fournissuer.component.html',
  styleUrls: ['./fournissuer.component.css']
})
export class FournissuerComponent implements OnInit {


  fournisseur:fournisseur[];
  datafournisseur:any;
  modalRef :  NgbModalRef ;
  detailfournisseur:any;

  closeResult = '';
  constructor(private fournisseurService:FournisseurServiceService,private modalService: NgbModal) { }

  
  
  ngOnInit(): void {
 this.reloadData();
  }

  reloadData(){
     this.fournisseurService.findAll().subscribe(data=>{
      this.fournisseur=data;
    });

  }
 
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
}
