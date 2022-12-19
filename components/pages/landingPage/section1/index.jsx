import MainHeader from "@components/common/header/MainHeader";
import {
  Button,
  Image,
  Text,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { useRouter } from "next/router";
import { RocketLaunch } from "phosphor-react";
import { useState } from "react";

export default function Section1() {
  const [opened, setOpened] = useState(false);
  const handleBurgerClick = () => {
    setOpened(!opened);
  };
  const router = useRouter();
  return (
    <div
      style={{
        backgroundImage: `url('/assets/LandingPage/Hero1_2/Section1_BG.svg')`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className=" ec-flex ec-flex-col ec-items-center ec-justify-center ec-w-full"
    >
      <MainHeader
        menu={false}
        opened={opened}
        handleBurgerClick={handleBurgerClick}
      />
      <div className=" ec-min-w-[90%] ec-p-5 lg:!ec-p-10 sm:!ec-flex-row ec-flex ec-flex-col  ec-gap-2">
        <div className="ec-w-full ec-flex ec-flex-col ec-items-center sm:!ec-items-start ec-gap-3 lg:ec-gap-14 ec-justify-center">
          <Title className=" sm:ec-text-3xl lg:ec-text-5xl xl:ec-text-7xl ec-text-center sm:!ec-text-left ec-flex ec-flex-col xl:ec-gap-10 ec-gap-2  ">
            <div>
              An <span className=" ec-text-yellow-500">Ecosystem</span>
            </div>
            <div>
              build for <span className=" ec-text-yellow-500">Engineers</span>
            </div>
          </Title>
          <Text className=" ec-font-medium md:ec-text-xl md:ec-w-[80%] ec-text-center md:!ec-text-left">
            Transforming the way how engineers connect, collaborate and grow
            along their career trajectory. Enabling country to build better
            quality engineers.
          </Text>
          <Button
            className=" ec-w-1/3 ec-rounded-full ec-font-medium md:ec-text-xl ec-h-12"
            rightIcon={<RocketLaunch />}
            onClick={() =>
              router.push(`https://beta.engineerscradle.com/register/`)
            }
          >
            Join Beta
          </Button>
        </div>
        <div className=" ec-w-full ec-flex ec-items-center ec-justify-center ec-p-3">
          <Image src="/assets/LandingPage/Hero1_2/Section1_2.svg" />
        </div>
      </div>
    </div>
  );
}
