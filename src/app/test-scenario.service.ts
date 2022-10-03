import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TestScenarioService {
  constructor() { 
  }

  public getAllFeatureFiles(){
    return this.getFiles("/Volumes/Personal/Projects/test cucumber",[],".fature");
  }

  private getFiles(dir:string, files_: string[], type: string){
    // ipc.send('print-to-pdf');

    // debugger;
    
    // files = files_||[];
    // var files = this.fs.readdirSync(dir);
    // for(var i in files){
    //   var name = this.path.join(dir,files[i]);
    //   if(this.fs.statSync(name).isDirectory()){
    //     this.getFiles(name,files_,type);
    //   }else{
    //     if(name.endsWith(type))
    //       files_.push(name);
    //   }
    // }

    // return files_;
  }
}
