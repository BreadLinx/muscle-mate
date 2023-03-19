import styled from "styled-components";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { motion, AnimatePresence } from "framer-motion";
import { useState, FC, useEffect, useMemo } from "react";

interface StyledInputWrapperProps {
  bordersVisibility?: boolean;
}

const StyledInputWrapper = styled.div`
  background-color: #414141;
  width: 100%;
  height: 30px;

  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: ${({
    bordersVisibility,
  }: StyledInputWrapperProps) => (bordersVisibility ? "10px" : 0)};
  border-bottom-left-radius: ${({
    bordersVisibility,
  }: StyledInputWrapperProps) => (bordersVisibility ? "10px" : 0)};

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 10px;

  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
  position: relative;
`;

const StyledExpandLessIcon = styled(ExpandLessIcon)`
  color: #7c7c7c !important;
  & path {
    color: #7c7c7c !important;
  }
`;

const StyledInput = styled.input`
  outline: none;
  color: #ffffff;
  background-color: initial;
  border: 0;
  font-family: "Inter";
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0;
  text-align: left;
  height: 100%;
  width: 100%;
  cursor: pointer;
  &::placeholder {
    color: #7c7c7c;
  }
`;

const StyledDrawer = styled(motion.div)`
  width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
`;

interface StyledDrawerElementProps {
  checked?: boolean;
}

const StyledDrawerElement = styled.button`
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 44px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  background-color: ${({ checked }: StyledDrawerElementProps) =>
    checked ? "#515151" : "#414141"};
  transition: all 0.3s ease;
  outline: none;

  @media (min-width: 1440px) {
    &:hover {
      background-color: #313131;
    }
  }

  &:last-of-type {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

const StyledDrawerElementText = styled.p`
  font-family: "Inter";
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0;
  text-align: left;
`;

const arrowVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const SelectMainWrapper = styled.div`
  position: relative;
  width: 100%;
`;

interface DrawerWrapperProps {
  height: number;
  z?: number;
}

const DrawerWrapper = styled.div`
  position: absolute;
  z-index: ${({ z }: DrawerWrapperProps) => (z ? z : 1)};
  top: 30px;
  left: 0;
  width: 100%;
  overflow-y: hidden;
  height: ${({ height }: DrawerWrapperProps) => `${height}px`};
`;

const StyledMainWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
  width: 100%;
`;

const StyledLabel = styled.p`
  font-family: "Inter";
  font-size: 19px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0;
  text-align: left;
`;

interface CommonSelectProps {
  drawerInitialList: string[];
  z?: number;
  placeholder: string;
  label?: string;

  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

type SelectPropsOneChoice = CommonSelectProps & {
  required?: boolean;
  multichoice?: never;
};
type SelectPropsMultiChoice = CommonSelectProps & {
  multichoice?: boolean;
  required?: never;
};

type SelectProps = SelectPropsOneChoice | SelectPropsMultiChoice;

export const Select: FC<SelectProps> = ({
  drawerInitialList,
  z,
  multichoice = false,
  required = false,
  placeholder,
  label,

  inputValue,
  setInputValue,
}) => {
  const [isDrawerOpened, setDrawerOpened] = useState(false);
  const [areBordersVisible, setBordersVisible] = useState(true);
  const [inputValueArray, setInputValueArray] = useState<string[]>([]);
  const [drawerList, setDrawerList] = useState<
    { text: string; checked: boolean }[]
  >([]);

  useEffect(() => {
    const drawerTempList = drawerInitialList.map(item => {
      return {
        text: item,
        checked: false,
      };
    });
    setDrawerList([...drawerTempList]);
  }, []);

  const handleClick = multichoice
    ? (item: string, index: number) => {
        const tempDrawerList = [...drawerList];
        if (tempDrawerList[index].checked) {
          tempDrawerList[index] = {
            ...tempDrawerList[index],
            checked: false,
          };
          setDrawerList([...tempDrawerList]);
          const tempInputValueArray = [...inputValueArray];
          const stringIndex = tempInputValueArray.findIndex(item => {
            return item === tempDrawerList[index].text;
          });
          tempInputValueArray.splice(stringIndex, 1);
          setInputValueArray([...tempInputValueArray]);
          const tempString = tempInputValueArray.join(", ");
          setInputValue(tempString);
          return;
        }

        tempDrawerList[index] = {
          ...tempDrawerList[index],
          checked: true,
        };
        setDrawerList([...tempDrawerList]);

        const temp = [...inputValueArray, item];
        setInputValueArray([...temp]);
        const tempString = temp.join(", ");
        setInputValue(tempString);
      }
    : (item: string, index: number) => {
        setInputValue(item);
        setDrawerOpened(prev => !prev);
        setTimeout(() => {
          setBordersVisible(true);
        }, 155);
      };

  const drawerHeight = useMemo(() => {
    if (!required) {
      return (drawerInitialList.length + 1) * 31;
    } else {
      return drawerInitialList.length * 31;
    }
  }, [drawerInitialList, required]);

  return (
    <StyledMainWrapper>
      {label && <StyledLabel>{label}</StyledLabel>}
      <SelectMainWrapper>
        <StyledInputWrapper
          bordersVisibility={areBordersVisible}
          onClick={() => {
            if (isDrawerOpened) {
              setDrawerOpened(prev => !prev);
              setTimeout(() => {
                setBordersVisible(true);
              }, 155);

              return;
            }
            setDrawerOpened(prev => !prev);
            setBordersVisible(false);
          }}
        >
          <motion.button
            animate={isDrawerOpened ? "open" : "closed"}
            transition={{ duration: 0.2 }}
            variants={arrowVariants}
            type="button"
            style={{ outline: "none" }}
          >
            <StyledExpandLessIcon />
          </motion.button>

          <StyledInput placeholder={placeholder} readOnly value={inputValue} />
        </StyledInputWrapper>

        <AnimatePresence>
          {isDrawerOpened && (
            <DrawerWrapper z={z} height={drawerHeight}>
              <StyledDrawer
                transition={{ duration: 0.2 }}
                initial={{
                  y: "-100%",
                }}
                animate={{
                  y: 0,
                }}
                exit={{
                  y: "-100%",
                }}
              >
                {!multichoice && !required && (
                  <StyledDrawerElement
                    onClick={() => {
                      handleClick("", -1);
                    }}
                    type="button"
                  >
                    <StyledDrawerElementText>None</StyledDrawerElementText>
                  </StyledDrawerElement>
                )}
                {drawerList &&
                  drawerList.map((item, index) => {
                    return (
                      <StyledDrawerElement
                        onClick={() => {
                          handleClick(item.text, index);
                        }}
                        type="button"
                        key={item.text}
                        checked={item.checked}
                      >
                        <StyledDrawerElementText>
                          {item.text}
                        </StyledDrawerElementText>
                      </StyledDrawerElement>
                    );
                  })}
              </StyledDrawer>
            </DrawerWrapper>
          )}
        </AnimatePresence>
      </SelectMainWrapper>
    </StyledMainWrapper>
  );
};
