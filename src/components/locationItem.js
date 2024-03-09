import React from "react";

export default function LocationItem() {
  return (
    <div className="flex flex-col xl:flex-row justify-around items-start h-full  bg-[#222222] w-full p-10  lg:px-60">
      <div className="flex flex-col md:flex-row h-full w-full animate-fade-down">
        <div className="w-full h-full  border-gray-200 rounded p-5 overflow-hidden">
          <h1 className="font-bold text-xl mb-4">美麗華本店</h1>
          <div className="w-full h-80 bg-gray-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2555.086358626456!2d121.55700570797525!3d25.087037982591358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac13a461c1b9%3A0x23db7e5e8f8274ee!2z6KOV5r-g5bCP6aSoIOe-jum6l-iPr-W6lw!5e0!3m2!1szh-TW!2stw!4v1710001445821!5m2!1szh-TW!2stw"
              className="border w-full h-full"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="w-full h-full rounded  p-5 overflow-auto">
          <h1 className="font-bold text-xl mb-4">店舖資訊</h1>
          <h2>地址:</h2>
          <p>台北市中山區北安路823號</p>
          <br />

          <h2>營業時間：</h2>
          <p>
            每日早上 <strong>10:00</strong> 至晚上 <strong>20:30</strong>
          </p>
          <br />
          <h2>外送服務：</h2>
          <p>
            我們提供便當外送服務，凡訂購 <strong>五個便當以上</strong>
            ，即可享受到家的便利。
          </p>
          <p>
            我們期待您的光臨，並希望能為您的日常帶來美味的享受。如有任何疑問，歡迎隨時聯繫我們。
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row h-full w-full animate-fade-down">
        <div className="w-full h-full  border-gray-200 rounded p-5 overflow-hidden">
          <h1 className="font-bold text-xl mb-4">大直總店</h1>
          <div className="w-full h-80 bg-gray-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28908.418456140113!2d121.53811752346738!3d25.08315877273027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac05d2b11983%3A0x7f5ea6d6f8d3844f!2z6KOV5r-g5bCP6aSo77yI5aSn55u057i95bqX77yJ!5e0!3m2!1szh-TW!2stw!4v1710002790743!5m2!1szh-TW!2stw"
              className="border w-full h-full"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="w-full h-full rounded  p-5 overflow-auto">
          <h1 className="font-bold text-xl mb-4">店舖資訊</h1>
          <h2>地址:</h2>
          <p>台北市中山區北安路823號</p>
          <br />

          <h2>營業時間：</h2>
          <p>
            每日早上 <strong>10:30</strong> 至晚上 <strong>20:30</strong>
          </p>
          <br />
          <h2>外送服務：</h2>
          <p>
            我們提供便當外送服務，凡訂購 <strong>五個便當以上</strong>
            ，即可享受到家的便利。
          </p>
          <p>
            我們期待您的光臨，並希望能為您的日常帶來美味的享受。如有任何疑問，歡迎隨時聯繫我們。
          </p>
        </div>
      </div>
    </div>
  );
}
