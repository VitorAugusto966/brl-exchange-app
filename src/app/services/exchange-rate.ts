import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ExchangeRateService {
  private apiKey = 'RVZG0GHEV2KORLNA';
  private baseUrl = 'https://api-brl-exchange.actionlabs.com.br/api/1.0/open';

  constructor(private http: HttpClient) {}

  getCurrentRate(fromSymbol: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/currentExchangeRate`, {
      params: {
        apiKey: this.apiKey,
        from_symbol: fromSymbol.toUpperCase(),
        to_symbol: 'BRL',
      },
    });
  }

  getHistory(fromSymbol: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/dailyExchangeRate`, {
      params: {
        apiKey: this.apiKey,
        from_symbol:fromSymbol.toUpperCase(),
        to_symbol: 'BRL',
      },
    });
  }
}
