import { Component, OnInit } from '@angular/core';
import records from "../../data/data.json";

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})

export class RecordsComponent implements OnInit {
  records: any = [];
  bookType: any = [];
  dataset: any = [];
  order: boolean = false;
  isIDUpdated: boolean = false;
  isBookNameUpdated: boolean = false;

  constructor() {
    this.records = this.dataset = records.data; // making two object or object data
    this.setBookType(); // creating object for select box
  }

  ngOnInit() { }

  /**
   * @function setBookType function is creating a select box so that book object can be creating on the basis on type
   * @return {[Array]}  - It will return the booktype object containing all the book type
  */

  setBookType() {
    this.records.filter(o => {
      if (this.bookType.length === 0) {
        this.bookType.push(o.attributes.display_properties.type)
      } else if (this.bookType.indexOf(o.attributes.display_properties.type) === -1) {
        this.bookType.push(o.attributes.display_properties.type)
      }
    })
  }

  /**
   * @function onFilterByType function is handling the filter functionality where on the basis of selected value, data get changed
   * @param  {[event]}  [description] - on change of filter select box it will share the event
   * @return {[Array]}  - It will return the records object containing all the sorted object by selected value
  */

  onFilterByType(e) {
    let ele = e.target.value;
    this.records = (ele == '') ? this.dataset : this.dataset.filter(o => o.attributes.display_properties.type === ele)
  }


  /**
   * @function sortObject function is handling the sorting functionality for ID and Book name
   * @param  {[argu]}  [description] - on click of ID and BOOK NAME it will handle the sorting in asc and dec order
   * @return {[Array]}  - It will return sorted {records} object 
  */

  sortObject(argu: string) {
    if (argu === 'id') {
      this.records = !this.isIDUpdated ? this.dataset.sort((a, b) => parseInt(b.id) - parseInt(a.id)) : this.records.reverse();
      this.isIDUpdated = !this.isIDUpdated;
    } else if (argu === 'bookName') {
      this.records = !this.isBookNameUpdated ? this.records = this.dataset.sort((a, b) => a.attributes.content.localeCompare(b.attributes.content)) : this.dataset.sort((a, b) => b.attributes.content.localeCompare(a.attributes.content));
      this.isBookNameUpdated = !this.isBookNameUpdated;
    }

  }

}
