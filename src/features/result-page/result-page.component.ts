import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../services/client.services';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {
  id: any;
  result: any;
  history : any;
  secteur !: string
  

  @ViewChild('content') htmlData!: ElementRef;


  constructor(private clientService: ClientService, private route: ActivatedRoute) { }



  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getScores(this.id);
    
    
  }

  public getScores(id : string) {
    this.clientService.getScores(id).subscribe( res => {
      this.result= res;
      this.extractHistory(this.result.history) 
     });
  }

  public openPDF(): void {
    let DATA: any = document.getElementById('content');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('application/pdf:base64');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('Atechor.pdf');
    });
  } 

  public  extractHistory(history: any)  {
   
    this.history = JSON.parse(history[0])
    console.log('====================================');
    console.log(this.history);
    console.log('====================================');
    for (let index = 0; index < this.history.compatibility.secteur.length; index++) {
      const element = this.history.compatibility.secteur[index];
      this.secteur = element.title
      
    }
    
    

  }

  

}
