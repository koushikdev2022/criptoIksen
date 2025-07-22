'use client';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getProfile } from "../reducers/ProfileSlice";
import { useForm } from "react-hook-form";
import { Label, TextInput } from "flowbite-react";

const page = () => {
    const dispatch = useDispatch()
    const { profileData } = useSelector((state) => state?.profile)
    const {
        register,
        handleSubmit,
        watch,
        control,
        setValue,
        formState: { errors },
    } = useForm();
    useEffect(() => {
        dispatch(getProfile())
    }, [])
    console.log("profileData", profileData)

    useEffect(() => {
        setValue("first_name", profileData?.data?.fullname)
        setValue("email", profileData?.data?.email)
        setValue("username", profileData?.data?.username)
    }, [profileData?.data])
    return (
        <>
            <div>
                <div>

                    <div className="bg-white rounded-2xl p-10 mb-4 flex gap-10">
                        <div className="w-8/12">
                            <div className="account_setting_section">
                                <h2 className="text-3xl font-semibold pb-0">Account Details</h2>
                                <div>
                                    <form >
                                        <div className="pt-6">
                                            <div className="common-section-box-content">
                                                <div className="lg:flex gap-8 mb-4">
                                                    <div className="account_user_section w-8/12 lg:w-4/12 mb-2 lg:mb-0">
                                                        {/* {profileData?.userDetails?.avatar !== null ? (
                            <img
                              src={
                                profileData?.base +
                                "/" +
                                profileData?.userDetails?.avatar
                              }
                              alt="Profile Preview"
                              className="object-cover w-full h-full rounded-lg"
                            />
                          ) : (
                            <img
                              src={photorealisticImage}
                              alt="Profile Preview"
                              className="object-cover w-full h-full rounded-lg"
                            />
                          )} */}
                                                        {/* <div className="absolute right-1 top-1">
                                                            <button
                                                                type="button"
                                                                className="bg-white p-2 rounded-full shadow-md text-[#757575] hover:bg-[#ff1a03] hover:text-white"
                                                            >
                                                                <FileInput
                                                                    className="absolute opacity-0 h-3 w-5 border border-black"
                                                                    id="file"
                                                                    accept="image/*"
                                                                    onChange={handleFileChange}
                                                                />
                                                                <MdEdit className="text-xl" />
                                                            </button>
                                                        </div> */}
                                                        &nbsp;
                                                    </div>
                                                </div>
                                                <div className="lg:flex gap-6 mb-3">
                                                    <div className="w-full lg:w-6/12">
                                                        <div className="mb-1 block">
                                                            <Label className="!text-black">First Name </Label>
                                                        </div>
                                                        <TextInput
                                                            id="base"
                                                            type="text"
                                                            sizing="md"
                                                            className="!bg-white !text-black"
                                                            {...register("first_name")}
                                                        />
                                                    </div>
                                                    <div className="w-full lg:w-6/12">
                                                        <div className="mb-1 block">
                                                            <Label className="!text-black">User Name </Label>
                                                        </div>
                                                        <TextInput
                                                            id="base"
                                                            type="text"
                                                            sizing="md"
                                                            {...register("username")}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="lg:flex gap-6 mb-3">
                                                    <div className="w-full lg:w-6/12">
                                                        <div className="mb-1 block">
                                                            <Label className="!text-black">
                                                                Email <span className="text-[#ff1a03]"></span>
                                                            </Label>
                                                        </div>
                                                        <TextInput
                                                            id="base"
                                                            type="text"
                                                            sizing="md"
                                                            required
                                                            {...register("email")}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="lg:flex gap-6 mb-3">
                                                    {/* <div className="w-full lg:w-6/12">
                          <div className="mb-1 block">
                            <Label>
                              Youtube Access Key{" "}
                              <span className="text-[#ff1a03]"></span>
                            </Label>
                          </div>
                          <TextInput
                            id="base"
                            type="text"
                            sizing="md"
                            required
                            {...register("access_key")}
                          />
                        </div> */}
                                                    {/* <div className="w-full lg:w-6/12">
                          <div className="mb-1 block">
                            <Label>
                              Youtube Secret Key{" "}
                              <span className="text-[#ff1a03]"></span>
                            </Label>
                          </div>
                          <TextInput
                            id="base"
                            type="text"
                            sizing="md"
                            required
                            {...register("secret_key", {})}
                          />
                        </div> */}
                                                </div>

                                                {/* <div className="gap-4 my-6">
                        <button
                          type="submit"
                          className="bg-[#626adf] text-white hover:bg-[#1a9bd9] px-7 py-2 rounded-md text-base font-medium"
                        >
                          Save
                        </button>
                      </div> */}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="w-4/12">
                            {/* <div className="account_setting_section">
              <h2 className="text-3xl font-semibold pb-0">Update password</h2>
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="pt-6">
                    <div className="common-section-box-content">
                      <div className="">
                        <div className="w-full mb-3">
                          <div className="mb-1 block">
                            <Label>Old Password</Label>
                          </div>
                          <TextInput type="password" sizing="md" />
                        </div>
                        <div className="w-full mb-3">
                          <div className="mb-1 block">
                            <Label>New Password</Label>
                          </div>
                          <TextInput type="password" sizing="md" />
                        </div>
                        <div className="w-full mb-3">
                          <div className="mb-1 block">
                            <Label>Confirm Password</Label>
                          </div>
                          <TextInput type="password" sizing="md" />
                        </div>
                      </div>
                      <div className="gap-4 my-6">
                        <button
                          type="submit"
                          className="bg-[#626adf] text-white hover:bg-[#1a9bd9] px-7 py-2 rounded-md text-base font-medium"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              
            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default page