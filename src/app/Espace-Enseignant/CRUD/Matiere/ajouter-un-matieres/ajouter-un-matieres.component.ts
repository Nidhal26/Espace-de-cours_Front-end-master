import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialogRef,
  MatDialogModule,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ServiceEspaceEnseignantService } from 'src/app/Espace-Enseignant/Service/service-espace-enseignant.service';
export interface ModalData {
  name: string;
  color: string;
}

@Component({
  selector: 'app-ajouter-un-matieres',
  templateUrl: './ajouter-un-matieres.component.html',
  styleUrls: ['./ajouter-un-matieres.component.scss']
})
export class AjouterUnMatieresComponent {
  public Matiere = {
    Email:"",
    NomMatier:"",
    image:""
  }

  constructor(
    private service:ServiceEspaceEnseignantService,
    public dialogRef: MatDialogRef<AjouterUnMatieresComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    let data = this.service.GetDataProfile();
    this.Matiere.Email=data.Email;
    console.log(data.Email)

  }

 


  GetPhoto(img:any){
    this.Matiere.image=img.target.files[0];
    }

  ajouterMatiere() {
    let mat = new FormData();
    mat.append("Email",this.Matiere.Email);
    console.log(this.Matiere.Email)
    mat.append("NomMatier",this.Matiere.NomMatier);
    console.log(this.Matiere.NomMatier);
    mat.append("image",this.Matiere.image);
    console.log(this.Matiere.image)
    this.service.ajouterMatiere(mat).subscribe(()=>{

    })
  }
}

