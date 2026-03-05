"use client";
import Image from "next/image";

import { SetStateAction, useEffect, useState } from "react";
import PaymentForm from "./payments/PaymentForm";
import { Cause } from "./Admin/CausesList";

const DonateInner = () => {
  const [activeTab, setActiveTab] = useState("vision");
  const [titleSelected, setTitleSelected] = useState<string>("")
  const [causes, setCauses] = useState<Cause<string>[]>([]);
  const fetchCauses = () => {
    fetch("/api/causes").then((res) => res.json()).then((data) => setCauses(data));
    ;
  };

  useEffect(() => {
    fetchCauses();
  }, []);

  const handleChange = (e: { target: { value: SetStateAction<string>; }; } ) => {
    setTitleSelected(e.target.value);
  };

  return (
    <section className='difference-two'>
      <div className='container'>
        <div className='row gutter-40 align-items-center'>

          <div className='col-12 col-lg-8 col-xxl-7'>
            <div className='difference-two__tab'>
              <div className='difference-two__content'>

                <h2 className='title-animation_inner'>
                  Donate <span>Support</span> to Make Difference way
                </h2>

                <div className='difference-two__inner cta'>
                  <div className='difference-two__inner-content'>
                    {/* TABS */}
                    <div className='difference-two__tab'>
                      <div className='difference-two__tab-btns'>
                        <button
                          className={`difference-two__tab-btn  ${activeTab === "mission" ? "active" : ""
                            }`}

                          onClick={() => setActiveTab("mission")}
                          aria-label='mission'
                          title='mission'
                        >
                          international
                        </button>
                        <button
                          className={`difference-two__tab-btn ${activeTab === "vision" ? "active" : ""
                            }`}
                          onClick={() => setActiveTab("vision")}
                          aria-label='vision'
                          title='vision'
                        >
                          Local
                        </button>
                      </div>

                      <div className='difference-two__tab-content'>
                        {activeTab === "mission" && (
                          <div
                            className='difference-two__content-single'
                            id='mission'
                          >

                            <div>
                              <label className="block text-sm font-medium mb-1">
                                Select cause
                              </label>

                              <select
                                value={titleSelected}
                                onChange={handleChange}
                                className="w-full px-3 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black mb-3"
                              >
                                <option value="">Select cause</option>
                                {causes.map((option) => (
                                  <option key={option.title} value={option.title}>
                                    {option.title}
                                  </option>
                                ))}
                              </select>


                            </div>

                            <PaymentForm  title={titleSelected || ""} showBankPay ={false} description={""} onSuccess={() => console.log("")} />
                          </div>
                        )}
                        {activeTab === "vision" && (
                          <div
                            className='difference-two__content-single text-black'
                            id='vision'
                          >
                            <ul>
                              <li>
                                1029630766
                              </li>
                              <li>
                                charlope global charity  foundation
                              </li>
                              <li>
                                UBA account
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>


                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='spade'>
        <Image width={100} height={100} src='https://nextjs.charifund.wowtheme7.com/assets/images/spade-green-two.png' alt='Image_inner' />
      </div>
    </section>

  );
};

export default DonateInner;
