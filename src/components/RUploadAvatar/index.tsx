import { RAvatar } from 'components/RAvatar';
import { ChangeEvent } from 'react';
import { Input, Label, Wrap, Upload } from './styled';

interface RUploadAvatarProps {
  size: number;
  photoPath: string;
  onFileUpload?: (file: File) => void;
  accept?: string;
}

export function RUploadAvatar({
  size,
  photoPath,
  onFileUpload = () => {},
  accept = '.jpg, .jpeg, .png, .bmp',
}: RUploadAvatarProps) {
  const onUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (typeof file !== 'undefined') {
        onFileUpload(file);
      }
    }
  };

  return (
    <Wrap>
      <RAvatar
        size={size}
        thumb={photoPath || undefined}
      />
      <Label thumb={!!photoPath}>
        <Input
          type="file"
          hidden
          accept={accept}
          onChange={onUpload}
        />
        <Upload />
      </Label>
    </Wrap>
  );
}
