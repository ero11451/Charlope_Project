const TabButtons = ({ activeTab, setActiveTab }:{activeTab:string, setActiveTab:(id: string)=>void}) => (
    <div className='difference-two__tab-btns'>
      {[
        { id: 'mission', label: 'Become a volunteer' },
        { id: 'vision', label: 'Become a partner' },
        { id: 'excellence', label: 'Become a member' },
      ].map((tab) => (
        <button
          key={tab.id}
          className={`difference-two__tab-btn ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.id)}
          aria-label={tab.id}
          title={tab.id}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
  
  export default TabButtons;
  