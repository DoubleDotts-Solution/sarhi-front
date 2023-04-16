import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocialServiceService } from 'src/app/services/social-service.service';

@Component({
  selector: 'app-social-activity',
  templateUrl: './social-activity.component.html',
})
export class SocialActivityComponent implements OnInit {
  slug: any;
  data: any = {};

  constructor(
    private route: ActivatedRoute,
    private socialService: SocialServiceService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.slug = params.get('social-activity');
    });
    this.getSingleActivity(this.slug);
  }

  getSingleActivity(slug: string) {
    this.socialService.getActivity(slug).subscribe(
      (res) => {
        if (res.data.length > 0) {
          this.data = res.data[0].attributes
        }
      },
      (err) => {
        // this.toastr.error(err.error.message);
      }
    );
  }
}
