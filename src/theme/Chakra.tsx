import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { FC } from "react";
import theme from "./theme";

interface Props {
  children: React.ReactNode;
}

const Chakra: FC<Props> = ({ children }) => {
  return (
    <ChakraProvider theme={theme.theme}>
      <CSSReset />
      {children}
    </ChakraProvider>
  );
};

export default Chakra;
