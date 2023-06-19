# 📅 bangla-calendar [![Stars](https://img.shields.io/github/stars/sh4hids/bangla-calendar.svg)](https://github.com/sh4hids/bangla-calendar) · [![License](https://img.shields.io/github/license/sh4hids/bangla-calendar.svg)](https://github.com/sh4hids/bangla-calendar) · [![GitHub issues](https://img.shields.io/github/issues/sh4hids/bangla-calendar.svg?style=popout)](https://github.com/sh4hids/bangla-calendar/issues)

A small JavaScript library to convert any valid JavaScript date to Bangla date.

## Install

```bash
$ npm i bangla-calendar
```

## Usage

```javascript
const {
  getDate,
  getDay,
  getWeekDay,
  getMonth,
  getYear,
} = require('bangla-calendar');
```

or

```javascript
import {
  getDate,
  getDay,
  getMonth,
  getWeekDay,
  getYear,
} from 'bangla-calendar';
```

```javascript
const date1 = new Date('August 16 2019 06:22:03');

getDate(date1); //output: শুক্রবার, ১ ভাদ্র, ১৪২৬
getDate(date1, { format: 'DD/MM/YYYY' }); //output: ০১/০৫/১৪২৬
```

## Methods

### `getDate(date, {})`

This method returns full Bangla date for a given date.

#### Examples

```javascript
const date1 = new Date('August 16 2019 06:22:03');

getDate(date1); //output: শুক্রবার, ১ ভাদ্র, ১৪২৬
getDate(date1, { format: 'DD/MM/YY', calculationMethod: 'BD' }); //output: ০১/০৫/২৬
getDate(date1, { format: 'DD/MM/YYYY', calculationMethod: 'BD' }); //output: ০১/০৫/১৪২৬
getDate(date1, { format: 'DD/MM/YYYYb', calculationMethod: 'BD' }); //output: ০১/০৫/১৪২৬ (বঙ্গাব্দ)
getDate(date1, { format: 'D MMMM, YYYY', calculationMethod: 'BD' }); //output: ১ ভাদ্র, ১৪২৬
getDate(date1, { format: 'D MMMM, YYYYb', calculationMethod: 'BD' }); //output: ১ ভাদ্র, ১৪২৬ (বঙ্গাব্দ)
```

#### Parameters

| Parameter | Type            | Example                                               |
| --------- | --------------- | ----------------------------------------------------- |
| date      | JavaScript date | `new Date('August 16 2019 06:22:03')`                 |
| options   | object          | `{ format: 'D MMMM, YYYY', calculationMethod: 'BD' }` |

### `getDay(date, {})`

This method returns the day of the Bangla month of the given date.

#### Examples

```javascript
const date1 = new Date('August 16 2019 06:22:03');

getDay(date1); //output: ১
getDay(date1, { format: 'DD', calculationMethod: 'BD' }); //output: ০১
getDay(date1, { format: 'D', calculationMethod: 'BD' }); //output: ১
```

#### Parameters

| Parameter | Type            | Example                                    |
| --------- | --------------- | ------------------------------------------ |
| date      | JavaScript date | `new Date('August 16 2019 06:22:03')`      |
| options   | object          | `{ format: 'D', calculationMethod: 'BD' }` |

### `getWeekDay(date, {})`

This method returns the day of the Bangla week of the given date.

#### Examples

```javascript
const date1 = new Date('August 16 2019 06:22:03');

getWeekDay(date1); //output: শুক্রবার
getWeekDay(date1, { format: 'eeee', calculationMethod: 'BD' }); //output: শুক্রবার
getWeekDay(date1, { format: 'eee', calculationMethod: 'BD' }); //output: শুক্র
```

#### Parameters

| Parameter | Type            | Example                                       |
| --------- | --------------- | --------------------------------------------- |
| date      | JavaScript date | `new Date('August 16 2019 06:22:03')`         |
| options   | object          | `{ format: 'eeee', calculationMethod: 'BD' }` |

### `getMonth(date, {})`

This method returns the Bangla month of a given date.

#### Examples

```javascript
const date1 = new Date('August 16 2019 06:22:03');

getMonth(date1); //output: ভাদ্র
getMonth(date1, { format: 'M', calculationMethod: 'BD' }); //output: ১
getMonth(date1, { format: 'MM', calculationMethod: 'BD' }); //output: ০১
getMonth(date1, { format: 'MMMM', calculationMethod: 'BD' }); //output: ভাদ্র
```

#### Parameters

| Parameter | Type            | Example                                       |
| --------- | --------------- | --------------------------------------------- |
| date      | JavaScript date | `new Date('August 16 2019 06:22:03')`         |
| options   | object          | `{ format: 'MMMM', calculationMethod: 'BD' }` |

### `getYear(date, {})`

This method returns the Bangla year of a given date.

#### Examples

```javascript
const date1 = new Date('August 16 2019 06:22:03');

getYear(date1); //output: ১৪২৬
getYear(date1, { format: 'YY', calculationMethod: 'BD' }); //output: ২৬
getYear(date1, { format: 'YYYY', calculationMethod: 'BD' }); //output: ১৪২৬
getYear(date1, { format: 'YYYYb', calculationMethod: 'BD' }); //output: ১৪২৬ (বঙ্গাব্দ)
```

#### Parameters

| Parameter | Type            | Example                                       |
| --------- | --------------- | --------------------------------------------- |
| date      | JavaScript date | `new Date('August 16 2019 06:22:03')`         |
| options   | object          | `{ format: 'YYYY', calculationMethod: 'BD' }` |

## Options

#### calculationMethod (string)

| Country    | Token |
| ---------- | ----- |
| Bangladesh | BD    |
| India      | IN    |

#### format (string)

| Unit    | Token | Result examples                                    |
| ------- | ----- | -------------------------------------------------- |
| Day     | D     | ১, ২, ৩, ৪, ..., ৩০, ৩১                            |
|         | DD    | ০১, ০২, ০৩, ০৪, ..., ৩০,                           |
| Weekday | eee   | শুক্র, শনি, রবি, ..., বৃহস্পতি                     |
|         | eeee  | শুক্রবার, শনিবার, রবিবার, ..., বৃহস্পতিবার         |
| Month   | M     | ১, ২, ৩, ৪, ..., ১১, ১২                            |
|         | MM    | ০১, ০২, ০৩, ০৪, ..., ১১, ১২                        |
|         | MMMM  | বৈশাখ, জ্যৈষ্ঠ, আষাঢ়, শ্রাবণ, ..., ফাল্গুন, চৈত্র |
| Year    | YY    | ২০, ২১, ২২, ..., ২৫, ২৬                            |
|         | YYYY  | ১৪২০, ১৪২১, ১৪২২, ..., ১৪২৫, ১৪২৬                  |
|         | YYYYb | ১৪২০ (বঙ্গাব্দ), ..., ১৪২৬ (বঙ্গাব্দ)              |
