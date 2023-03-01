import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from 'react';

type Attributes<T> = T extends HTMLInputElement
  ? InputHTMLAttributes<T>
  : T extends HTMLTextAreaElement
  ? TextareaHTMLAttributes<T>
  : T extends HTMLButtonElement
  ? ButtonHTMLAttributes<T>
  : HTMLAttributes<T>;

type DefaultProps<T> = DetailedHTMLProps<Attributes<T>, T>;

interface IStep {
  id: number;
  slug: string;
  title: string;
  completed: boolean;
}

interface IRoleChecker {
  children: ReactNode;
}

export type { DefaultProps, IStep, IRoleChecker };
