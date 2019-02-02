import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {HttpClient} from '@angular/common/http';
import {Program, ProgramSearchCondition} from '../interfaces/program';
import {ApiResult} from '../interfaces/api-result';

@Injectable()
export class ProgramService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  /**
   * 番組検索
   * @param {ProgramSearchCondition} cond
   * @returns {Observable<Object>}
   */
  public search = (cond: ProgramSearchCondition) => {
    return this.http.post<ApiResult<{ programs: Program[], range: Date[] }>>('./api/program/', cond);
  }

  /**
   * 番組表再取得
   * @param {string} stationId
   * @returns {Observable<Object>}
   */
  public refresh = (stationId: string) => {
    return this.http.post<ApiResult>(`./api/program/${stationId}`, {});
  }

  /**
   * タイムフリーダウンロード
   * @param {string} programId
   * @returns {Observable<Object>}
   */
  public getTimeFree = (programId: string) => {
    return this.http.post<ApiResult>(`./api/program/tf/${programId}`, {});
  }

  /**
   * タイムフリーダウンロード進捗確認
   * @returns {Observable<Object>}
   */
  public getTimeFreeProgress = () => {
    return this.http.get<ApiResult<number>>(`./api/program/tf/`);
  }

}
