import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, UntypedFormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'testing';
  formControlValue: boolean|null = false;

  form = new FormGroup({
    control: new FormControl(false)
  });

  ngOnInit(): void {
    this.form.get('control')?.valueChanges.subscribe({
      next: (value)=> {
        console.log('value changed: ', value);
        this.formControlValue = value;
      }
    });

    const ctrl = this.form.get('control') as UntypedFormControl;
    setTimeout(()=> {
      ctrl.setValue(true);
    }, 4000);
    setTimeout(()=> {
      ctrl.setValue(false, {emitEvent: false});
    }, 6000);
    setTimeout(()=> {
      this.form.get('control')?.setValue(true);
    }, 8000);
  }
}
