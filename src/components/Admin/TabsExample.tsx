"use client";

import { useEffect } from "react";

// Type for each tab
type TabType = {
  id: string;
  title: string;
  content: React.ReactNode;
};

// Props for the component
interface TabsExampleProps {
  tabs: TabType[];
  defaultActiveId?: string;
}

// Minimal Bootstrap Tab type definition
interface BootstrapTab {
  new (element: Element): BootstrapTabInstance;
}

interface BootstrapTabInstance {
  show: () => void;
}

// Extend the window type
declare global {
  interface Window {
    bootstrap?: {
      Tab: BootstrapTab;
    };
  }
}

const TabsExample: React.FC<TabsExampleProps> = ({ tabs = [], defaultActiveId }) => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.bootstrap?.Tab) {
      const triggerTabList = document.querySelectorAll<HTMLElement>('[data-bs-toggle="tab"]');

      triggerTabList.forEach((triggerEl) => {
        // Create a Bootstrap Tab instance for each trigger element
        new window.bootstrap!.Tab(triggerEl);
      });
    }
  }, [tabs]);

  const activeId = defaultActiveId || (tabs.length > 0 ? tabs[0].id : "");

  return (
    <div suppressHydrationWarning>
      {/* Tab Navigation */}
      <ul className="nav nav-tabs" role="tablist">
        {tabs.map((tab) => (
          <li className="nav-item" role="presentation" key={tab.id}>
            <button
              className={`nav-link ${tab.id === activeId ? "active" : ""}`}
              id={`${tab.id}-tab`}
              data-bs-toggle="tab"
              data-bs-target={`#${tab.id}`}
              type="button"
              role="tab"
              aria-controls={tab.id}
              aria-selected={tab.id === activeId}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      <div className="tab-content mt-3">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab-pane fade ${tab.id === activeId ? "show active" : ""}`}
            id={tab.id}
            role="tabpanel"
            aria-labelledby={`${tab.id}-tab`}
          >
            <div className="card card-body">{tab.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabsExample;
