import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExchangeRateService } from '../../services/exchange-rate';
import { DecimalPipe, DatePipe, CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-exchange-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DecimalPipe,
    DatePipe,
    MatExpansionModule,
  ],
  templateUrl: './exchange-form.html',
  styleUrl: './exchange-form.scss',
})
export class ExchangeForm {
  currency: string = '';
  exchangeResult: any = null;
  exchangeHistory: any[] = [];

  errorMessage: string = '';

  constructor(private exchangeRateService: ExchangeRateService) {}

  getRates(): void {
    this.errorMessage = '';
    const trimmedCurrency = this.currency.trim().toUpperCase();

    if (!this.isValidCurrencyCode(trimmedCurrency)) {
      this.errorMessage =
        'Código inválido! Use uma sigla de 3 letras como USD, EUR, JPY...';
      this.exchangeResult = null;
      this.exchangeHistory = [];
      return;
    }

    this.exchangeRateService.getCurrentRate(trimmedCurrency).subscribe({
      next: (data) => {
        this.exchangeResult = data;
        console.log(this.exchangeResult);

        this.exchangeRateService.getHistory(trimmedCurrency).subscribe({
          next: (historyData) => {
            const history = Array.isArray(historyData.data)
              ? historyData.data.sort((a: any, b: any) =>
                  new Date(a.date) > new Date(b.date) ? -1 : 1
                )
              : [];

            this.exchangeHistory = history.map((day: any, i: any, arr: any) => {
              const prev = arr[i + 1];
              const closeDiffPercent = prev
                ? ((day.close - prev.close) / prev.close) * 100
                : 0;

              return {
                ...day,
                closeDiffPercent,
              };
            });
          },
          error: () => {
            this.exchangeHistory = [];
            this.errorMessage =
              'Erro ao carregar o histórico de cotações. Tente novamente.';
          },
        });
      },
      error: () => {
        this.exchangeResult = null;
        this.exchangeHistory = [];
        this.errorMessage =
          'Não foi possível encontrar esta moeda. Verifique o código e tente novamente.';
      },
    });
  }

  private isValidCurrencyCode(code: string): boolean {
    return /^[A-Z]{3}$/.test(code);
  }
}
