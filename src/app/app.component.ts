import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { TestScenarioService } from './test-scenario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _electronService: ElectronService) {
  }
  title = 'electron-app';

  public loadAllTestScenario() {
    console.log("button clicked:");
    //Send request to main process;
    this._electronService.ipcRenderer.send('get-test-scenario',["/Volumes/Personal/Projects/test cucumber",".feature"]);
    
    //receive response from main process;
    this._electronService.ipcRenderer.on("set-test-scenario",function (event: any, args: any) {
      console.log("set-test-scenario");
      console.log(args);
    });
  }
}
