import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {HttpClient} from '@angular/common/http';
import {ApiResult} from '../interfaces/api-result';
import {Library} from '../interfaces/library';

@Injectable()
export class LibraryService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  /**
   * ライブラリ取得
   * @returns {Observable<Object>}
   */
  public get = () => {
    return this.http.get<ApiResult<Library[]>>('./api/library');
  }

  /**
   * ライブラリ削除
   * @param {string} id
   * @returns {Observable<Object>}
   */
  public delete = (id: string) => {
    return this.http.delete<ApiResult>(`./api/library/${id}`);
  }
}
