import { Component, OnInit } from '@angular/core';
import { MockDataServiceService} from '../mock-data-service.service';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.css'],
  providers: [MockDataServiceService]
})
export class InfiniteScrollComponent implements OnInit {
  list: any[]= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  divHeight: number;
  relativeScroll = 0;
  mainDiv: any;
  scrollDown = false;
  page = 1;
  loading = false;

  constructor(private mockData: MockDataServiceService) { }

  ngOnInit() {
  }

  scrollFunction() {
    this.mainDiv = document.getElementById('mainDiv');
    this.divHeight = this.mainDiv.scrollHeight - this.mainDiv.clientHeight;
    const currentScroll = this.mainDiv.scrollTop;

    if (currentScroll > this.relativeScroll) {
      this.scrollDown = true;
      if (currentScroll === this.divHeight) {
        this.showLoader();
        this.mockData.getMockData(this.page).subscribe(data => {
          console.log(data);
          this.list.push(JSON.stringify(data));
          this.page += 1;
          this.hideLoader();
        });
      }

    } else {

      this.scrollDown = false;
    }
    this.relativeScroll = currentScroll;
  }

  showLoader() {
    console.log('loading');
    this.loading = true;
  }

  hideLoader() {
    console.log('loaded');
    this.loading = false;
  }
}
