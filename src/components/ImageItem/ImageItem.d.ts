/**
 * Copyright (c) JOB TODAY S.A. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from "react";
import { GestureResponderEvent } from "react-native";
import { ImageSource } from "../../@types";

declare type Props = {
  imageSrc: ImageSource;
  onRequestClose: () => void;
  onZoom: (isZoomed: boolean) => void;
  onLongPress: (image: ImageSource) => void;
  onSeek: (seeking: boolean) => void;
  onHidePageInfo: () => void;
  toggleHeaderFooter: () => void;
  delayLongPress: number;
  swipeToCloseEnabled?: boolean;
  doubleTapToZoomEnabled?: boolean;
  mediaType: string;
  currentIndex: number;
  mainVideoColor: string | undefined;
  headerFooterVisible: boolean;
};

declare const _default: React.MemoExoticComponent<({
  imageSrc,
  onZoom,
  onRequestClose,
  onLongPress,
  delayLongPress,
  swipeToCloseEnabled,
  mediaType,
  currentIndex,
  mainVideoColor,
  onSeek,
  onHidePageInfo,
  headerFooterVisible,
  toggleHeaderFooter
}: Props) => JSX.Element>;

export default _default;
