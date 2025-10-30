"use client";

import { useEffect } from "react";

/**
 * Reusable Bootstrap Tabs component
 * @param {Object[]} tabs - Array of tab objects [{ id, title, content }]
 * @param {string} defaultActiveId - ID of the default active tab
 */
export default function TabsExample({ tabs = [], defaultActiveId }:{tabs:any, defaultActiveId:any}) {
  useEffect(() => {
    // Ensure bootstrap JS works after hydration
    if (typeof window !== "undefined" && window.bootstrap) {
      const firstTab = document.querySelector(
        `[data-bs-target="#${defaultActiveId || tabs[0]?.id}"]`
      );
      if (firstTab) new window.bootstrap.Tab(firstTab);
    }
  }, [tabs, defaultActiveId]);

  return (
    <div>
      {/* Tabs Navigation */}
      <ul className="nav nav-tabs" role="tablist">
        {tabs.map((tab:any, index:any) => (
          <li className="nav-item" role="presentation" key={tab.id}>
            <button
              className={`nav-link ${index === 0 ? "active" : ""}`}
              id={`${tab.id}-tab`}
              data-bs-toggle="tab"
              data-bs-target={`#${tab.id}`}
              type="button"
              role="tab"
              aria-controls={tab.id}
              aria-selected={index === 0 ? "true" : "false"}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      {/* Tabs Content */}
      <div className="tab-content mt-3">
        {tabs.map((tab:any, index:any) => (
          <div
            key={tab.id}
            className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
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
