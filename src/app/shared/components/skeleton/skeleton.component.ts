import { Component, Input } from '@angular/core';

import { typeSkeleton } from './skeleton.config';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent {

  @Input()
  public typeSkeleton!: typeSkeleton;

}
