import 'pnotify/dist/PNotifyBrightTheme.css';
import 'pnotify/dist/es/PNotifyAnimate';
import PNotify from 'pnotify/dist/es/PNotify';

const showError = message => {
  PNotify.error({ text: message, stack: { dir1: 'down', firstpos1: 25 } });
};

const closeError = () => {
  PNotify.closeAll();
};

export default {
  showError,
  closeError,
};
