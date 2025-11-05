import MemberForm from './MemberForm';

const TabContent = ({ activeTab }:{activeTab:string}) => (
  <div className='difference-two__tab-content'>
    {activeTab === 'mission' && (
      <div className='difference-two__content-single' id='mission'>
        <ul><li>Volunteer information goes here</li></ul>
      </div>
    )}
    {activeTab === 'vision' && (
      <div className='difference-two__content-single' id='vision'>
        <ul><li>Partner information goes here</li></ul>
      </div>
    )}
    {activeTab === 'excellence' && (
      <div className='difference-two__content-single' id='excellence'>
        <ul><li><MemberForm /></li></ul>
      </div>
    )}
  </div>
);

export default TabContent;
