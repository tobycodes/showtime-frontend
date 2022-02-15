import { ReactNode } from "react";

import { View } from "design-system";

type Props = {
  children: ReactNode;
};

export const SettingSubTitle = (props: Props) => {
  const children = props.children;
  return (
    <View tw="flex flex-row justify-between px-4 py-4 items-center">
      {children}
    </View>
  );
};