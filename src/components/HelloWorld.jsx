import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const HelloWorld = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <section
        style={{ fontFamily: "Montserrat" }}
        class=" bg-[#071e34] flex font-medium items-center justify-center h-screen"
      >
        <section class="w-72 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
          <h1 className="text-emerald-400 text-[20px]">Hello World</h1>
          <div class="flex items-center justify-between">
            <span class="text-gray-400 text-sm">2d ago</span>
            <span class="text-emerald-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </span>
          </div>
          <div class="mt-6 w-fit mx-auto">
            <img
              src={
                user.photoURL ||
                "https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
              }
              class="rounded-full w-28 "
              alt="profile picture"
              srcset=""
            />
          </div>

          <div class="mt-8 ">
            <h2 class="text-white font-bold text-2xl tracking-wide">
              {user.displayName || "User"}
            </h2>
          </div>
          <p class="text-emerald-400 font-semibold mt-2.5">{user.email}</p>

          <button
            onClick={handleLogout}
            className="rounded-lg border-2 border-[#34D399] my-4 px-4"
          >
            Logout
          </button>
        </section>
      </section>
    </div>
  );
};

export default HelloWorld;
