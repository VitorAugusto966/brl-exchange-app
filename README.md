# 💱 BRL Exchange App

Aplicação Angular para consultar a cotação do Real (BRL) frente a outras moedas e visualizar o histórico dos últimos 30 dias.

---

## ✨ Como executar

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
ng serve

# Acessar em:
http://localhost:4200
```

---

## ✅ Funcionalidades

* Consulta em tempo real da taxa de câmbio
* Histórico dos últimos 30 dias:

  * Valores: OPEN / HIGH / LOW / CLOSE
  * Diferença percentual diária com seta ( ↑ ou ↓ )
* Validação de códigos de moeda (ex: `USD`, `EUR`, `JPY`)
* Design responsivo com Angular Material

---

## 📆 Scripts úteis

| Comando                 | Descrição                            |
| ----------------------- | ------------------------------------ |
| `ng serve`              | Inicia o servidor de desenvolvimento |
| `ng build`              | Gera a build de produção             |
| `ng test`               | Executa testes unitários (Karma)     |
| `ng e2e`                | Executa testes end-to-end            |
| `ng generate component` | Cria um novo componente Angular      |

---

## 🌐 Exemplos de uso

Digite um dos códigos de moeda válidos:

```
USD → dólar americano  
EUR → euro  
JPY → iene japonês  
GBP → libra esterlina
```

---

## 🧰 Tecnologias utilizadas

* Angular 20+
* TypeScript
* Angular Material
* RxJS
* SCSS

---