import { Component } from '@angular/core';

@Component({
  selector: 'app-camera-coverage',
  templateUrl: './camera-coverage.component.html',
  styleUrls: ['./camera-coverage.component.scss']
})
export class CameraCoverageComponent {
  targetDistance: [number, number] = [1.0, 10.0];
  targetLight: [number, number] = [100.0, 1000.0];

  hardwareCameras: { distance: [number, number]; light: [number, number] }[] = [
    { distance: [1.0, 5.0], light: [100.0, 500.0] },
    { distance: [5.0, 10.0], light: [100.0, 500.0] },
    { distance: [1.0, 10.0], light: [500.0, 1000.0] },
  ];

  result: string | null = null;

  addCamera() {
    this.hardwareCameras.push({
      distance: [0, 0],
      light: [0, 0]
    });
  }

  removeCamera(index: number) {
    this.hardwareCameras.splice(index, 1);
  }

  checkCoverage() {
    const DIST_STEP = 0.1;
    const LIGHT_STEP = 0.1;

    for (let d = this.targetDistance[0]; d < this.targetDistance[1]; d += DIST_STEP) {
      for (let l = this.targetLight[0]; l < this.targetLight[1]; l += LIGHT_STEP) {
        let covered = false;
        if (this.hardwareCameras.length === 0) {
          this.result = '❌ Please add Hardware Cameras!';
          return;
        }
        for (const cam of this.hardwareCameras) {
          if (
            cam.distance[0] <= d &&
            d + DIST_STEP <= cam.distance[1] &&
            cam.light[0] <= l &&
            l + LIGHT_STEP <= cam.light[1]
          ) {
            covered = true;
            break;
          }
        }

        if (!covered) {
          this.result = '❌ Coverage is NOT sufficient.';
          return;
        }
      }
    }

    this.result = '✅ Coverage is sufficient!';
  }
}
