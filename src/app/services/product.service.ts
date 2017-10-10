import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class ProductService {

  private _endPoint = 'http://localhost:3000/products';
  constructor(private http: Http) { }

  public all (): Observable<any> {
    return  this.http.get(`${this._endPoint}`).map(this.extractData).catch(this.handleError);
  }
  public findById (id: Number): Observable<any> {
    return  this.http.get(`${this._endPoint}/${id}`).map(this.extractData).catch(this.handleError);
  }
  public create(product, file): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', product.name);
    formData.append('name', product.price);
    formData.append('name', product.description);
    const headers = new Headers ({'content-type': 'multipart/form-data'});
    const options: RequestOptions = new RequestOptions({ headers: headers });
    return this.http.post(`${this._endPoint}`, formData, options).map(this.extractData).catch(this.handleError);
  }
  public update (product): Observable<any> {
    return  this.http.put(`${this._endPoint}/${product.id}`, product).map(this.extractData).catch(this.handleError);
  }

  public remove (product): Observable<any> {
    return  this.http.delete(`${this._endPoint}/${product.id}`).map(this.extractData).catch(this.handleError);
  }
  private extractData(res: Response) {
    return res.json() || { };
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
