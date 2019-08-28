# 📅 bangla-calendar [![Stars](https://img.shields.io/github/stars/sh4hids/bangla-calendar.svg)](https://github.com/sh4hids/bangla-calendar) · [![License](https://img.shields.io/github/license/sh4hids/bangla-calendar.svg)](https://github.com/sh4hids/bangla-calendar) · [![GitHub issues](https://img.shields.io/github/issues/sh4hids/bangla-calendar.svg?style=popout)](https://github.com/sh4hids/bangla-calendar/issues) · [![Build Status](https://travis-ci.org/sh4hids/bangla-calendar.svg?branch=master)](https://travis-ci.org/sh4hids/bangla-calendar)

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
  getWeekDay,
  getMonth,
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
getDate(date1, { format: 'DD/MM/YY' }); //output: ০১/০৫/২৬
getDate(date1, { format: 'DD/MM/YYYY' }); //output: ০১/০৫/১৪২৬
getDate(date1, { format: 'DD/MM/YYYYb' }); //output: ০১/০৫/১৪২৬ (বঙ্গাব্দ)
getDate(date1, { format: 'D MMMM, YYYY' }); //output: ১ ভাদ্র, ১৪২৬
getDate(date1, { format: 'D MMMM, YYYYb' }); //output: ১ ভাদ্র, ১৪২৬ (বঙ্গাব্দ)
```

#### Parameters

| Parameter | Type            | Example                               |
| --------- | --------------- | ------------------------------------- |
| date      | JavaScript date | `new Date('August 16 2019 06:22:03')` |
| options   | object          | `{ format: 'D MMMM, YYYY' }`          |

### `getDay(date, {})`

This method returns the day of the Bangla month of the given date.

#### Examples

```javascript
const date1 = new Date('August 16 2019 06:22:03');

getDay(date1); //output: ১
getDay(date1, { format: 'DD' }); //output: ০১
getDay(date1, { format: 'D' }); //output: ১
```

#### Parameters

| Parameter | Type            | Example                               |
| --------- | --------------- | ------------------------------------- |
| date      | JavaScript date | `new Date('August 16 2019 06:22:03')` |
| options   | object          | `{ format: 'D' }`                     |

### `getWeekDay(date, {})`

This method returns the day of the Bangla week of the given date.

#### Examples

```javascript
const date1 = new Date('August 16 2019 06:22:03');

getWeekDay(date1); //output: শুক্রবার
getWeekDay(date1, { format: 'eeee' }); //output: শুক্রবার
getWeekDay(date1, { format: 'eee' }); //output: শুক্র
```

#### Parameters

| Parameter | Type            | Example                               |
| --------- | --------------- | ------------------------------------- |
| date      | JavaScript date | `new Date('August 16 2019 06:22:03')` |
| options   | object          | `{ format: 'eeee'}`                   |

### `getMonth(date, {})`

This method returns the Bangla month of a given date.

#### Examples

```javascript
const date1 = new Date('August 16 2019 06:22:03');

getMonth(date1); //output: ভাদ্র
getMonth(date1, { format: 'M' }); //output: ১
getMonth(date1, { format: 'MM' }); //output: ০১
getMonth(date1, { format: 'MMMM' }); //output: ভাদ্র
```

#### Parameters

| Parameter | Type            | Example                               |
| --------- | --------------- | ------------------------------------- |
| date      | JavaScript date | `new Date('August 16 2019 06:22:03')` |
| options   | object          | `{ format: 'MMMM' }`                  |

### `getYear(date, {})`

This method returns the Bangla year of a given date.

#### Examples

```javascript
const date1 = new Date('August 16 2019 06:22:03');

getYear(date1); //output: ১৪২৬
getYear(date1, { format: 'YY' }); //output: ২৬
getYear(date1, { format: 'YYYY' }); //output: ১৪২৬
getYear(date1, { format: 'YYYYb' }); //output: ১৪২৬ (বঙ্গাব্দ)
```

#### Parameters

| Parameter | Type            | Example                               |
| --------- | --------------- | ------------------------------------- |
| date      | JavaScript date | `new Date('August 16 2019 06:22:03')` |
| options   | object          | `{ format: 'YYYY' }`                  |

## Options

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
