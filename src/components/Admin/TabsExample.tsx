"use client";

import { useEffect } from "react";
// import "bootstrap/dist/js/bootstrap.bundle.min.js"; // ensure bootstrap is loaded 

type Tab = {
  id: string;
  title: string;
  content: React.ReactNode;
};

interface TabsExampleProps {
  tabs: Tab[];
  defaultActiveId?: string;
}

export default function TabsExample({ tabs = [], defaultActiveId }: TabsExampleProps) {
  useEffect(() => {
    // Initialize Bootstrap tabs AFTER hydration
    if (typeof window !== "undefined") {
      const { Tab } = (window as any).bootstrap || {};
      if (Tab) {
        const triggerTabList = document.querySelectorAll('[data-bs-toggle="tab"]');
        triggerTabList.forEach((triggerEl) => new Tab(triggerEl));
      }
    }
  }, [tabs]);

  // Determine which tab should be active by default
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
              aria-selected={tab.id === activeId ? "true" : "false"}
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
}
