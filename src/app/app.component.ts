import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';

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
    console.log("ping");
    //Send request to main process;
    this._electronService.ipcRenderer.send('ping',[]);
    //console.log(reply);
    //receive response from main process;
    this._electronService.ipcRenderer.once("pong",function (event: any, args: any) {
      console.log(args);
    });
  }
}
