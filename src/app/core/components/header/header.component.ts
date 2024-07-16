import { Component } from '@angular/core';
import {NzAvatarComponent} from "ng-zorro-antd/avatar";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'tt-header',
  standalone: true,
  imports: [
    NzAvatarComponent,
    NgStyle
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less'
})
export class HeaderComponent {

}
