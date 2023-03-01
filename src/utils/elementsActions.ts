import { toast } from 'react-toastify';

export const copyToClipboard = (value: string) => {
  if (
    document.queryCommandSupported &&
    document.queryCommandSupported('copy')
  ) {
    const selBox = document.createElement('textarea');

    try {
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      selBox.value = value;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      toast.success('Success copy link in buffer');
    } catch (err) {
      console.log('=> err', err);
    } finally {
      document.body.removeChild(selBox);
    }
  }
};

// const DownloadFile = (link: string) => {
//   const element = document.createElement('a');
//   element.setAttribute('href', link);
//   element.style.display = 'none';
//   document.body.appendChild(element);
//   element.click();
//   document.body.removeChild(element);
// };
