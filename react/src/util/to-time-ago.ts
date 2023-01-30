import { TFunction } from 'i18next';

export const toTimeAgo = (date: number, t: TFunction): string => {
  const now = new Date();

  const diffSeconds = Math.round((now.getTime() - date) / 1000);
  if (diffSeconds > 59) {
    const diffMinutes = Math.round(diffSeconds / 60);
    if (diffMinutes > 59) {
      const diffHours = Math.round(diffMinutes / 60);
      if (diffHours > 23) {
        const diffDays = Math.round(diffHours / 24);
        if (diffDays > 30) {
          const diffMonths = Math.round(diffDays / 30);
          if (diffMonths > 11) {
            const years = Math.round(diffDays / 365);
            if (years > 1) {
              return t('date.x-years-ago', { amount: years });
            } else {
              return t('date.one-year-ago');
            }
          } else {
            if (diffMonths > 1) {
              return t('date.x-months-ago', { amount: diffMonths });
            } else {
              return t('date.one-month-ago');
            }
          }
        } else {
          if (diffDays > 1) {
            return t('date.x-days-ago', { amount: diffDays });
          } else {
            return t('date.one-day-ago');
          }
        }
      } else {
        if (diffHours > 1) {
          return t('date.x-hours-ago', { amount: diffHours });
        } else {
          return t('date.one-hour-ago');
        }
      }
    } else {
      if (diffMinutes > 2) {
        return t('date.x-minutes-ago', { amount: diffMinutes });
      } else {
        return t('date.a-few-minutes-ago');
      }
    }
  } else {
    if (diffSeconds > 5) {
      return t('date.x-seconds-ago', { amount: diffSeconds });
    } else {
      return t('date.a-few-seconds-ago');
    }
  }
};
