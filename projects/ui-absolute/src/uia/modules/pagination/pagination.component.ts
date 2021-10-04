import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PaginationConfig, PAGINATION_ALIGN, PAGINATION_SIZE, PAGINATION_TYPE } from 'projects/ui-absolute/src/models';


@Component({
  selector: 'uia-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() settings: PaginationConfig;
  @Input() rowsPerPage: string;
  @Input() totalRows: string;
  @Input() maxPages: string;
  @Input() currentPage: any;
  @Input() labelPrev: string;
  @Input() labelNext: string;
  @Input() separator: string;

  @Output() selectedPage: EventEmitter<string> = new EventEmitter();
  @Output() totalRowsPerPage: EventEmitter<string> = new EventEmitter();

  totalPages: number;

  paginationSettings = {
    size: '',
    align: '',
    type: ''
  }


  constructor() { }

  ngOnInit() {
    this.applySettings(this.settings);

    this.calculateTotalPages();
  }

  calculateTotalPages() {
    this.totalPages = Math.ceil(parseInt(this.totalRows) / parseInt(this.rowsPerPage));
    this.currentPage = parseInt(this.currentPage);
    this.totalRowsPerPage.emit(this.rowsPerPage);
  }

  onRowsChanged(event) {
    this.rowsPerPage = event.target.value ? event.target.value : 10;
    this.currentPage = 1;
    this.calculateTotalPages();
  }

  applySettings(settings) {
    if (!settings) { return; }

    if(settings.size === PAGINATION_SIZE.LARGE) {
      if (settings.type === PAGINATION_TYPE.TABLE) {
        this.paginationSettings.size = 'pagination-lg , font-large';
      } else {
        this.paginationSettings.size = 'pagination-lg';
      }
    }else if(settings.size === PAGINATION_SIZE.SMALL) {
      if (settings.type === PAGINATION_TYPE.TABLE) {
        this.paginationSettings.size = 'pagination-sm , font-small';
      } else {
        this.paginationSettings.size = 'pagination-sm';
      }
    }else {
      this.paginationSettings.size = '';
    }

    if (settings.align === PAGINATION_ALIGN.CENTER) {
      if (settings.type === PAGINATION_TYPE.TABLE) {
        this.paginationSettings.align = 'text-center';
      } else {
        this.paginationSettings.align = 'justify-content-center';
      }
    } else if (settings.align === PAGINATION_ALIGN.RIGHT) {
      if (settings.type === PAGINATION_TYPE.TABLE) {
        this.paginationSettings.align = 'text-right';
      } else {
        this.paginationSettings.align = 'justify-content-end';
      }
    } else {
      this.paginationSettings.align = '';
    }

    switch (settings.type) {
      case PAGINATION_TYPE.TABLE:
        this.paginationSettings.type = 'table';
        break;
      default:
        this.paginationSettings.type = '';
    }
  }

  counter(i: number) {
    return new Array(i);
  }

  selectedPagination(index) {
    this.currentPage = index + 1;
    this.selectedPage.emit(this.currentPage);
  }

  previous(currentPage) {
    this.currentPage = currentPage - 1;
    this.selectedPage.emit(this.currentPage);
  }

  next(currentPage) {
    this.currentPage = currentPage + 1;
    this.selectedPage.emit(this.currentPage);
  }

}
