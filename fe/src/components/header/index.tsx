import './index.less';
import { Tag } from 'antd';
import { useState } from 'react';

const { CheckableTag } = Tag;
const Header = () => {
  const menu = ['试卷', '错题'];
  const [selected, setSelected] = useState('');

  const hanleChange = (tag: string) => {
    console.info('hanleChange', tag);
    setSelected(tag);
  };
  return (
    <div className="header-content">
      {menu.map(tag => (
        <CheckableTag
          key={tag}
          checked={selected === tag}
          onChange={() => hanleChange(tag)}>
          {tag}
        </CheckableTag>
      ))}
    </div>
  );
};

export default Header;
