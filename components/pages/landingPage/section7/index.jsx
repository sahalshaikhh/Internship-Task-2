import { Image, Text, Title } from "@mantine/core";
import { useRouter } from "next/router";

export default function Section7() {
  const router = useRouter();
  return (
    <div className="  ec-w-full ec-mb-40 ec-items-center ec-justify-center ec-flex ec-p-5 lg:!ec-p-10 ec-flex-col ec-gap-4">
      <div
        className={` ec-bg-[#151E31] ec-max-w-[80%] ec-w-full ec-flex ec-items-center ec-flex-col sm:!ec-flex-row ec-justify-center ec-p-5  ec-rounded-3xl ec-gap-2 ec-h-[400px]`}
      >
        <div className="ec-hidden lg:ec-flex ec-h-full ec-w-full lg:!ec-w-[20%] ec-items-center ec-justify-center ec-p-3 ">
          <img
            src="/assets/LandingPage/Hero7/EC_Hero7_1.svg"
            fit="cover"
            className=" ec-w-full ec-h-full"
          />
        </div>
        <div className=" ec-flex-1 ec-flex ec-flex-col ec-gap-5 ec-items-center ec-justify-center">
          <Title className=" sm:!ec-text-3xl lg:!ec-text-4xl ec-text-xl ec-text-center  ec-text-white">
            “Be the change you want to see”
          </Title>
          <Text className="  sm:!ec-text-lg lg:!ec-text-xl ec-text-md ec-font-medium ec-w-full ec-text-center">
            Be part of this change. Join out waitlist today and get early bird
            offers with the product.
          </Text>
          <div className=" ec-flex  ec-gap-2 ec-w-[90%] ">
            <div
              variant="unstyled"
              onClick={() => {
                router.push("https://t.me/+MFcjRlDqLv8yYTdk");
              }}
              className=" ec-cursor-pointer ec-w-full ec-px-2 ec-py-5 ec-flex ec-items-center ec-gap-2 ec-justify-center ec-rounded-full ec-bg-[#1976d2] hover:ec-bg-[#008cff] ec-text-black ec-font-bold"
            >
              <Image
                className=" ec-aspect-square ec-w-5"
                src="https://img.icons8.com/color/48/undefined/telegram-app--v1.png"
              />
              <Text color="white">Telegram</Text>
            </div>
            <div
              variant="unstyled"
              onClick={() => {
                router.push("https://discord.gg/2KPSP9Ft");
              }}
              className=" ec-cursor-pointer ec-w-full ec-px-2 ec-py-5 ec-flex ec-items-center ec-gap-2 ec-justify-center ec-rounded-full ec-bg-indigo-500 hover:ec-bg-indigo-600 ec-text-black ec-font-bold"
            >
              <Image
                className=" ec-aspect-square ec-w-5"
                src="https://img.icons8.com/ios-filled/500/ffffff/discord-logo.png"
              />
              <Text color="white">Discord</Text>
            </div>
          </div>
        </div>
        <div className=" ec-hidden lg:ec-flex ec-h-full ec-w-full lg:!ec-w-[20%] ec-items-center ec-justify-center ec-p-3 ">
          <img
            src="/assets/LandingPage/Hero7/EC_Hero7_2.svg"
            fit="cover"
            className=" ec-w-full ec-h-full"
          />
        </div>
      </div>
    </div>
  );
}
