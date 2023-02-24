export const mobileRegEx =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([\d]{2,3}\\)[ \\-]*)|([\d]{2,4})[ \\-]*)*?[\d]{3,4}?[ \\-]*[\d]{3,4}?$/; // NOSONAR

export const PASSWORD_REGEX_WITH_SPECIAL_CHARACTERS =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{0,20}$)/; // NOSONAR

export const URL_REGEX =
  /^((http|https):\/\/)?(www.)?(?!.*(http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+(\/)?.([\w?[a-zA-Z-_%/@?]+)*([^/\w?[a-zA-Z0-9_-]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/; // NOSONAR

export const NAME_REGEX = /^[A-Za-z\s]*$/;

export const SKYPE_REGEX = /^[a-z][a-z0-9.,\-_]{5,31}$/i;

export const NUMBER_REGEX = /^\d*$/;

export const WHITE_SPACES_REGEX = /^(\S+$)/g;

export const ALPHA_NUMERIC_REGEX = /[a-zA-Z0-9]+/;

export const ALPHA_NUMERIC_REGEX1 = /^[a-zA-Z0-9]+$/;

export const EMAIL_REGEX =
  /^([0-9a-zA-Z]+['\-._+]?)+[0-9a-zA-Z]+[@]([0-9a-zA-Z]+[-]?){2,}[.](([a-zA-Z]+[-]?){2,}[.]){0,2}[a-zA-Z]{2,}$/; // NOSONAR

export const COMMA_REGEX = /\B(?=(\d{3})+(?!\d))/g; // NOSONAR

export const tests: Itests = {
  lowerCase: /[a-z]+/,
  upperCase: /[A-Z]+/,
  digits: /\d+/,
  symbol: /[*.!@#$^&_+-]+/,
  length: /^.{6,20}$/,
};

export interface Itests {
  lowerCase: RegExp;
  upperCase: RegExp;
  digits: RegExp;
  symbol: RegExp;
  length: RegExp;
}

export const tabLabels: string[] = [
  'Details & documentation',
  'Contracts',
  'Fees details',
  'Fees payment',
  'Going live',
];

export const PASSWORD_ENCRYPTION_ALGO = 'AES';
export const PASSWORD_ENCRYPTION_SECRET =
  'BgfQWII2oANwK4CZFI9v3jsMR6sH9QIWAG4kgTV809m79XBtyYsge24Qt4wtvtS';

export const otpLimit = 3;
export const timerLimit = 10;

export const KENYA_REGIONS = [
  'Nairobi',
  'Central',
  'Coast',
  'Eastern',
  'North Eastern',
  'Nyanza',
  'Rift Valley',
  'Western',
];

export const COMPANY_TYPE_LIST = [
  'Public Company LTD',
  'Private Company LTD',
  'Close Corporation',
  'SACCO',
  'Partnership',
  'Business Trust',
  'Joint Venture',
  'Other',
];

export interface IAggregatorStage {
  [x: string]: {
    index: number;
    value: string;
  };
}

export const AGGREGATOR_STAGES: IAggregatorStage = {
  DOCUMENT_VERIFICATION: {
    index: 1,
    value: 'details-and-documents/business-portal',
  },
  CONTRACT_VERIFICATION: {
    index: 2,
    value: 'contract',
  },
  FEES_DETAILS: {
    index: 3,
    value: 'fees-details',
  },
  FEE_PAYMENT: {
    index: 4,
    value: 'fees-payment',
  },
  GO_LIVE: {
    index: 5,
    value: 'going-live',
  },
  ONBOARDED: {
    index: 6,
    value: 'going-live',
  },
};

export const accepedFileTypes = ['jpg', 'png', 'pdf', 'jpeg'];

export const DATE_FORMAT = 'DD.MM.YY';

export const monthlyThreshholds =
  'I/We cannot Commit to a minimum monthly threshold value of KSH 3,000,000 and above for specified month(s)';

export const DASHBOARD_STAGE = 'DASHBOARD';

export const FILE_SIZE_IN_BYTES = 5242880;

export const CREATE_USER_ROLES = [
  {
    label: 'Reports only',
    value: 'REPORTS',
    disabled: true,
  },
  {
    label: 'Reports & Float Transfers',
    value: 'REPORTS_AND_FLOAT_TRANSFERS',
    disabled: false,
  },
];

export const MODULES = {
  DASHBOARD: 'DASHBOARD',
  FILE: 'FILE',
  ONBOARDING: 'ONBOARDING',
  USER: 'USER',
  STATIC_DATA: 'STATIC_DATA',
};

export const CREATE_USER_STEPS = [
  'Basic details',
  'Set-up password',
  'Contact Details',
  'Review & Confirm',
];

export const VAPID_KEY =
  'BO4AYo97O_R2lmD_q7kPzGI4rr2cMuQhCk1g5N9O-d5_alvIT7D0CqWxZFe-he-10hAS9uLRUs92D4CO5bwzhXQ';

export const AGGREGATOR_ROLES = {
  ADMIN: 'ADMIN',
  REPORTS_AND_FLOAT_TRANSFERS: 'REPORTS_AND_FLOAT_TRANSFERS',
  REPORTS: 'REPORTS',
};
