"use client";
import Image from "next/image";


// import Link from "next/link";
import { useState } from "react";
import FlutterWavePayButton from "./payments/FlutterWavePayButton";
import { FlutterWaveButton } from "flutterwave-react-v3";
import { useForm } from "react-hook-form";
import { FlutterWaveResponse } from "flutterwave-react-v3/dist/types";

const DonateInner = () => {
  // let [amount, setAmount] = useState(50);
  // const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("vision");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();


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
                {/* <p>
                Charity is the voluntary act of giving help, typically in
                the form of money, time, or resources, to those in need.
                Charitable organizations aim to solve social, environmental,
                and economic challenges by addressing issues like poverty,
              </p> */}

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
                            <ul>
                              <li>
                                <div className='volunteer__form-content'>
                                  {/* <h4 className='title-animation_inner'>Fill Up The Form</h4> */}
                                  <p>Your email address will not be published. Required fields are marked *</p>

                                  <form  >
                                    <div>
                                      <label className="block text-sm font-medium ">
                                        Name
                                      </label>
                                      <input
                                        {...register("name", { required: "Name is required" })} type="text" id="email"
                                        className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                                        required
                                      />
                                    </div>

                                    <div>
                                      <label className="block text-sm font-medium my-2">
                                        Email
                                      </label>
                                      <input
                                        type="email"

                                        {...register("email", {
                                          required: "Email is required",
                                          pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: "Invalid email format",
                                          },
                                        })}
                                        className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                                        required
                                      />
                                    </div>

                                    <div>
                                      <label className="block text-sm font-medium mb-1">
                                        Amount
                                      </label>
                                      <input
                                        type="number"
                                        min={1}
                                        {...register("amount", { required: "amount is required" })}
                                        className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                                        required
                                      />
                                    </div>

                                    {error && (
                                      <p className="text-sm text-red-600 bg-red-50 p-2 rounded-lg my-2">
                                        {error}
                                      </p>
                                    )}

                                  

                                    <div className='form-cta'>
                                      <button
                                        type='submit'
                                        aria-label='submit message'
                                        title='submit message'
                                        className='btn--primary mt-4'
                                      >
                                       Pay now<i className='fa-solid fa-arrow-right' />
                                      </button>
                                    </div>
                                  </form>
                                </div>


                              </li>
                            </ul>
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
