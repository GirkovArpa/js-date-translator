# JS-Date-Translator
## Translate month and weekday names between locales

```javascript
console.log(buildDict('en', 'pt-BR'));
```

```javascript
{
  months: {
    short: {
      jan: 'jan.',
      feb: 'fev.',
      mar: 'mar.',
      apr: 'abr.',
      may: 'mai.',
      jun: 'jun.',
      jul: 'jul.',
      aug: 'ago.',
      sep: 'set.',
      oct: 'out.',
      nov: 'nov.',
      dec: 'dez.'
    },
    long: {
      january: 'janeiro',
      february: 'fevereiro',
      march: 'março',
      april: 'abril',
      may: 'maio',
      june: 'junho',
      july: 'julho',
      august: 'agosto',
      september: 'setembro',
      october: 'outubro',
      november: 'novembro',
      december: 'dezembro'
    }
  },
  weekdays: {
    short: {
      mon: 'seg.',
      thu: 'qui.',
      sun: 'dom.',
      tue: 'ter.',
      fri: 'sex.',
      wed: 'qua.',
      sat: 'sáb.'
    },
    long: {
      monday: 'segunda-feira',
      thursday: 'quinta-feira',
      sunday: 'domingo',
      tuesday: 'terça-feira',
      friday: 'sexta-feira',
      wednesday: 'quarta-feira',
      saturday: 'sábado'
    }
  }
}
```