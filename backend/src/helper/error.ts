export default class projectError extends Error{
    
    private _status :number = 0;
    private  _data:Object|[] = {};
    get statusCode(): number{ 
        return this._status;
 
    }
    set statusCode(code:number){
        this._status = code;
    }


    get data(): Object{
        return this._data;
    }
    set data(errordata:Object){
        this._data = errordata;
    }   
}