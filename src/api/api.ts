export default class Api {

    static imageEndpoint: string = 'api/image/'
    static resolveImagePath(id: string){
        return this.imageEndpoint + id;
    }

}