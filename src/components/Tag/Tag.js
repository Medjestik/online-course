import React from 'react';
import './Tag.css';

function Tag({ tags }) {

  function renderTag(tag) {
    switch(tag) {
  
      case 'history':
        return 'история';

      case 'transport':
        return 'транспорт';

      case 'technology':
        return 'технологии';

      case 'management':
        return 'менеджмент';

      case 'economy':
        return 'экономика';

      default:
        return tag;
    }
  }

  
  return (
    <>
    {
      tags.map((tag, i) => (
        <li key={i} className={`tag tag_type_${tag}`}>
          {renderTag(tag)}
        </li>
      ))
    }
    </>
  );
}

export default Tag; 