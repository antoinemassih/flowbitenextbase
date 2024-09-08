import MyGradientHeading from "@/components/typography/heading/MyGradientHeading";

export default function AboutPage() {
  return (
    <div className="p-6">

      <MyGradientHeading regularText = "whatcha doing" gradientText="Hey Bro"/>
      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">i think you should be focusing on whats happening today.</p>

    </div>
  );
}
