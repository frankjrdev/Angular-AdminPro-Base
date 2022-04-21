import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [],
})
export class IncrementadorComponent implements OnInit {
  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }
  @Input() progress: number = 50;
  @Input() btnClass: string = 'btn-primary';

  @Output() progressOutput: EventEmitter<number> = new EventEmitter();

  changeProgress(valor: number) {
    if (this.progress >= 100 && valor >= 0) {
      this.progressOutput.emit(100);
      return (this.progress = 100);
    }

    if (this.progress <= 0 && valor < 0) {
      this.progressOutput.emit(0);
      return (this.progress = 0);
    }

    return (
      (this.progress = this.progress + valor),
      this.progressOutput.emit(this.progress)
    );
  }

  onChange(newValue: number) {
    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }
    this.progressOutput.emit(newValue);
  }
}
