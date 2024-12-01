import dynamic from "next/dynamic";

const ClientFlexRow = dynamic(() => import("./FlexRow"), {
  ssr: false,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FlexRow = (props: any) => {
  return <ClientFlexRow {...props} />;
};

export default FlexRow;
