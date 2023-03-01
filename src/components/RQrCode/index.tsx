import { Wrap, QrImage } from './styled';

interface RQrCodeProps {
  path: string;
  variant: 'qr' | 'placeholder';
}

export function RQrCode({ variant = 'placeholder', path }: RQrCodeProps) {
  return (
    <Wrap>
      {variant === 'qr' ? (
        <QrImage
          src={path}
          alt="QR code"
        />
      ) : (
        'A QR code will appear here'
      )}
    </Wrap>
  );
}
