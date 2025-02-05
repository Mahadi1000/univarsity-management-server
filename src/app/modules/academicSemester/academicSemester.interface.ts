/* eslint-disable no-unused-vars */
import { Model } from "mongoose"
export type IAcademicSemesterMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type IAcademicSemesterTitles = 'Autumn' | 'Summer' | 'Fall';

export type IAcademicSemesterCodes = '01' | '02' | '03';
export type IAcademicSemester= {
    title: string,
    year: number,
    code: string,
    startMonth: string,
    endMonth: string
}
export type AcademicSemesterModel = Model<IAcademicSemester>

export type IAcademicSemesterFilters = {
  searchTerm?: string;
};