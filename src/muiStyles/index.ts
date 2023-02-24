import { Theme } from '@mui/system';
import {
  BLACK,
  PDSL_BLUE,
  BG_WHITE,
  LABEL_GREY,
  ERROR_RED,
  LIGHT_BLUE_BG,
  DIALOG_TITLE,
  BORDER_GREY,
  SLATE_GREY,
  PRIMARY_BLUE,
  ICON_BLACK,
  DIALOG_TITLE_LIGHT,
  BACKDROP_COLOR_2,
  SECONDARY_BLUE,
  TOP_BAR_ICON_BG,
  ERROR_RED_2,
  WARN_ORANGE,
  ERROR_BG,
  SUCCESS_GREEN,
  SUCCESS_BG,
  WARN_BG,
} from '../common/constants/ColorConstants';

export const commonStyles = {
  fontBody: {
    fontSize: '0.875rem',
    fontWeight: 'normal',
    color: BLACK,
  },
  mAuto: {
    margin: 'auto',
  },
  h100vh: {
    height: '100vh',
  },
  py1: {
    paddingY: '1rem',
  },
  px0: {
    paddingX: 0,
  },
  h100: {
    height: '100%',
  },
  mr8: {
    marginRight: '0.5rem',
  },
  fw600: {
    fontWeight: 600,
  },
  mw100: {
    maxWidth: '100%',
  },
  itemsCenter: {
    alignItems: 'center',
  },
  noWrap: {
    flexWrap: 'nowrap',
    whiteSpace: 'nowrap',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  p1: {
    padding: '1rem',
  },
  p0: {
    padding: '0 !important',
  },
  fw500: {
    fontWeight: 500,
  },
  relative: {
    position: 'relative',
  },
  flex1: {
    flex: 1,
  },
  pointer: {
    cursor: 'pointer',
  },
  flexAlignCenter: { display: 'flex', alignItems: 'center' },
  absCenter: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  requiredInput: {
    marginLeft: '0.25rem',
    color: PDSL_BLUE,
    display: 'inline-block',
  },
  buttonStyles: {
    width: '28.5rem',
    height: '2.75rem',
    backgroundColor: PDSL_BLUE,
    fontSize: '1rem',
    fontWeight: '700',
    lineHeight: '1.5rem',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: PDSL_BLUE,
    },
  },
  disableRippleStyle: {
    color: PDSL_BLUE,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  wfull: { width: '100%' },
  absolute: {
    position: 'absolute',
  },
  datePickerStyle: {
    width: '100%',
    border: `0.063rem solid ${BORDER_GREY}`,
    boxSizing: 'border-box',
    boxShadow: '0rem 0.25rem 0.5rem rgba(0, 0, 0, 0.04)',
    borderRadius: '0.5rem',
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '&:hover': {
      border: `0.125rem solid ${PDSL_BLUE}`,
      boxShadow: ' 0rem 0rem 0rem 0.25rem rgba(0, 174, 239, 0.1)',
    },
  },

  inputFieldStyle: {
    width: '100%',
    height: '2.75rem',
    padding: '1rem',
    border: `0.063rem solid ${BORDER_GREY}`,
    boxSizing: 'border-box',
    boxShadow: '0rem 0.25rem 0.5rem rgba(0, 0, 0, 0.04)',
    borderRadius: '0.5rem',
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '&:hover': {
      border: `0.125rem solid ${PDSL_BLUE}`,
      boxShadow: ' 0rem 0rem 0rem 0.25rem rgba(0, 174, 239, 0.1)',
    },
  },
  errorText: {
    color: 'red',
    fontSize: '0.875rem',
    textAlign: 'left',
  },
  mainGridContainer: {
    background: BG_WHITE,
    height: '100vh',
    justifyContent: 'center',
  },
  innerGrid: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0',
  },
  formDetailsContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  logoStyle: {
    width: '7.5rem',
    height: '6.75rem',
    marginBottom: '1.5rem',
  },
  headingStyle: {
    marginBottom: '1.5rem',
    fontWeight: '600',
    fontSize: '1.5rem',
  },
  formOuterBoxStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexStyle: {
    display: 'flex',
    flexDirection: 'column',
  },
  errorStyle: {
    border: '0.125rem solid red',

    '&:hover': {
      border: '0.125rem solid red',
    },
  },
  inputLabelStyle: {
    fontSize: '0.875rem',
    marginBottom: '6px',
    lineHeight: '1.25rem',
    color: LABEL_GREY,
    fontWeight: '500',
    textAlign: 'left',
  },
  buttonBox: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '1.625rem',
  },
  backArrowBoxStyle: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    margin: 'auto',

    marginTop: '1rem',
    cursor: 'pointer',
    width: '10rem',
  },
  arrowStyle: { color: PDSL_BLUE, textTransform: 'none' },
  textTransformStyle: {
    textTransform: 'none',
  },
  paddingZeroStyle: {
    padding: '0reErrorIconm',
  },
  flexDisplayStyle: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  timeline: {
    transform: 'rotate(90deg)',
  },
  timelineContentContainer: {
    textAlign: 'left',
  },
  timelineContent: {
    display: 'inline-block',
    transform: 'rotate(-90deg)',
    textAlign: 'center',
    minWidth: 50,
  },
  timelineIcon: {
    transform: 'rotate(-90deg)',
  },
  nonSidebarContent: { height: '100vh', overflow: 'auto' },
  sidebarContainer: {
    height: '100vh',
    display: {
      xs: 'none',
      sm: 'block',
    },
    overflow: 'auto',
    width: '100%',
    maxWidth: '412px',
  },
  sidebar: {
    height: '100%',
    width: '412px',
    position: 'fixed',
    zIndex: '1',
    top: '0',
    left: '0',
    backgroundColor: '#06283D',
    overflowX: 'hidden',
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sidebarFlexbox: {
    display: 'flex',
    flexDirection: 'column',
    p: '1.5625rem 1.5625rem 3rem',
    justifyContent: 'space-between',
    height: '100%',
  },
  sidebarMobile: {
    backgroundColor: '#06283D',
  },
  sidebarFlexboxMobile: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    gap: '30px',
  },
  sidebarLogoImg: (theme: Theme) => ({
    height: 95,
    width: 95,
    border: '2px solid #fff',
    [theme.breakpoints.down('md')]: {
      height: 48,
      width: 48,
    },
  }),
  publicPageChildHolder: (isDesktop: boolean) => ({
    marginLeft: isDesktop ? '412px' : '',
  }),
  justifySpaceBetweenAlignCenter: {
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center',
  },
  paddingZero: {
    padding: 0,
  },
  toasterMaxWidth: {
    width: '31rem',
  },
  flexSpaceBw: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexJustifyCenterGap: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
  },
  font14: {
    fontSize: '0.875rem',
  },
  textCenter: {
    textAlign: 'center',
  },
  textRight: {
    textAlign: 'right',
  },
  textLeft: {
    textAlign: 'left',
  },
  btnSm: {
    borderRadius: '0.25rem',
    fontWeight: '400',
    fontSize: '0.875rem',
    padding: '0.25rem 0.5rem',
    lineHeight: 1.5,
  },
  inlineFlex: {
    display: 'inline-flex',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  buttonSpace: {
    marginRight: '1rem',
    '&:last-of-type': {
      marginRight: 'unset',
    },
  },
  flexSpaceBWCenter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descriptionText: (isDesktop?: boolean) => ({
    padding: isDesktop ? '0 24px ' : '0 12px',
    background: BG_WHITE,
  }),
  positionAbsoluteCenter: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const formAdornment = {
  container: {
    display: 'flex',
    color: PDSL_BLUE,
    mb: '1rem',
    alignItems: 'center',
  },
  content: { ml: '0.4rem' },
};

export const setPasswordStyles = {
  passwordValidationTextBox: {
    display: 'flex',
    height: '1.25rem',
    alignItems: 'center',
    marginBottom: '0.25rem',
  },
  checkIconColor: {
    color: PDSL_BLUE,
    height: '1.125rem',
    fontSize: '0.75rem',
    paddingLeft: 0,
  },
  validationTextStyle: {
    height: '1.063rem',
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: '1.125rem',
    color: LABEL_GREY,
  },
  buttonMarginTop: {
    marginTop: '2.094rem',
  },
  checkIconVisibility: { visibility: 'collapse' },
};

export const otpValidStyles = {
  otpSentTextStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginRightStyle: {
    marginRight: '0.5rem',
  },
  otpSentToStyle: {
    font: 'Poppins',
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: '1.313rem',
  },
  emailTextStyle: {
    fontStyle: 'italic',
  },
  changeUsernameFont: {
    fontWeight: 600,
  },
  otpInputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem',
    marginTop: '1rem',
  },
  otpInputField: {
    width: '3.917rem',
    height: '2.75rem',
    fontWeight: '500',
    padding: '0.625rem 0.875rem',
    stroke: 'rgba(26, 26, 26, 0.12)',
    fontSize: '0.875rem',
    lineHeight: '1.313rem',
    background: '#FFFFFF',
    border: '0.063rem solid #F2F2F2',
    boxSizing: 'border-box',
    boxShadow: '0rem 0.25rem 0.5rem rgba(0, 0, 0, 0.02)',
    borderRadius: '0.5rem',
    textAlign: 'center',
    input: {
      textAlign: 'center',
    },
  },

  timerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '2.219rem',
  },

  innerTimerContainer: {
    display: 'flex',
    alignItems: 'center',
    columnGap: '0.625rem',
  },

  disabledResendOtpStyle: {
    color: LABEL_GREY,
    fontWeight: 600,
  },

  resendOtpStyle: {
    color: PDSL_BLUE,
    fontWeight: 600,
  },

  buttonMarginTop: {
    marginTop: '2.094rem',
  },
  errorText: {
    color: ERROR_RED,
    marginTop: '0.375rem',
    height: '1.25rem',
    fontSize: '0.875rem',
  },
};

export const dialogTitleStyle = {
  backgroundColor: LIGHT_BLUE_BG,
  fontSize: '1.5rem',
  fontWeight: '600',
  color: DIALOG_TITLE,
};

export const stepperContainerStyle = (isDesktop: boolean) => ({
  paddingRight: isDesktop ? '3.125rem' : '',
  maxWidth: '44.688rem',
});

export const documentsPageStyle = {
  SpaceBetween: { display: 'flex', justifyContent: 'space-between' },
  AlignCenter: { display: 'flex', alignItems: 'center', gap: '5px' },
  spaceBetweenCenter: (isDesktop: boolean) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: !isDesktop ? 'column' : 'row',
  }),
  flexGap: (isDesktop: boolean) => ({
    dispaly: 'flex',
    gap: 3,
    flexDirection: !isDesktop ? 'column' : 'row',
  }),
  flexEnd: { display: 'flex', justifyContent: 'end' },
  flexJustifyCenterGap: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
  },
  selectStyle: { width: '20rem', marginLeft: '1.25rem' },
  radioInline: { display: 'inline-block', marginLeft: '1.25rem' },
};

export const otherDetailsPageStyle = {
  fullHeight: { height: '100%' },
};

export const onboardingStyles = {
  navItem: {
    boxShadow: 'none',
    fontSize: '1rem',
    fontWeight: 500,
    padding: '0.75rem',
    marginRight: '1.75rem',
  },
  subHeading: {
    fontSize: '0.875rem',
    fontWeight: 500,
    marginBottom: '0.5rem',
  },
  headingContainer: {
    background: PRIMARY_BLUE,
    paddingX: '1.5rem',
    paddingBottom: '0.5rem',
  },
  heading: { color: BG_WHITE, fontSize: '1.25rem', lineHeight: '1.5' },
  onboardingNavItems: {
    background: SLATE_GREY,
    padding: '1rem',
    borderTop: '1px solid white',
    position: 'relative',
  },
  bgImg: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  bgIllus: { position: 'absolute', right: 0, top: 0, height: '100%' },
};

export const ConfirmStyles = {
  actions: {
    marginBottom: '1.5rem',
    marginTop: '0.25rem',
    display: 'flex',
    justifyContent: 'center',
    ...commonStyles.textCenter,
  },
  paper: {
    maxWidth: '26.5rem',
  },
};

export const contractsStyles = {
  paper: {
    padding: '1.25rem',
    ...commonStyles.font14,
  },
  imageViewer: (theme: Theme) => ({
    ...commonStyles.flexDisplayStyle,
    ...commonStyles.flexCenter,
    ...commonStyles.inlineFlex,
    [theme.breakpoints.down('sm')]: {
      ...commonStyles.justifyStart,
    },
  }),
  inputFile: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    border: 'none !important',
    height: 'unset !important',
    '& *': {
      fontSize: '0.875rem !important',
    },
  },
};

export const inputFileStyles = {
  container: (theme: Theme, styles?: object) => ({
    display: 'inline-block',
    border: '1px solid',
    height: '2.75rem',
    [theme.breakpoints.down('md')]: {
      height: '3.125rem',
    },
    borderRadius: '0.5rem',
    maxWidth: '100%',
    outline: 'none',
    color: PDSL_BLUE,
    ...styles,
  }),
  label: (theme: Theme, styles?: object) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    m: 0,
    flexWrap: 'wrap',
    cursor: 'pointer',
    ...styles,
  }),
  value: {
    color: ICON_BLACK,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '100%',
    flex: 1,
  },
  placeholder: {
    color: PDSL_BLUE,
    flex: 1,
  },
  tag: { display: 'none', outline: 'none' },
  buttons: {
    padding: 0,
    ...commonStyles.buttonSpace,
    marginRight: '0.5rem',
    '&:first-of-type': {
      marginLeft: '0.5rem',
    },
  },
};

export const inputFileSmStyles = {
  container: {
    ...commonStyles.btnSm,
    color: PDSL_BLUE,
    background: DIALOG_TITLE_LIGHT,
    border: '1px solid transparent !important',
    height: 'unset !important',
    '&:hover': {
      background: DIALOG_TITLE_LIGHT,
      borderColor: BORDER_GREY,
    },
  },
  placeholder: {
    fontWeight: 400,
    ...commonStyles.textCenter,
    ...commonStyles.font14,
  },
};

export const HeadingWithAdornment = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  key: { fontWeight: 'unset', color: 'inherit' },
};

export const TabStyles = {
  indicator: {
    visibility: 'collapse',
  },
  tab: {
    fontSize: '1rem',
    textTransform: 'unset',
    alignItems: 'flex-start',
    color: BG_WHITE,
    '&.Mui-disabled': {
      color: LABEL_GREY,
    },
    '&.Mui-selected': {
      background: PDSL_BLUE,
      color: BG_WHITE,
      borderRadius: '0.5rem',
      fontWeight: 500,
      brderBottom: 'unset !important',
    },
  },
};

export const goLiveStyle = {
  mbGridDFlex: {
    display: { xs: 'grid', lg: 'flex' },
    alignItems: 'center',
    gap: 1.5,
  },
  contactInfo: {
    p: '1.5rem',
  },
  grid1Fr: { display: 'grid', gridTemplateColumns: '1fr', gap: 3 },
  scrollX: { display: 'flex', gap: 2, overflow: 'hidden', overflowX: 'auto' },
  video: (playing?: boolean) => ({
    borderRadius: '10px',
    ...commonStyles.mw100,
    cursor: 'pointer',
    filter: playing ? 'unset' : 'contrast(0.8) brightness(0.8)',
  }),
  videoSlide: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    mb: '0.5rem',
  },
  modalBackdrop: {
    background: BACKDROP_COLOR_2,
  },
  modalContentContainer: {
    ...commonStyles?.absCenter,
    ...commonStyles.mw100,
    maxHeight: '600px',
    maxWidth: '1000px',
    width: 'calc(100% - 2rem)',
  },
};

export const PaperWithIllustrationStyle = {
  container: {
    ...commonStyles.relative,
    ...goLiveStyle.contactInfo,
    ...commonStyles.flex1,
    background: 'transparent',
  },
  illustrationContainer: {
    ...onboardingStyles.bgIllus,
    ...commonStyles.flexStyle,
    ...commonStyles.justifyEnd,
    zIndex: -1,
  },
};

export const onBoardingPageStyle = {
  headerLogo: (isDesktop: boolean) => ({
    height: isDesktop ? 61 : 40,
    width: isDesktop ? 61 : 40,
    border: '2px solid #fff',
  }),
  headerContainer: (isDesktop: boolean) => ({
    backgroundColor: '#06283D',
    padding: isDesktop
      ? '1.5rem 1.5rem 0.75rem 1.5rem'
      : '0.75rem 0.75rem 0.75rem 0.75rem',
  }),
  headerContentBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoFmsBox: { display: 'flex', alignItems: 'center', gap: '12px' },
  notificationIconButton: {
    borderRadius: '0.5rem',
    background: TOP_BAR_ICON_BG,
    color: BG_WHITE,
    height: '3rem',
    width: '3rem',
    padding: '0.75rem',
  },
  headerTabsDevider: { border: `1px solid ${BG_WHITE}` },
  descriptionText: (isDesktop?: boolean) => ({
    paddingLeft: isDesktop ? '20rem' : 2,
    background: BG_WHITE,
    height: isDesktop ? 70 : '',
  }),
  tabsBGImg: (theme: Theme) => ({
    display: 'flex',
    width: '16rem',
    padding: '1rem',
    alignItems: 'center',
    backgroundColor: PRIMARY_BLUE,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100vh - 6.0625rem)',
      top: 'unset',
      bottom: '0',
    },
  }),
  verticalHeadingContainer: (theme: Theme) => ({
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: '16rem calc(100% - 16rem)',
      display: 'grid',
    },
  }),
  tabsBtn: {
    '& button': {
      borderRadius: 2,
      color: LABEL_GREY,
      fontSize: 16,
      fontWeight: 500,
    },
    '& button:hover': {
      backgroundColor: SECONDARY_BLUE,
      color: BG_WHITE,
      fontSize: 16,
      fontWeight: 500,
    },
    '& button:focus': {
      backgroundColor: SECONDARY_BLUE,
      color: BG_WHITE,
      fontSize: 16,
      fontWeight: 500,
    },
    '& button:active': {
      backgroundColor: SECONDARY_BLUE,
      color: BG_WHITE,
      fontSize: 16,
      fontWeight: 500,
    },
    '& button.Mui-disabled': { color: LABEL_GREY },
    '& button.Mui-selected': {
      backgroundColor: SECONDARY_BLUE,
      color: BG_WHITE,
      fontSize: 16,
      fontWeight: 500,
    },
  },
  marginBwTabs: { margin: '0px 10px' },
  navBgIllus: { position: 'absolute', right: 0 },
};

export const Status = {
  content: {
    borderRadius: '0.5rem',
    padding: '0.5rem 0.75rem',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Declined: {
    color: ERROR_RED_2,
    background: ERROR_BG,
  },
  Pending: {
    color: WARN_ORANGE,
    background: WARN_BG,
  },
  Approved: {
    color: SUCCESS_GREEN,
    background: SUCCESS_BG,
  },
  Enabled: {
    color: SUCCESS_GREEN,
    background: SUCCESS_BG,
  },
  Disabled: {
    color: ERROR_RED_2,
    background: ERROR_BG,
  },
};

export const onBoardingPageWithStepperStyle = {
  stepperBorderedBox: {
    border: `1px solid ${BORDER_GREY}`,
    borderRadius: '10px',
    padding: '1.5rem',
  },
  stepperContentFlexBox: { display: 'flex', gap: '12px', margin: '0px 24px' },
  mbMarginBottom: { marginBottom: '6.25rem' },
  mbStepperBorderedBox: {
    background: BG_WHITE,
    border: `1px solid ${BORDER_GREY}`,
    width: '100%',
    borderRadius: '10px',
    margin: '0px 0px',
    padding: '12px 0px',
  },
  mbStepperLable: (isDesktop: boolean) =>
    isDesktop
      ? { '& span': { fontSize: '14px' } }
      : { '& span': { fontSize: '12px' } },
  flexSpaceBWCenter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descriptionText: (isDesktop?: boolean) => ({
    paddingLeft: isDesktop ? '20rem' : 2,
    paddingRight: isDesktop ? 4 : 2,
    background: BG_WHITE,
    height: isDesktop ? 70 : '',
  }),
};

export const FMFilterStyles = {
  getActiveStyles: (active: boolean) => ({
    padding: '0.75rem',
    color: active ? PDSL_BLUE : 'inherit',
    backgroundColor: active ? LIGHT_BLUE_BG : 'transparent',
    ...commonStyles.pointer,
  }),
  container: (containerSx?: object) => ({
    height: '2.8rem',
    width: '3rem',
    border: '1px solid ' + BORDER_GREY,
    ...commonStyles.flexCenter,
    borderRadius: '0.5rem',
    ...commonStyles.relative,
    ...containerSx,
  }),
  iconBtn: {
    borderRadius: '0',
    ...commonStyles.flex1,
    ...commonStyles.h100,
    ...commonStyles.flexCenter,
  },
  body: (theme: Theme) => ({
    ...commonStyles.absolute,
    zIndex: 9,
    top: 'calc(100% + 0.75rem)',
    right: 0,
    minWidth: '21rem',
    [theme.breakpoints.down(440)]: {
      minWidth: 'unset',
      width: '100vw',
    },
    maxWidth: 'calc(100vw - 3rem)',
    borderRadius: '0.5rem',
    border: '1px solid ' + BORDER_GREY,
  }),
  headingContainer: {
    padding: '1.25rem',
    paddingRight: '0.5rem',
    ...commonStyles.flexSpaceBWCenter,
  },
  optionsContainer: {
    border: '1px solid ' + BORDER_GREY,
    borderLeft: 'none',
    borderRight: 'none',
    minHeight: '14rem',
    ...commonStyles.flexStyle,
  },
  checkBox: {
    pr: '0.5rem',
    display: 'flex',
    ...commonStyles.pointer,
    ...commonStyles.itemsCenter,
  },
  dateLabel: { mb: '0.5rem', fontSize: '0.875rem' },
  chipsContainer: {
    py: '0.875rem',
    ...commonStyles.flexCenter,
    ...commonStyles.justifyStart,
  },
  chips: {
    display: 'flex',
    overflow: 'auto hidden',
    alignItems: 'center',
    gap: '0.5rem',
    p: '0 !important',
    height: '2rem',
    scrollbarWidth: 'none',
    '::-webkit-scrollbar': {
      display: 'none',
    },
  },
  chip: {
    background: LIGHT_BLUE_BG,
    color: PDSL_BLUE,
    fill: PDSL_BLUE,
    ...commonStyles.fw500,
  },
  clearBtn: {
    ...commonStyles.noWrap,
    ...commonStyles.fw500,
    textDecoration: 'underline',
    fontSize: '0.75rem',
    ml: '0.875rem',
  },
};

export const NotificationStyle = {
  notificationContainer: (isSm: boolean) => ({
    zIndex: '15000',
    boxSizing: 'border-box',
    width: '475px',
    maxHeight: 'calc(100vh - 2rem)',
    maxWidth: 'calc(100vw - 2rem)',
    position: 'fixed',
    top: isSm ? '1rem' : '6rem',
    right: isSm ? '1rem' : '6.5rem',
  }),
  paper: {
    height: '100%',
    width: '100%',
    padding: 3,
  },
  notificationScrollMsg: {
    height: '500px',
    maxHeight: 'calc(100vh - 4rem)',
    overflow: 'hidden',
    overflowY: 'auto',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    '::-webkit-scrollbar': {
      display: 'none',
    },
  },
  pointer: (isRead?: boolean) => ({
    width: '12px',
    height: '12px',
    borderRadius: '6px',
    backgroundColor: isRead ? LABEL_GREY : PDSL_BLUE,
  }),
  pointerMsgGrid: {
    display: 'grid',
    gridTemplateColumns: '24px auto',
    marginTop: '1rem',
  },
};
