import HowItWorksSection from "./HowItWorksSection";

export default function PerformanceLogic() {
  return (
    <HowItWorksSection
      title="Performance Logic"
      intro="Performance rewards within Zryoss are strictly tied to real business value delivery, not recruitment or referrals."
      steps={[
        {
          title: "Closed Business",
          desc: "Value is generated only when a client deal is successfully closed."
        },
        {
          title: "Service Delivery",
          desc: "Payments are linked to actual service execution."
        },
        {
          title: "Performance-Based Share",
          desc: "Partners earn based on contribution and delivery success."
        }
      ]}
    />
  );
}
