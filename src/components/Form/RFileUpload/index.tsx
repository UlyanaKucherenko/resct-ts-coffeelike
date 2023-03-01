import { ChangeEvent, useEffect, useState } from 'react';

import { dataURLtoFile } from 'utils/prepare';
import { HelperText } from 'components/Form/_shared/styled';
import { FieldInput, Label, DocName } from './styled';
import { DefaultProps } from '../../../types/common';

interface RFileUpload extends DefaultProps<HTMLInputElement> {
  name: string;
  label: string;
  value: string;
  onFileLoad: (
    file: File,
    fileBase64: string | ArrayBuffer | null,
    name: string
  ) => void;
}

const acceptedFileTypes = ['image/png', 'image/jpg', 'image/jpeg'];

export function RFileUpload({
  name,
  label,
  value, // base64 format
  placeholder,
  onFileLoad,
  disabled = false,
}: RFileUpload) {
  const [imagePreviewUrl, setImagePreviewUrl] = useState<
    string | null | ArrayBuffer
  >(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const validateFile = (file: File) => {
    if (typeof file !== 'undefined') {
      if (!acceptedFileTypes.includes(file.type)) {
        return onFileSelectError({
          error: 'Wrong file type',
        });
      }
      if (file.size > 2000000) {
        return onFileSelectError({ error: 'Too large file' });
      }
      return onFileSelectSuccess(file, name);
    }

    return onFileSelectError({
      error: 'File load error',
    });
  };

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.files) {
      const file = e.target.files[0];
      validateFile(file);
    }
  };

  const onFileSelectSuccess = async (file: File, name: string) => {
    let fileBase64;
    setError(null);
    const fileData = new FileReader();
    fileData.onloadend = () => {
      fileBase64 = fileData.result;
      setImagePreviewUrl(fileBase64);
      onFileLoad(file, fileBase64, name);
    };
    fileData.readAsDataURL(file);
    setSelectedFile(file);
  };

  const onFileSelectError = ({ error }: { error: string }) => {
    setError(error);
  };

  useEffect(() => {
    if (value) {
      setImagePreviewUrl(value);
      setSelectedFile(dataURLtoFile(value, name));
    }
  }, [value]);

  return (
    <div>
      <div>
        <FieldInput
          // disabled={!!selectedFile || value}
          id={name}
          name={name}
          type="file"
          accept={acceptedFileTypes.join(', ')}
          placeholder={placeholder}
          onChange={!disabled ? handleFileInput : undefined}
          disabled={disabled}
        />
        <Label
          htmlFor={name}
          imgPreview={imagePreviewUrl?.toString()}
        >
          {label && (
            <DocName
              success={!!selectedFile}
              error={!!error}
            >
              {label}
            </DocName>
          )}
        </Label>
      </div>
      <HelperText>{error}</HelperText>
    </div>
  );
}
