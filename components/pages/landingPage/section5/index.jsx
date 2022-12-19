import { SimpleGrid, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const list = [
  {
    Name: "Members",
    ImageUrl: "/assets/LandingPage/Section5_1/Members.svg",
    Value: "15K+",
  },
  {
    Name: "Technical Events",
    ImageUrl: "/assets/LandingPage/Section5_1/Organizations.svg",
    Value: "250+",
  },
  {
    Name: "Institutes",
    ImageUrl: "/assets/LandingPage/Section5_1/Institutes.svg",
    Value: "100+",
  },
  {
    Name: "Organization",
    ImageUrl: "/assets/LandingPage/Section5_1/Industry.svg",
    Value: "50+",
  },
];

export default function Section5() {
  const matches = useMediaQuery("(min-width: 900px)");
  return (
    <div className="  ec-w-full ec-items-center ec-justify-center ec-flex ec-p-5 lg:!ec-p-10 ec-flex-col ec-gap-7">
      <div className=" ec-flex ec-flex-col ec-items-center ec-justify-center ec-gap-2 md:!ec-gap-5">
        <Title className=" sm:!ec-text-3xl lg:!ec-text-5xl ec-text-xl ec-font-bold ec-text-center lg:!ec-text-left ">
          Some{" "}
          <span
            span
            className="ec-text-transparent ec-bg-clip-text ec-bg-gradient-to-r ec-from-[#0065CF] ec-to-[#1FAE8C]"
          >
            Count
          </span>{" "}
          that Matters
        </Title>
        <Text className=" ec-font-medium md:ec-text-2xl ec-text-center">
          Our achievement in the journey depicted in numbers
        </Text>
      </div>
      <SimpleGrid
        breakpoints={[
          { maxWidth: 755, cols: 3, spacing: "sm" },
          { maxWidth: 600, cols: 2, spacing: "sm" },
        ]}
        cols={4}
        spacing="0"
        className="ec-min-w-[80%]"
      >
        {list.map((item, index) => (
          <div
            key={index}
            className="ec-w-full ec-flex ec-items-center ec-justify-evenly ec-gap-4"
          >
            <div className=" ec-w-full ec-flex ec-flex-col ec-gap-2 ec-items-center">
              <div className="ec-flex ec-items-center ec-justify-center ec-overflow-hidden ">
                <img
                  src={item?.ImageUrl}
                  alt="image"
                  className="ec-aspect-square ec-w-24 ec-h-24"
                />
              </div>
              <Title className=" sm:!ec-text-3xl lg:!ec-text-5xl ec-text-xl ec-font-medium ec-text-center  lg:!ec-text-left ">
                {item?.Value}
              </Title>
              <div className="ec-w-full ec-flex ec-items-center ec-justify-center ec-flex-col ec-gap-2">
                <Text className=" ec-font-medium md:ec-text-xl">
                  {item?.Name}
                </Text>
              </div>
            </div>
            {matches && index !== list.length - 1 && (
              <div className=" ec-w-1 ec-h-1/2 ec-rounded-full ec-bg-[#47f2c9]" />
            )}
          </div>
        ))}
      </SimpleGrid>
    </div>
  );
}
