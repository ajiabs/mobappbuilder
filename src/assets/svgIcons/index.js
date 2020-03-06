/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as React from 'react';
import {
    ICON_BACK,
    ICON_MARKER,
    ICON_NEWS_FEED,
} from './svgIcons';
import {SvgXml} from 'react-native-svg';

const IMAGES = {
  //Bottom Nav
  back: ICON_BACK,
  marker: ICON_MARKER,
  newsfeedIcon: ICON_NEWS_FEED,
};

/**
 * @param {string} icon Icon name
 * @param {number} height Height of Icon
 * @param {number} width Width of Icon
 * @param {string} color Icon Color
 */

const SvgImage = props => {
  const {icon, width = 25, height = 25, color = 'white'} = props;
  const image = IMAGES[icon];
  if (!image) {
    throw new Error(
      `${icon} svg is not added in IMAGES JSON in path > svgIcons/index.js. Please insert icon`,
    );
  }
  return <SvgXml xml={image} width={width} height={height} fill={color} />;
};

export default SvgImage;
