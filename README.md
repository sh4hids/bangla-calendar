# 📅 bangla-calendar

A small JavaScript library to convert any valid JavaScript date to Bangla date.

## Install

```bash
$ npm i bangla-calendar
```

## Usage

```javascript
const { getDate, getDay, getMonth, getYear } = require('bangla-calendar');
```

or

```javascript
import { getDate, getDay, getMonth, getYear } from 'bangla-calendar';
```

```javascript
const now = new Date('August 16 2019 06:22:03');

getDate(now); //output: ১ ভাদ্র, ১৪২৬
getDate(now, { format: 'DD/MM/YYYY' }); //output: ০১/০৫/১৪২৬
```

## Methods

### `getDate(date, {})`

This method returns full Bangla date for a given date.

#### Examples

```javascript
const now = new Date('August 16 2019 06:22:03');

getDate(now); //output: ১ ভাদ্র, ১৪২৬
getDate(now, { format: 'DD/MM/YY' }); //output: ০১/০৫/২৬
getDate(now, { format: 'DD/MM/YYYY' }); //output: ০১/০৫/১৪২৬
getDate(now, { format: 'DD/MM/YYYYb' }); //output: ০১/০৫/১৪২৬ (বঙ্গাব্দ)
getDate(now, { format: 'D MMMM, YYYY' }); //output: ১ ভাদ্র, ১৪২৬
getDate(now, { format: 'D MMMM, YYYYb' }); //output: ১ ভাদ্র, ১৪২৬ (বঙ্গাব্দ)
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
const now = new Date('August 16 2019 06:22:03');

getDay(now); //output: ১
getDay(now, { format: 'DD' }); //output: ০১
getDay(now, { format: 'D' }); //output: ১
```

#### Parameters

| Parameter | Type            | Example                               |
| --------- | --------------- | ------------------------------------- |
| date      | JavaScript date | `new Date('August 16 2019 06:22:03')` |
| options   | object          | `{ format: 'D' }`                     |

### `getMonth(date, {})`

This method returns the Bangla month of a given date.

#### Examples

```javascript
const now = new Date('August 16 2019 06:22:03');

getMonth(now); //output: ভাদ্র
getMonth(now, { format: 'M' }); //output: ১
getMonth(now, { format: 'MM' }); //output: ০১
getMonth(now, { format: 'MMMM' }); //output: ভাদ্র
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
const now = new Date('August 16 2019 06:22:03');

getYear(now); //output: ১৪২৬
getYear(now, { format: 'YY' }); //output: ২৬
getYear(now, { format: 'YYYY' }); //output: ১৪২৬
getYear(now, { format: 'YYYYb' }); //output: ১৪২৬ (বঙ্গাব্দ)
```

#### Parameters

| Parameter | Type            | Example                               |
| --------- | --------------- | ------------------------------------- |
| date      | JavaScript date | `new Date('August 16 2019 06:22:03')` |
| options   | object          | `{ format: 'YYYY' }`                  |

#### format

| Unit  | Token | Result examples                                    |
| ----- | ----- | -------------------------------------------------- |
| Day   | D     | ১, ২, ৩, ৪, ..., ৩০, ৩১                            |
|       | DD    | ০১, ০২, ০৩, ০৪, ..., ৩০, ৩১                        |
| Month | M     | ১, ২, ৩, ৪, ..., ১১, ১২                            |
|       | MM    | ০১, ০২, ০৩, ০৪, ..., ১১, ১২                        |
|       | MMMM  | বৈশাখ, জ্যৈষ্ঠ, আষাঢ়, শ্রাবণ, ..., ফাল্গুন, চৈত্র |
| Year  | YY    | ২০, ২১, ২২, ..., ২৫, ২৬                            |
|       | YYYY  | ১৪২০, ১৪২১, ১৪২২, ..., ১৪২৫, ১৪২৬                  |
|       | YYYYb | ১৪২০ (বঙ্গাব্দ), ..., ১৪২৬ (বঙ্গাব্দ)              |
