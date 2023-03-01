import { ChangeEvent, useState } from 'react';

import { ReactComponent as IconUploadSvg } from 'assets/img/icons/icon-upload.svg';
import { HelperText } from 'components/Form/_shared/styled';
import { Form, Content, ContentWrap, SelectButton } from './styled';

interface IFileObj {
  file: File;
  fileBase64: string | ArrayBuffer | null;
}

interface RDropzone {
  acceptedFileTypes: string[];
  onFileLoad: ({ file, fileBase64 }: IFileObj) => void;
  height: number;
}

export function RDropzone({
  acceptedFileTypes = ['image/png', 'image/jpg', 'image/jpeg'],
  onFileLoad = () => {},
  height,
}: RDropzone) {
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
      return onFileSelectSuccess(file);
    }

    return onFileSelectError({
      error: 'File load error',
    });
  };

  const handleFileInput = (file: File) => {
    validateFile(file);
  };

  const onFileSelectSuccess = async (file: File) => {
    let fileBase64;
    setError(null);
    const fileData = new FileReader();
    fileData.onloadend = () => {
      fileBase64 = fileData.result;
      onFileLoad({ file, fileBase64 });
    };
    fileData.readAsDataURL(file);
  };

  const onFileSelectError = ({ error }: { error: string }) => {
    setError(error);
  };

  const preventDefaultCustom = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const onUploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFileInput(e.target.files[0]);
    }
  };

  const onDropFile = (e: any) => {
    preventDefaultCustom(e);
    if (e.dataTransfer) {
      handleFileInput(e.dataTransfer.files[0]);
    }
  };

  return (
    <>
      <Form
        onSubmit={(e) => e.preventDefault()}
        onDragEnter={preventDefaultCustom}
        onDragOver={preventDefaultCustom}
        onDragLeave={preventDefaultCustom}
        onDrop={onDropFile}
        height={height}
        error={!!error}
      >
        <Content>
          <ContentWrap>
            <IconUploadSvg />
            Drag files here to attach or&nbsp;
            <SelectButton htmlFor="dropzoneFile">click to select</SelectButton>
            <input
              id="dropzoneFile"
              type="file"
              accept={acceptedFileTypes.join(', ')}
              onChange={onUploadFile}
              hidden
            />
          </ContentWrap>
        </Content>
      </Form>
      <HelperText>{error}</HelperText>
    </>
  );
}
