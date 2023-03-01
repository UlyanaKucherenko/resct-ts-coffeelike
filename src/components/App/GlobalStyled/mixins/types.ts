import {
  Block,
  Circle,
  Flex,
  TextEllipsis,
  TextEllipsisForLines,
} from 'components/App/GlobalStyled/mixins';

type FlexMixinType = Parameters<typeof Flex>[number];
type BlockMixinType = Parameters<typeof Block>[number];
type TextEllipsisMixinType = Parameters<typeof TextEllipsis>[number];
type CircleMixinType = Parameters<typeof Circle>[number];
type TextEllipsisForLinesMixinType = Parameters<
  typeof TextEllipsisForLines
>[number];

export type {
  FlexMixinType,
  BlockMixinType,
  TextEllipsisMixinType,
  CircleMixinType,
  TextEllipsisForLinesMixinType,
};
