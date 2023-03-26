import { useNavigate, useLocation } from "react-router-dom";
import { FC, ReactNode, useState, useEffect } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import * as S from "./styles";

interface CommonHeaderProps {
  title: string;
  titleFont?: number;
}

interface HeaderWithAdditionalLinkProps extends CommonHeaderProps {
  additionalLink?: {
    text: string;
    path: string;
  };
  endIcon?: ReactNode;
  onIconClick?: () => void;

  arrowPath?: never;
  arrowFn?: never;
}
interface HeaderWithArrowProps extends CommonHeaderProps {
  arrowPath?: string;
  arrowFn?: () => Promise<void>;

  additionalLink?: never;
  endIcon?: never;
  onIconClick?: never;
}

export type HeaderProps = HeaderWithAdditionalLinkProps | HeaderWithArrowProps;

export const Header: FC<HeaderProps> = ({
  title,
  titleFont,

  arrowPath,
  arrowFn,

  additionalLink,
  endIcon,
  onIconClick,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [linkDisabled, setLinkDisabled] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLinkDisabled(false);
    }, 400);
  }, []);

  return (
    <S.Header>
      {arrowPath && (
        <S.ArrowButton
          onClick={async () => {
            arrowFn && (await arrowFn()); //  решить вопрос с этой функцией
            navigate(arrowPath, { state: { from: location.pathname } });
          }}
        >
          <ArrowBackIosNewIcon />
        </S.ArrowButton>
      )}

      <S.Title font={titleFont}>{title}</S.Title>

      {additionalLink && (
        <S.SecondaryLink
          to={linkDisabled ? location.pathname : additionalLink.path}
          state={{
            from: location.pathname,
          }}
        >
          {additionalLink.text}
        </S.SecondaryLink>
      )}

      {endIcon && <S.IconButton onClick={onIconClick}>{endIcon}</S.IconButton>}
    </S.Header>
  );
};
