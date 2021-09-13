export default class Api {

    private static imageEndpoint: string = 'api/image/';
    static resolveImagePath(id: string){
        return this.imageEndpoint + id;
    }

    private static trackEndPoint: string = 'api/track/';
    static resolveTrackPath(id: string){
        return this.trackEndPoint + id;
    }

}