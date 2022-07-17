import { Card } from 'antd';
import React, { useState } from 'react';
import AllProject from './AllProject';

const tabListNoTitle = [
  {
    key: 'All',
    tab: 'All',
  },
  {
    key: 'Chart',
    tab: 'Chart',
  },
  {
    key: 'Portfolio',
    tab: 'Portfolio',
  }
];
const contentListNoTitle = {
  All:<div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam a accusamus dolorum? Porro enim quo quis praesentium quos, ea quas.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia veritatis delectus nemo asperiores cumque blanditiis quo ab deserunt rem modi?</p>
    </div>
  ,
  Chart: <p>Chart content</p>,
  Portfolio:<h3>My-Portfolio</h3>,
};

const StyleCard = () => {
  const [activeTabKey2, setActiveTabKey2] = useState('Frontend');

  const onTab2Change = (key) => {
    setActiveTabKey2(key);
  };
console.log(activeTabKey2)
  return (
    <>
    <h3>PORTFOLIO</h3>
      <Card
        style={{
          width: '100%',
        }}
        tabList={tabListNoTitle}
        activeTabKey={activeTabKey2}
        tabBarExtraContent={<a href="#">More</a>}
        onTabChange={(key) => {
          onTab2Change(key);
        }}
      >
        {contentListNoTitle[activeTabKey2]}
      </Card>
    </>
  );
};

export default StyleCard;