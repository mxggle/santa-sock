import React, { useState } from 'react';
import { useFileUpload } from 'use-file-upload';
import type { FileUpload } from 'use-file-upload';
import avatar from './assets/avatar.jpg';
import Snow from './components/snow';
import { DEFAULT_GIFT_IMG_URL, DEFAULT_GIFT_PAGE_URL } from './utils/constants';

import './App.css';

const UPLOAD_OPTS = {
  accept: 'image/*',
  multiple: false
};
const noop = () => {};

const gitFileSourceStr = (file: FileUpload | [FileUpload]): string => {
  if (!file) return '';
  if (Array.isArray(file)) {
    // 暂时取第一个
    return file?.[0].source.toString();
  }
  return file?.source.toString();
};

function App() {
  const [name, setName] = useState('simboss');
  const [desc, setDesc] = useState('Merry Christmas');
  const [avatarFile, selectAvatarFile] = useFileUpload();
  const [giftFile, selectGiftFile] = useFileUpload();
  const [count, setCount] = useState(+(Math.random() * 200 + 200).toFixed(0));
  const [giftUrl, setGiftUrl] = useState(DEFAULT_GIFT_PAGE_URL);

  return (
    <div className="container">
      <Snow count={count} />
      <div className="sock-block">
        <div className="top">
          <img
            className="gift"
            onClick={() => window.open(giftUrl)}
            src={gitFileSourceStr(giftFile) || DEFAULT_GIFT_IMG_URL}
            alt=""
          />
          <div className="top-bg" />
          <div className="avatar-name">
            <div className="avatar">
              <img
                width={'100%'}
                height={'100%'}
                src={gitFileSourceStr(avatarFile) || avatar}
                alt=""
                style={{ objectFit: 'cover' }}
              />
            </div>
            {name && <div className="name">{name}</div>}
          </div>
        </div>
        <div className="middle">
          {desc && <div className="middle-text">{desc}</div>}
        </div>
        <div className="bottom" />
        <div className="toe" />
      </div>
      <div className="control-block">
        <div className="control-item">
          <span className="control-label">昵称</span>
          <input
            type="text"
            className="control-name"
            placeholder="输入昵称"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="control-item">
          <span className="control-label">文案</span>
          <input
            type="text"
            className="control-desc"
            value={desc}
            placeholder="输入文案"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="control-item">
          <span className="control-label">链接</span>
          <input
            type="text"
            className="control-desc"
            value={giftUrl}
            placeholder="礼物链接"
            onChange={(e) => setGiftUrl(e.target.value)}
          />
        </div>
        <div className="control-item">
          <span className="control-label">头像</span>
          <button
            onClick={() => {
              selectAvatarFile(UPLOAD_OPTS, noop);
            }}
          >
            点击上传
          </button>
        </div>
        <div className="control-item">
          <span className="control-label">礼物</span>
          <button
            onClick={() => {
              selectGiftFile(UPLOAD_OPTS, noop);
            }}
          >
            点击上传
          </button>
        </div>
        <div className="control-item">
          <button
            className="snow-btn"
            onClick={() => {
              setCount(200);
            }}
          >
            小雪
          </button>
          <button
            className="snow-btn"
            onClick={() => {
              setCount(300);
            }}
          >
            中雪
          </button>
          <button
            className="snow-btn"
            onClick={() => {
              setCount(800);
            }}
          >
            大雪
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
