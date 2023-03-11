import { FC, useMemo, forwardRef } from "react";
import { PostPattern, Flex } from "ui";
import { LikeButton } from "components/LikeButton";
import { ShareButton } from "components/ShareButton";
import { CommentButton } from "components/CommentButton";
import MoreDotsIcon from "images/MoreDotsIcon.svg";
import styled from "styled-components";
import { IPost } from "types";
import { intlFormatDistance } from "date-fns";
import { SERVER_URL } from "utils/api";
import { Avatar, Checkbox } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";

const StyledImageWrapper = styled(Flex)`
  width: 100%;
  height: min-content;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.secondaryColor};
`;

const StyledPostImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: contain;
  object-position: center;
`;

const StyledName = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

const StyledInactiveText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #828282;
`;

const StyledPostText = styled.p`
  font-size: 15px;
  font-weight: 400;
`;

const StyledMoreDotsIcon = styled.img`
  width: 30px;
  aspect-ratio: 1 / 1;
`;

interface IPostProps {
  post: IPost;
}

export const Post = forwardRef<HTMLElement, IPostProps>(({ post }, ref) => {
  const createDate = useMemo<string>(() => {
    return intlFormatDistance(new Date(post.createdAt), Date.now());
  }, [post.createdAt]);

  return (
    <PostPattern ref={ref}>
      <Flex a="center" j="space-between">
        <Flex a="center" g={10}>
          <Avatar
            src={
              post.owner.avatarUrl !== ""
                ? `${SERVER_URL}${post.owner.avatarUrl}`
                : ""
            }
          />
          <Flex d="column" g={1}>
            <StyledName>{post.owner.name}</StyledName>
            <StyledInactiveText>{createDate}</StyledInactiveText>
          </Flex>
        </Flex>
        <button>
          <StyledMoreDotsIcon src={MoreDotsIcon} />
        </button>
      </Flex>

      <StyledPostText>{post.text}</StyledPostText>

      {/* <StyledImageWrapper a="center" j="center">
        <StyledPostImage />
      </StyledImageWrapper> */}

      <Flex j="space-between" a="center">
        <Flex g={10}>
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />

          {/* <CommentButton comments={post.comments.length} />
          <ShareButton shares={post.shares.length} /> */}
        </Flex>
        <StyledInactiveText>{post.viewsCount} views</StyledInactiveText>
      </Flex>
    </PostPattern>
  );
});
