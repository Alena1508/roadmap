import moment from 'moment';

export const CardTypes = {
  BAR: 'bar',
  LANE: 'lane',
};

export const LANE_LENGTH  = 15;

export const endOfYear = moment().endOf('year').format();
export const endOfMonth = moment().endOf('month').format();
export const daysInMothLeft = moment(endOfMonth).diff(moment(), 'days');
export const monthInYearLEft = moment(endOfYear).diff(moment(), 'months');
export const blocks = new Array(monthInYearLEft + LANE_LENGTH).fill('block');
export const blockWidth = 10;
export const firstBlockWidth = ((daysInMothLeft / moment().daysInMonth()).toFixed(2) * blockWidth);

export const times = [
  {
    year: 2018,
    quarters: [
      {
        name: 'Q1',
        months: [
          {
            name: 'January'
          },
          {
            name: 'February'
          },
          {
            name: 'March'
          },
        ]
      },
      {
        name: 'Q2',
        months: [
          {
            name: 'April'
          },
          {
            name: 'May'
          },
          {
            name: 'June'
          },
        ]
      },
      {
        name: 'Q3',
        months: [
          {
            name: 'July'
          },
          {
            name: 'August'
          },
          {
            name: 'September'
          },
        ]
      },
      {
        name: 'Q4',
        months: [
          {
            name: 'October'
          },
          {
            name: 'November'
          },
          {
            name: 'December'
          },
        ]
      }
    ]
  },
  {
    year: 2019,
    quarters: [
      {
        name: 'Q1',
        months: [
          {
            name: 'January'
          },
          {
            name: 'February'
          },
          {
            name: 'March'
          },
        ]
      },
      {
        name: 'Q2',
        months: [
          {
            name: 'April'
          },
          {
            name: 'May'
          },
          {
            name: 'June'
          },
        ]
      },
      {
        name: 'Q3',
        months: [
          {
            name: 'July'
          },
          {
            name: 'August'
          },
          {
            name: 'September'
          },
        ]
      },
      {
        name: 'Q4',
        months: [
          {
            name: 'October'
          },
          {
            name: 'November'
          },
          {
            name: 'December'
          },
        ]
      }
    ]
  },
];





