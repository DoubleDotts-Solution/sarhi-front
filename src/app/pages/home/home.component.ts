import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeService } from 'src/app/services/home.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService) {}

  topBanners: any = [];
  allGallery: any = [];
  allTestimonials: any = [];
  allSocialActivities: any = [];

  assets_url: string = environment.BASE_API_URL;

  topStoriesOptions: OwlOptions = {
    center: true,
    items: 3,
    nav: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
    dots: false,
    loop: true,
    responsive: {
      320: {
        stagePadding: 20,
        items: 1,
        margin: 10,
      },
      768: {
        stagePadding: 70,
        items: 1,
        margin: 20,
      },
      1170: {
        autoWidth: true,
        items: 2,
        margin: 32,
      },
    },
  };

  testimonialsOptions: OwlOptions = {
    loop: true,
    margin: 30,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  ngOnInit(): void {
    this.getTopBanners();
    this.getAllGallery();
    this.getAllTestimonials();
    this.getAllSocialServices();
  }

  getTopBanners() {
    this.homeService.getBanners().subscribe(
      (res) => {
        if (res.data.length > 0) {
          for (let d of res.data) {
            this.topBanners.push({
              alt: d.attributes.banner_name,
              img: d.attributes.banner.data.attributes.url,
            });
          }

          console.log('check --->', this.allGallery);
        } else {
          this.topBanners.push({
            alt: 'default',
            img: '../../../assets/bg/bg-banner.png',
          });
        }
      },
      (err) => {
        // this.toastr.error(err.error.message);
      }
    );
  }

  getAllGallery() {
    this.homeService.getGallery().subscribe(
      (res) => {
        if (res.data.length > 0) {
          for (let d of res.data) {
            this.allGallery.push({
              alt: d.attributes.image_name,
              img: d.attributes.image.data.attributes.url,
            });
          }
        } else {
          this.allGallery.push({
            alt: 'default',
            img: '../../../assets/bg/bg-banner.png',
          });
        }
      },
      (err) => {
        // this.toastr.error(err.error.message);
      }
    );
  }

  getAllTestimonials() {
    this.homeService.getTestimonials().subscribe(
      (res) => {
        if (res.data.length > 0) {
          for (let d of res.data) {
            this.allTestimonials.push({
              person_name: d.attributes.person_name,
              message: d.attributes.message,
              title: d.attributes.title,
              img: d.attributes.photo.data.attributes.url,
            });
          }
        } else {
          // this.allGallery.push({
          //   alt: 'default',
          //   img: '../../../assets/bg/bg-banner.png',
          // });
        }
      },
      (err) => {
        // this.toastr.error(err.error.message);
      }
    );
  }

  getAllSocialServices() {
    this.homeService.getSocialActivities().subscribe(
      (res) => {
        if (res.data.length > 0) {
          for (let d of res.data) {
            this.allSocialActivities.push({
              title: d.attributes.title,
              slug: d.attributes.slug,
              id: d.id,
            });
          }
        }
      },
      (err) => {
        // this.toastr.error(err.error.message);
      }
    );
  }
}
