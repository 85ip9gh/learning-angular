import { Component } from '@angular/core';

@Component({
    selector: 'app-server-component',
    templateUrl: './server.component.html'
})
export class ServerComponent{
    serverID: number = 51;
    serverStatus: string = 'disconnected';

    getServerID(){
        return this.serverID;
    }
}
