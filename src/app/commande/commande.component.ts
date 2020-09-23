import { Component, OnInit,TemplateRef  } from '@angular/core';
import{ commande } from 'src/app/commande/commande';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {CommandeService} from 'src/app/commande/commande.service'
@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  commande:commande[];
  datacommande:any;
  closeResult:string;
  detailcommande:any;
  modalRef: BsModalRef;

  constructor(private commabdeService :CommandeService,private modalService: BsModalService) { }

  ngOnInit(): void {
    this.reloadData();
     }
   
     reloadData(){
        this.commabdeService.findAll().subscribe(data=>{
         this.commande=data;
       });
   
     }

     openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }
    
    openModalDelete(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(
        template,
        Object.assign({}, { class: 'gray modal-lg' })
      );
    }

}
