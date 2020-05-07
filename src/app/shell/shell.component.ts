import { Component } from '@angular/core';

@Component({
    selector: 'bg-shell',
    templateUrl: './shell.component.html',
    styleUrls: ['./shell.component.scss']
})

export class ShellComponent {
    username = '';
    showParagraph = true;
    counts = [];
    toggleParagraph(){
        this.showParagraph = !this.showParagraph;
        this.counts.push(this.counts.length + 1);
    }
    constructor() { }
}
