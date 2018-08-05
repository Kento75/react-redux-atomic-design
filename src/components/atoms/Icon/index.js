import React from 'react';
import styles from './styles.css';
import { containPresenter } from '../../utils/HoC.js';

export const IconSVGList = {
  TrashCan: 'trash-can',
  ChevronRight: 'chevron-right',
  Alarm: 'alarm',
  Bluetooth: 'bluetooth',
  Cached: 'cached',
  Call: 'call',
  Cast: 'cast',
  CheckCircle: 'check-circle',
  CloudDownload: 'cloud-download',
  Computer: 'computer',
  Email: 'email',
  Face: 'face',
  Favorite: 'favorite',
  GetApp: 'get-app',
  Headset: 'headset',
  Home: 'home',
  Image: 'image',
  Mic: 'mic',
  Notifications: 'notifications',
  PermIdentity: 'perm-identity',
  PhotoCamera: 'photo-camera',
  QuestionAnswer: 'question-answer',
  Repeat: 'repeat',
  Room: 'room',
  Search: 'search',
  Settings: 'settings',
  ShoppingCart: 'shopping-cart',
  ThumbUp: 'thumb-up',
  Visibility: 'visibility',
  VolumeUp: 'volume-up',
  ZoomIn: 'zoom-in',
};

export const IconPresenter = ({
  iconName,
  height = 20,
  width = 20,
  ...props,
}) => (
  <svg
    height={ height }
    width={ width }
    { ...props }
  >
    <use href={`/icons.svg#${ iconName }`}></use>
  </svg>
);

export const IconContainer = ({
  presenter,
  onClick,
  className = '',
  ...props,
}) => {
  if (onClick) className += ` ${ styles.clickable }`;
  return presenter({ onClick, className, ...props });
};

export const iconFactory = iconName => props => {
  const Icon = containPresenter(IconContainer, IconPresenter);
  return <Icon { ...{ iconName, ...props } } />;
};

export const TrashCanIcon = iconFactory(IconSVGList.TrashCan);
export const ChevronRightIcon = iconFactory(IconSVGList.ChevronRight);
export const AlarmIcon = iconFactory(IconSVGList.Alarm);
export const BluetoothIcon = iconFactory(IconSVGList.Bluetooth);
export const CachedIcon = iconFactory(IconSVGList.Cached);
export const CallIcon = iconFactory(IconSVGList.Call);
export const CastIcon = iconFactory(IconSVGList.Cast);
export const CheckCircleIcon = iconFactory(IconSVGList.CheckCircle);
export const CloudDownloadIcon = iconFactory(IconSVGList.CloudDownload);
export const ComputerIcon = iconFactory(IconSVGList.Computer);
export const EmailIcon = iconFactory(IconSVGList.Email);
export const FaceIcon = iconFactory(IconSVGList.Face);
export const FavoriteIcon = iconFactory(IconSVGList.Favorite);
export const GetAppIcon = iconFactory(IconSVGList.GetApp);
export const HeadsetIcon = iconFactory(IconSVGList.Headset);
export const HomeIcon = iconFactory(IconSVGList.Home);
export const ImageIcon = iconFactory(IconSVGList.Image);
export const MicIcon = iconFactory(IconSVGList.Mic);
export const NotificationsIcon = iconFactory(IconSVGList.Notifications);
export const PermIdentityIcon = iconFactory(IconSVGList.PermIdentity);
export const PhotoCameraIcon = iconFactory(IconSVGList.PhotoCamera);
export const QuestionAnswerIcon = iconFactory(IconSVGList.QuestionAnswer);
export const RepeatIcon = iconFactory(IconSVGList.Repeat);
export const RoomIcon = iconFactory(IconSVGList.Room);
export const SearchIcon = iconFactory(IconSVGList.Search);
export const SettingsIcon = iconFactory(IconSVGList.Settings);
export const ShoppingCartIcon = iconFactory(IconSVGList.ShoppingCart);
export const ThumbUpIcon = iconFactory(IconSVGList.ThumbUp);
export const VisibilityIcon = iconFactory(IconSVGList.Visibility);
export const VolumeUpIcon = iconFactory(IconSVGList.VolumeUp);
export const ZoomInIcon = iconFactory(IconSVGList.ZoomIn);
