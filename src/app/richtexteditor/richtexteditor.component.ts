import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TechService } from '../service/tech.service';
import { Reviewer } from '../model/Reviewer';

import * as QuillNamespace from 'quill';
let Quill: any = QuillNamespace;
import ImageResize from 'quill-image-resize-module';
import { ImageDrop } from 'quill-image-drop-module';
Quill.register('modules/imageResize', ImageResize);
Quill.register('modules/imageDrop', ImageDrop);





@Component({
  selector: 'app-richtexteditor',
  templateUrl: './richtexteditor.component.html',
  styleUrls: ['./richtexteditor.component.scss']
})
export class RichtexteditorComponent implements OnInit {

  Editor:string;
  Reviewers:Reviewer[] =  [];
  selectedValue:string = "null";
  description:string;
  richText:FormGroup;
  editorStyle = {
    height: '262px',
  };

  config = {
    toolbar : [['bold', 'italic', 'underline', 'strike'] ,
     [ 'link', 'image', 'video', 'formula' ], 
     ['blockquote', 'code-block'] ,
     [{ 'header': 1 }, { 'header': 2 }],
     [{ 'list': 'ordered'}, { 'list': 'bullet' }],
     [{ 'script': 'sub'}, { 'script': 'super' }], 
     [{ 'indent': '-1'}, { 'indent': '+1' }],
     [{ 'direction': 'rtl' }], 
     [{ 'size': ['small', false, 'large', 'huge'] }],
     [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
     [{ 'color': [] }, { 'background': [] }], 
     [{ 'font': [] }],
     [{ 'align': [] }],

    ['clean']    
    ],
    imageResize: {
      
    },
    imageDrop: true,
  }



  

  constructor( private dialogRef: MatDialogRef<RichtexteditorComponent> ,
               private _formBuilder: FormBuilder,
               private ser : TechService,
               @Inject(MAT_DIALOG_DATA) public data:any) {

                this.ser.getReviewers().
                subscribe((data)=>{
                  this.Reviewers = data;
                  console.log(this.Reviewers);
                })

                this.ser.currentMessage.subscribe((data)=>{
                  this.Editor = data;
                })
                
  }

  ngOnInit() {
    // this.richText = new FormGroup({
    //   'editor' : new FormControl(null)
    // })
    this.richText = this._formBuilder.group({
      editor : [this.data.titleDesc , [Validators.required]]
    })
    console.log(this.data.reviewrsNtid);
  }

  onSubmit(){
    this.ser.changeMessage(this.richText.get('editor').value);
    console.log(this.richText.get('editor').value.length);
    this.ser.setntId(this.selectedValue);
    console.log(this.richText.get('editor').value);

    this.dialogRef.close();
  }
  onNoClick(){
    this.ser.changeMessage(this.richText.get('editor').value);
    this.ser.setntId(this.selectedValue);
    console.log(this.richText.get('editor').value);
    console.log(this.selectedValue);
    this.dialogRef.close();
  }

  maxLength(e:any){
    if(e.editor.getLength() > 3000){
      e.editor.deleteText( 3000 , e.editor.getLength());
    }  
  }
}
