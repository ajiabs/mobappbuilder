import { BASE_URL } from "./ApiDomain";

const Routes = {
  EventAPIRoute: 'api/events/',
  PagesAPIRoute: 'api/pages/',
  SettingsAPIRoute: 'api/general-settings/',
};

export const APIEndpoints = {
  EVENTS: BASE_URL + Routes.EventAPIRoute + 'getEvents',
  ABOUT_US: BASE_URL + Routes.PagesAPIRoute + 'getPageContent',
  GET_PAY_ID: BASE_URL + Routes.EventAPIRoute + 'getPayPalId',
  INSERT_PAYMENT: BASE_URL + Routes.EventAPIRoute +'insertPayments',
  GET_NEWS: BASE_URL + Routes.EventAPIRoute + 'getNews',
  GET_SETTINGS: BASE_URL+ Routes.SettingsAPIRoute + 'getGeneralSettings',
};
