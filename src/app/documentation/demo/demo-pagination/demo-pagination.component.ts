import { Component, OnInit } from '@angular/core';
import { PaginationConfig, PAGINATION_ALIGN, PAGINATION_SIZE, PAGINATION_TYPE } from 'projects/ui-absolute/src/models';
import { DEMO_CODE, PAGE_NAV } from './demo-pagination.constants';

@Component({
  selector: 'app-demo-pagination',
  templateUrl: './demo-pagination.component.html',
  styleUrls: ['./demo-pagination.component.scss']
})
export class DemoPaginationComponent implements OnInit {

  settings: PaginationConfig;
  smallSettings: PaginationConfig;
  centerSettings: PaginationConfig;
  rightSettings: PaginationConfig;
  tableSettings: PaginationConfig

  pageNav;
  demoCode;

  currentPage: number;
  rowsPerPage: number;

  prevIcon: string;
  nextIcon: string;

  constructor() { }

  ngOnInit() {

    this.pageNav = PAGE_NAV;

    this.demoCode = DEMO_CODE;
    this.currentPage = 5;
    this.rowsPerPage = 10;

    this.settings = {
      size: PAGINATION_SIZE.LARGE
    }
    this.smallSettings = {
      size: PAGINATION_SIZE.SMALL
    }
    this.centerSettings = {
      align: PAGINATION_ALIGN.CENTER
    }
    this.rightSettings = {
      align: PAGINATION_ALIGN.RIGHT
    }
    this.tableSettings = {
      type: PAGINATION_TYPE.TABLE,
      size: PAGINATION_SIZE.DEFAULT,
      align: PAGINATION_ALIGN.DEFAULT
    }

    this.prevIcon = "<i class='fas fa-angle-double-left'></i>";

    this.nextIcon = "<i class='fas fa-angle-double-right'></i>";
  }

  onSelectedPage(event){
    this.currentPage = event;
  }

  onTotalRowsPerPage(event){
    this.rowsPerPage = event;
  }

}
