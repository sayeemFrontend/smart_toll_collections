const borderClass =
  'border-2 rounded-md border-secondary-200 focus:border-2 focus:border-secondary-600';
const text = 'text-primary-800 dark:text-primary-100';

const inputWrapper = `w-full px-2 h-12 text-lg ${borderClass} ${text}`;
const btnSuccess = `${borderClass} w-full px-2 h-16 bg-secondary-500 active:bg-secondary-700`;
const btnWarning = `${borderClass} w-full px-2 h-16 bg-[#eab308]`;
const btnDel = `${borderClass} w-full px-2 h-16 hover:bg-[#dc3545]`;
const borderDel = `border border-[#dc3545] rounded-md`;

const label = 'text-base font-semibold';
const errorText = 'text-base font-semibold';
const background = 'bg-primary-100 dark:bg-primary-700';
const customShadow = 'shadow-light dark:shadow-dark';
const customBorder = 'border border-[#dcdcdc] dark:border-[#464646] rounded-lg';
const backgroundCard = 'bg-primary-50 dark:bg-primary-800';
const backgroundChart = `p-4 bg-primary-100 dark:bg-[#1e293b] ${customShadow} rounded-sm`;
const contentClass = 'shadow-lg bg-primary-300 dark:bg-primary-800';
const headerClass = `h-12 bg-primary-50 dark:bg-primary-700 ${customBorder} ${text}`;
const tableClass = {
  headerRow: 'flex-row bg-primary-200 dark:bg-primary-700',
  headerCell: '',
  bodyRow: 'flex-row bg-primary-400 dark:bg-primary-600 ',
  bodyCell: '',
  border: 'border-b border-[#dcdcdc] dark:border-[#464646]',
  bgHead: 'bg-primary-200 dark:bg-primary-700',
  bgBody: 'bg-primary-400 dark:bg-primary-600',
};
export const classes = {
  btnDel,
  borderDel,
  backgroundChart,
  contentClass,
  headerClass,
  customBorder,
  customShadow,
  backgroundCard,
  background,
  text,
  btnSuccess,
  btnWarning,
  borderClass,
  inputWrapper,
  label,
  errorText,
  tableClass,
};
