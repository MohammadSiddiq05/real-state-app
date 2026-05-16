import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import UploadWidget from "../../components/uploadWidget/UploadWidget";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    title: z.string().min(3, "Title is required"),

    price: z.coerce
        .number()
        .min(1, "Price is required"),

    address: z.string().min(3),

    city: z.string().min(2),

    bedroom: z.coerce.number().min(1),

    bathroom: z.coerce.number().min(1),

    latitude: z.string(),

    longitude: z.string(),

    type: z.string(),

    property: z.string(),

    utilities: z.string(),

    pet: z.string(),

    income: z.string(),

    size: z.coerce.number().min(0),

    school: z.coerce.number().min(0),

    bus: z.coerce.number().min(0),

    restaurant: z.coerce.number().min(0),

    desc: z.string().min(10),
});

const NewPostPage = () => {
    const [images, setImages] = useState([]);
    const [serverError, setServerError] =
        useState("");

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(schema),

        defaultValues: {
            type: "rent",
            property: "apartment",
            utilities: "owner",
            pet: "allowed",
            desc: "",
        },
    });

    const onSubmit = async (data) => {
        try {
            const res = await apiRequest.post(
                "/post",
                {
                    postData: {
                        title: data.title,
                        price: data.price,
                        address: data.address,
                        city: data.city,
                        bedroom: data.bedroom,
                        bathroom: data.bathroom,
                        type: data.type,
                        property: data.property,
                        latitude: data.latitude,
                        longitude: data.longitude,
                        images,
                    },

                    postDetail: {
                        desc: data.desc,
                        utilities: data.utilities,
                        pet: data.pet,
                        income: data.income,
                        size: data.size,
                        school: data.school,
                        bus: data.bus,
                        restaurant: data.restaurant,
                    },
                }
            );

            navigate("/" + res.data.id);
        }  catch (err) {
            console.log("FULL ERROR:", err);

            console.log(
                "BACKEND ERROR:",
                err.response?.data
            );

            setServerError(
                err.response?.data?.message ||
                "Something went wrong"
            );
        }
};

return (
    <div
        className="
            flex
            flex-col-reverse
            lg:flex-row
            h-full
        "
    >
        {/* LEFT */}
        <div
            className="
            flex-[3]
            overflow-y-auto
            pb-20
            "
        >
            <div className="pr-0 lg:pr-10">
                <h1
                    className="
                text-3xl
                font-bold
                mb-8
                "
                >
                    Add New Post
                </h1>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="
                grid
                grid-cols-1
                md:grid-cols-2
                xl:grid-cols-3
                gap-5
                "
                >
                    {/* TITLE */}
                    <div className="flex flex-col gap-2">
                        <label>Title</label>

                        <input
                            type="text"
                            {...register("title")}
                            className="
                    p-4
                    rounded-md
                    border
                    border-gray-300
                    outline-none
                    focus:border-teal-500
                    "
                        />

                        {errors.title && (
                            <p className="text-red-500 text-sm">
                                {errors.title.message}
                            </p>
                        )}
                    </div>

                    {/* PRICE */}
                    <div className="flex flex-col gap-2">
                        <label>Price</label>

                        <input
                            type="number"
                            {...register("price")}
                            className="
                    p-4
                    rounded-md
                    border
                    border-gray-300
                    "
                        />

                        {errors.price && (
                            <p className="text-red-500 text-sm">
                                {errors.price.message}
                            </p>
                        )}
                    </div>

                    {/* ADDRESS */}
                    <div className="flex flex-col gap-2">
                        <label>Address</label>

                        <input
                            type="text"
                            {...register("address")}
                            className="
                    p-4
                    rounded-md
                    border
                    border-gray-300
                    "
                        />
                    </div>

                    {/* CITY */}
                    <div className="flex flex-col gap-2">
                        <label>City</label>

                        <input
                            type="text"
                            {...register("city")}
                            className="
                    p-4
                    rounded-md
                    border
                    border-gray-300
                    "
                        />
                    </div>

                    {/* BEDROOM */}
                    <div className="flex flex-col gap-2">
                        <label>Bedroom</label>

                        <input
                            type="number"
                            {...register("bedroom")}
                            className="
                    p-4
                    rounded-md
                    border
                    border-gray-300
                    "
                        />
                    </div>

                    {/* BATHROOM */}
                    <div className="flex flex-col gap-2">
                        <label>Bathroom</label>

                        <input
                            type="number"
                            {...register("bathroom")}
                            className="
                    p-4
                    rounded-md
                    border
                    border-gray-300
                    "
                        />
                    </div>

                    {/* LAT */}
                    <div className="flex flex-col gap-2">
                        <label>Latitude</label>

                        <input
                            type="text"
                            {...register("latitude")}
                            className="
                    p-4
                    rounded-md
                    border
                    border-gray-300
                    "
                        />
                    </div>

                    {/* LNG */}
                    <div className="flex flex-col gap-2">
                        <label>Longitude</label>

                        <input
                            type="text"
                            {...register("longitude")}
                            className="
                    p-4
                    rounded-md
                    border
                    border-gray-300
                    "
                        />
                    </div>

                    {/* TYPE */}
                    <div className="flex flex-col gap-2">
                        <label>Type</label>

                        <select
                            {...register("type")}
                            className="
                    p-4
                    rounded-md
                    border
                    border-gray-300
                    "
                        >
                            <option value="rent">
                                Rent
                            </option>

                            <option value="buy">
                                Buy
                            </option>
                        </select>
                    </div>

                    {/* PROPERTY */}
                    <div className="flex flex-col gap-2">
                        <label>Property</label>

                        <select
                            {...register("property")}
                            className="
                    p-4
                    rounded-md
                    border
                    border-gray-300
                    "
                        >
                            <option value="apartment">
                                Apartment
                            </option>

                            <option value="house">
                                House
                            </option>

                            <option value="condo">
                                Condo
                            </option>

                            <option value="land">
                                Land
                            </option>
                        </select>
                    </div>

                    {/* UTILITIES */}
                    <div className="flex flex-col gap-2">
                        <label>Utilities</label>

                        <select
                            {...register("utilities")}
                            className="
                    p-4
                    rounded-md
                    border
                    border-gray-300
                    "
                        >
                            <option value="owner">
                                Owner Responsible
                            </option>

                            <option value="tenant">
                                Tenant Responsible
                            </option>

                            <option value="shared">
                                Shared
                            </option>
                        </select>
                    </div>

                    {/* PET */}
                    <div className="flex flex-col gap-2">
                        <label>Pet Policy</label>

                        <select
                            {...register("pet")}
                            className="
                    p-4
                    rounded-md
                    border
                    border-gray-300
                    "
                        >
                            <option value="allowed">
                                Allowed
                            </option>

                            <option value="not-allowed">
                                Not Allowed
                            </option>
                        </select>
                    </div>

                    {/* INCOME */}
                    <div className="flex flex-col gap-2">
                        <label>Income Policy</label>

                        <input
                            type="text"
                            {...register("income")}
                            className="
                    p-4
                    rounded-md
                    border
                    border-gray-300
                    "
                        />
                    </div>

                    {/* SIZE */}
                    <div className="flex flex-col gap-2">
                        <label>Size</label>

                        <input
                            type="number"
                            {...register("size")}
                            className="
                    p-4
                    rounded-md
                    border
                    border-gray-300
                    "
                        />
                    </div>

                    {/* SCHOOL */}
                    <div className="flex flex-col gap-2">
                        <label>School</label>

                        <input
                            type="number"
                            {...register("school")}
                            className="
                    p-4
                    rounded-md
                    border
                    border-gray-300
                    "
                        />
                    </div>

                    {/* BUS */}
                    <div className="flex flex-col gap-2">
                        <label>Bus</label>

                        <input
                            type="number"
                            {...register("bus")}
                            className="
                    p-4
                    rounded-md
                    border
                    border-gray-300
                    "
                        />
                    </div>

                    {/* RESTAURANT */}
                    <div className="flex flex-col gap-2">
                        <label>Restaurant</label>

                        <input
                            type="number"
                            {...register("restaurant")}
                            className="
                    p-4
                    rounded-md
                    border
                    border-gray-300
                    "
                        />
                    </div>

                    {/* DESCRIPTION */}
                    <div
                        className="
        md:col-span-2
        xl:col-span-3
        flex
        flex-col
        gap-2
    "
                    >
                        <label className="font-medium">
                            Description
                        </label>

                        <div className="bg-white rounded-md overflow-hidden border border-gray-300">
                            <Controller
                                name="desc"
                                control={control}
                                render={({ field }) => (
                                    <ReactQuill
                                        theme="snow"
                                        value={field.value}
                                        onChange={field.onChange}
                                        className="h-[250px] mb-12"
                                    />
                                )}
                            />
                        </div>

                        {errors.desc && (
                            <p className="text-red-500 text-sm">
                                {errors.desc.message}
                            </p>
                        )}
                    </div>

                    {/* ERROR */}
                    {serverError && (
                        <p
                            className="
        text-red-500
        text-sm
        md:col-span-2
        xl:col-span-3
        "
                        >
                            {serverError}
                        </p>
                    )}

                    {/* BUTTON CONTAINER */}
                    <div
                        className="
        md:col-span-2
        xl:col-span-3
        flex
        justify-end
        mt-10
    "
                    >
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="
        w-full
        md:w-[220px]
        p-4
        rounded-xl
        bg-teal-600
        text-white
        font-bold
        hover:bg-teal-700
        transition-all
        duration-300
        disabled:bg-teal-300
        shadow-md
        "
                        >
                            {isSubmitting
                                ? "Creating..."
                                : "Add Post"}
                        </button>
                    </div>
                </form>
            </div>
        </div>

        {/* RIGHT */}
        <div
            className="
            flex-[2]
            bg-[#fcf5f3]
            flex
            flex-col
            items-center
            justify-center
            gap-5
            py-10
            px-5
            "
        >
            <div
                className="
                flex
                flex-wrap
                gap-4
                justify-center
            "
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt=""
                        className="
                    w-[180px]
                    h-[140px]
                    object-cover
                    rounded-lg
                    shadow-md
                "
                    />
                ))}
            </div>

            <UploadWidget
                uwConfig={{
                    multiple: true,
                    cloudName:
                        "MERNInstaFeedClone",
                    uploadPreset: "realstate",
                    folder: "posts",
                }}
                setAvatar={setImages}
            />
        </div>
    </div>
);
    }

export default NewPostPage;